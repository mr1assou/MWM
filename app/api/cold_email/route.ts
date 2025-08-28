import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Client = { name: string; email: string };

function firstNameOf(full: string) {
    if (!full) return "there";
    const [first] = full.trim().split(/\s+/);
    return first || "there";
}

function buildEmail(first: string) {
    const subject = "Can MWMTECH help with software, automation, or a website?";
    const text = `Hi ${first},

I hope you’re doing well. 
We are a tech company — check our website: https://mwmofficiel.com

I'm from MWMTECH — we help businesses build custom software, automate repetitive work, and launch fast, conversion-focused websites.

Which of these is most useful for you right now?
1) Custom software or web app
2) Automating manual tasks (integrations/workflows)
3) A website to showcase your services

Reply with 1, 2, or 3 — or book a quick 15-min call:
https://calendar.app.google/jaYqRDByx9pUrK1X8

Best,
MWMTECH Team
contact@mwmofficiel.com

(If you’d prefer not to hear from us again, just reply STOP.)`;

    const html = `
  <div style="background:#f5f7fb;padding:28px 0;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.08);">
    <div style="height:6px;background:#4A6CF7;"></div>

    <div style="padding:22px 22px 6px;">
      <p style="margin:0 0 10px;color:#111827;font-size:16px;">Hi ${first},</p>

      <p style="margin:0 0 14px;color:#374151;font-size:16px;line-height:1.6;">
        I hope you’re doing well.
      </p>

      <p style="margin:0 0 14px;color:#374151;font-size:16px;line-height:1.6;">
            We are a tech company specializing in helping businesses automate their work, build custom software, and launch fast, conversion-focused websites. Many businesses struggle with repetitive tasks, outdated systems, or websites that fail to impress customers.
      </p>

      <p style="margin:0 0 14px;color:#374151;font-size:16px;line-height:1.6;">
        You can learn more on our website:
        <a href="https://mwmofficiel.com" style="color:#2563eb;text-decoration:none;" target="_blank">mwmofficiel.com</a>.
      </p>

      <div style="text-align:center;margin:10px 0 6px;">
        <a href="https://calendar.app.google/jaYqRDByx9pUrK1X8" target="_blank"
           style="display:inline-block;text-decoration:none;background:#4A6CF7;color:#fff;padding:12px 20px;border-radius:8px;font-weight:bold;">
          📅 Book Appointment Now
        </a>
      </div>

      <p style="margin:12px 0 0;color:#374151;font-size:14px;line-height:1.6;text-align:center;">
        If you’d rather not schedule a call, just reply to this email and we’ll get back to you.
      </p>

      <p style="margin:12px 0 0;color:#6b7280;font-size:13px;line-height:1.6;">
        — MWMTECH Team • <a href="mailto:contact@mwmofficiel.com" style="color:#2563eb;text-decoration:none;">contact@mwmofficiel.com</a>
      </p>

      <p style="margin:10px 0 0;color:#9ca3af;font-size:12px;">
        Prefer not to hear from us again? Reply <strong>STOP</strong> and we won’t contact you.
      </p>
    </div>
  </div>
</div>
`;

    return { subject, text, html };
}

export async function POST(request: Request) {
    console.log("received"); // server log

    let clients: Client[] = [];
    try {
        const body = await request.json();
        clients = Array.isArray(body?.clients) ? body.clients : [];
    } catch {
        // ignore
    }
    if (!clients.length) {
        clients = [
            { name: "Marwane Assou1", email: "marwane.assou@gmail.com" },
            { name: "Marwane Assou2", email: "marwane.assoupf@gmail.com" },
            { name: "Raghad Assou3", email: "marwane.assou@e-polytechnique.ma" },
        ];
    }

    const seen = new Set<string>();
    const list = clients
        .filter((c) => c?.email && typeof c.email === "string")
        .filter((c) => {
            const e = c.email.toLowerCase();
            if (seen.has(e)) return false;
            seen.add(e);
            return true;
        });

    if (!list.length) {
        return NextResponse.json({ error: "No valid recipients." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER || "contact@mwmofficiel.com",
            pass: process.env.SMTP_PASS || "@Marwane2003", // replace with env
        },
    });

    const tasks = list.map(async ({ name, email }) => {
        const first = firstNameOf(name);
        const { subject, text, html } = buildEmail(first);
        const mailOptions = {
            from: '"MWMTECH" <contact@mwmofficiel.com>',
            to: email,
            replyTo: "contact@mwmofficiel.com",
            subject,
            text,
            html,
        };
        return transporter.sendMail(mailOptions);
    });

    const results = await Promise.allSettled(tasks);
    const detail = list.map((c, i) => {
        const r = results[i];
        return {
            name: c.name,
            email: c.email,
            status: r.status,
            // @ts-ignore
            error: r.status === "rejected" ? String(r.reason?.message || r.reason) : undefined,
        };
    });

    const sent = detail.filter((d) => d.status === "fulfilled").length;
    return NextResponse.json(
        { message: `Sent ${sent}/${detail.length}`, detail },
        { status: 200 }
    );
}
