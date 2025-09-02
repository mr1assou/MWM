import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Client = { name: string; email: string };

function firstNameOf(full: string) {
    if (!full) return "there";
    const [first] = full.trim().split(/\s+/);
    return first || "there";
}

function buildEmail(first: string) {
    const subject = "Let’s turn your website into a client-winning asset";
    const text = `Hi ${first},

I hope you’re doing well. 
We are a tech company — check our website: ${process.env.WEBSITE_URL || "https://mwmofficiel.com"}

I'm from MWMTECH — we help businesses build custom software, automate repetitive work, and launch fast, conversion-focused websites.

Which of these is most useful for you right now?
1) Custom software or web app
2) Automating manual tasks (integrations/workflows)
3) A website to showcase your services

Reply with 1, 2, or 3 — or book a quick 15-min call:
${process.env.CALENDAR_URL || "https://calendar.app.google/jaYqRDByx9pUrK1X8"}

Best,
${process.env.FROM_NAME || "MWMTECH"} Team
${process.env.FROM_EMAIL || "contact@mwmofficiel.com"}

(If you’d prefer not to hear from us again, just reply STOP.)`;

    const html = `
  <div style="background:#f5f7fb;padding:28px 0;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.08);">
    <div style="height:6px;background:#4A6CF7;"></div>

    <div style="padding:22px 22px 6px;">
      <p style="margin:0 0 10px;color:#111827;font-size:16px;">Hey ${first},</p>

      <p style="margin:0 0 14px;color:#374151;font-size:16px;line-height:1.6;">
        Our team noticed that your business struggle with a common challenge: an outdated and unattractive website that drives clients away instead of bringing them in.
      </p>

      <p style="margin:0 0 14px;color:#374151;font-size:16px;line-height:1.6;">
            Did you know by having a clean, modern, and impressive website, you can not only attract more clients but also gain a competitive edge over others who still rely on broken or outdated sites.
      </p>

      <p style="margin:0 0 14px;color:#374151;font-size:16px;line-height:1.6;">
        If you’d like, my team and I can build this for you—tailored to your brand and goals.
      </p>
      <p style="margin:0 0 14px;color:#374151;font-size:16px;line-height:1.6;">
         Let’s schedule a quick call this week?
      </p>

      <p style="margin:12px 0 0;color:#6b7280;font-size:13px;line-height:1.6;">
        — ${process.env.FROM_NAME || "MWMTECH"} Team • <a href="mailto:${process.env.FROM_EMAIL || "contact@mwmofficiel.com"}" style="color:#2563eb;text-decoration:none;">${process.env.FROM_EMAIL || "contact@mwmofficiel.com"}</a>
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
            { name: "Marwane Assou", email: "marwane.assou@gmail.com" },
            { name: "Idriss Assou", email: "idrissassou38@gmail.com" },
            { name: "Georgia Brown's", email: "info@gbrowns.com" },
            { name: "Centrolina", email: "ciao@centrolinadc.com" },
            { name: "Chalet Bakery", email: "chalet.restaurant.bakery@gmail.com" },
            { name: "Boulevard", email: "events@boulevardrestaurant.com" },
            { name: "Mattina", email: "info@mattinasf.com" },
            { name: "Chotto Matte", email: "contact@chotto-matte.com" },
            { name: "Suerte", email: "hola@suerteatx.com" },
            { name: "Matt's El Rancho", email: "paul@MattsElRancho.com" },
            { name: "MILA", email: "reservations@milarestaurant.com" },
            { name: "Claudie", email: "reservations@claudierestaurant.com" },
            { name: "Pamplemousse", email: "pamplemoussemiami@gmail.com" },
            { name: "Pylos", email: "info@pylosrestaurant.com" },
            { name: "The Smith", email: "info@thesmithrestaurant.com" },
            { name: "Morandi", email: "info@morandiny.com" },
            { name: "53 NYC", email: "info@53-nyc.com" },
            { name: "Ever", email: "info@ever-restaurant.com" },
            { name: "Southern Chicago", email: "info@southernchicagorestuarant.com" },
            { name: "Alpana", email: "alpanachicago@gmail.com" },
            { name: "Boka", email: "events@bokachicago.com" },
            { name: "After Chicago", email: "info@after-chicago.com" },
            { name: "Conversation", email: "conversation@thompsonhotels.com" },
            { name: "Spinasse", email: "info@spinasse.com" },
            { name: "Chan Seattle", email: "chanseattle@gmail.com" },
            { name: "The Gladly", email: "talk@thegladly.com" },
            { name: "Olivia", email: "info@oliviadenver.com" },
            { name: "Petite Violette", email: "info@petitevioletterestaurant.com" },
            { name: "Le Bon Nosh", email: "hello@lebonnosh.com" },
            { name: "République", email: "info@republiquela.com" },
            { name: "Zahav", email: "info@zahavrestaurant.com" },
            { name: "Toups' Meatery", email: "molly@toupsmeatery.com" },

            // --- Schools ---
            { name: "Iolani School", email: "info@iolani.org" },
            { name: "Collegiate School", email: "connect@collegiateschool.org" },
            { name: "Millersville University", email: "admissions@millersville.edu" },
            { name: "Northwestern Law", email: "admissions@law.northwestern.edu" },
            { name: "University of Houston", email: "admissions@uh.edu" },
            { name: "Marquette University", email: "admissions@marquette.edu" },
            { name: "Oklahoma Christian University", email: "admissions@oc.edu" },
            { name: "The Harker School", email: "communications@harker.org" },
            { name: "Horace Mann School", email: "admissions@horacemann.org" },
            { name: "German Language School Cleveland", email: "info@germanlanguageschoolcleveland.org" },
            { name: "Mary Immaculate School", email: "info@maryimmaculateschool.org" },
            { name: "Ennis ISD", email: "info@ennis.k12.tx.us" },
            { name: "Sidwell Friends School", email: "admissions@sidwell.edu" },
            { name: "University of Tennessee", email: "admissions@utk.edu" },
            { name: "Phillips Exeter Academy", email: "admit@exeter.edu" },
            { name: "Choate Rosemary Hall", email: "admission@choate.edu" },
            { name: "The Hotchkiss School", email: "admission@hotchkiss.org" },
            { name: "Groton School", email: "admission@groton.org" },

            // --- Real Estate ---
            { name: "Douglas Elliman", email: "info@elliman.com" },
            { name: "Corcoran Group", email: "hello@corcoran.com" },
            { name: "Coldwell Banker", email: "info@coldwellbanker.com" },
            { name: "Keller Williams", email: "support@kw.com" },
            { name: "Compass", email: "info@compass.com" },
            { name: "RE/MAX", email: "contact@remax.com" },
            { name: "Century 21", email: "info@century21.com" },
            { name: "Howard Hanna", email: "info@howardhanna.com" },
            { name: "Baird & Warner", email: "info@bairdwarner.com" },
            { name: "William Raveis", email: "info@raveis.com" },
            { name: "Long & Foster", email: "info@longandfoster.com" },
            { name: "Redfin", email: "press@redfin.com" },
            { name: "Sotheby’s Realty", email: "info@sothebysrealty.com" },
            { name: "Better Homes and Gardens", email: "info@bhgre.com" },
            { name: "Berkshire Hathaway", email: "info@bhhs.com" },
            { name: "Windermere", email: "info@windermere.com" },
            { name: "Allen Tate", email: "info@allentate.com" },
            { name: "Crye-Leike", email: "info@crye-leike.com" },
            { name: "John L. Scott", email: "info@johnlscott.com" },
            { name: "ERA Real Estate", email: "info@era.com" },

            // --- Makeup ---
            { name: "Emily Lynn & Co.", email: "info@emilylynnandcompany.com" },
            { name: "Jessica Serna", email: "info@jessicasernamakeup.com" },
            { name: "Edward Sanchez", email: "info@edwardsanchezcosmetics.com" },
            { name: "Star Makeup Studio", email: "crisger@starmakeupstudio.com" },
            { name: "Victoria Stiles", email: "info@victoriastiles.com" },
            { name: "NR Beauty Co", email: "hello@nrbeautyco.com" },
            { name: "PriscillaM Beauty", email: "Priscillambeautyinquiry@gmail.com" },
            { name: "Jenna Marie", email: "jenna@jennamariebeauty.com" },
            { name: "Beth Follert", email: "bfollert@gmail.com" },
            { name: "Emily Dimant", email: "emilysd@gmail.com" },
            { name: "Rare Bird Beauties", email: "booking@rarebirdbeauties.com" },
            { name: "Joanna B. Artistry", email: "joannabartistry@gmail.com" },
            { name: "Lauren Royhman", email: "contact@makeupbylaurenroyhman.com" },
            { name: "Madeline Rouge", email: "Hello@MadelineRouge.com" },
            { name: "Jan Tinkley", email: "jantinkley@gmail.com" },
            { name: "Makeup by Ade", email: "info@makeupbyade.com" },
            { name: "Adrienn", email: "beautybyadrienn@gmail.com" },
            { name: "Lisa Gleeson", email: "Lrgleeson@msn.com" },
            { name: "Lena Solo", email: "lsolomakeup@gmail.com" },
            { name: "Makeup Madame", email: "MAKEUPMADAME@GMAIL.COM" },
            { name: "Nicole Toledo", email: "nicoletoledomakeupartistry@gmail.com" },
            { name: "Christy K", email: "CHRISTYKMAKEUPHAIR@GMAIL.COM" },
            { name: "Atlanta Makeup Artist", email: "TheAtlantaMakeupArtist@gmail.com" },
            { name: "Brushworx", email: "brushworxinfo@gmail.com" },
            { name: "Alexander Breijak", email: "breijakfx@gmail.com" },
            { name: "Team Glam Detroit", email: "Kristin@teamglamdetroit.com" },
            { name: "Robbin Kujus", email: "robbinkujus@gmail.com" },
            { name: "Sonja Gjokaj", email: "sonja.gjokaj@gmail.com" },
            { name: "Shana Astrachan", email: "shanamakeup@gmail.com" },
            { name: "PDX Glam Squad", email: "PdxGlamSquad@gmail.com" },

            // --- Ecommerce ---
            { name: "Knix", email: "info@knix.com" },
            { name: "Cuts Clothing", email: "info@cutsclothing.com" },
            { name: "Marc's Magic Rub", email: "contact@marcsmagicrub.com" },
            { name: "Blume", email: "hi@blume.com" },
            { name: "Yellow Beauty", email: "hello@yellowbeauty.com" },
            { name: "Halfdays", email: "heythere@halfdays.com" },
            { name: "Joggy", email: "hello@getjoggy.com" },
            { name: "The Doux", email: "customerservice@thedoux.com" },
            { name: "Three Ships", email: "hello@threeshipsbeauty.com" },
            { name: "MUDWTR", email: "press@mudwtr.com" },
            { name: "G FUEL", email: "info@gfuel.com" },
            { name: "Diaspora Co.", email: "info@diasporaco.com" },
            { name: "Cometeer", email: "support@cometeer.com" },
            { name: "Warby Parker", email: "help@warbyparker.com" },
            { name: "Dollar Shave Club", email: "support@dollarshaveclub.com" },
            { name: "Liquid Death", email: "info@liquiddeath.com" },
            { name: "Appointed", email: "hello@appointed.co" },
            { name: "Caraway", email: "help@carawayhome.com" },
            { name: "JuneShine", email: "orders@juneshine.co" },
            { name: "Hint", email: "support@hint.com" },
            { name: "Ten Little", email: "hello@tenlittle.com" },
            { name: "Daily Harvest", email: "hello@daily-harvest.com" },
            { name: "Glossier", email: "gteam@glossier.com" },
            { name: "Allbirds", email: "help@allbirds.com" },
            { name: "Billie", email: "hello@mybillie.com" },
            { name: "Harry's", email: "help@harrys.com" },
            { name: "Briogeo", email: "support@briogeohair.com" },
            { name: "Bark", email: "happyteam@bark.co" },
            { name: "Solo Stove", email: "support@solostove.com" },
            { name: "Drunk Elephant", email: "info@drunkelephant.com" },

            // --- Sports ---
            { name: "The Academy of Sports Performance", email: "Training@AcademySportsPerformance.com" },
            { name: "Perfect Performance NOVA", email: "info@Perfect-PerformanceNOVA.com" },
            { name: "The St. James Performance Academy", email: "admissions@thestjames.com" },
            { name: "The Performance Academy", email: "info@tpanc.com" },
            { name: "IMG Academy", email: "info@imgacademy.com" },
            { name: "Philippi Sports Institute", email: "office@philippisportsinstitute.com" },
            { name: "The EDGE Sports & Fitness", email: "Wellness@edgevt.com" },
            { name: "Lee Brothers Academy", email: "leeacademy@aol.com" },
            { name: "Colorado Rapids Youth Soccer Club", email: "info@rapidsyouthsoccer.org" },
            { name: "National Academy of Athletics", email: "info@naofa.us" },
            { name: "Infinite Vision Sports Academy", email: "info@infinitevisionsports.com" },
            { name: "Seminole Sports Academy", email: "info@Seminolesportsacademy.com" },
            { name: "Iron City Boulders", email: "ironcityboulders@momentsclimbing.com" },
            { name: "Climb Tulsa", email: "caleb@climbtulsa.com" },
            { name: "Premier Athletics", email: "info@premierathletics.com" },
            { name: "New Heights Gymnastics Academy", email: "newheightsgymnasticsacademy@gmail.com" },
            { name: "Kentucky Gymnastics Academy", email: "office@kgagym.com" },
            { name: "The Lax Lab", email: "info@thelaxlab.com" },
            { name: "Boys Lax Academy", email: "Hello@njltlacrosse.com" },
            { name: "BARWIS", email: "englewood@barwis.com" },
            { name: "Sports Academy & Racquet Club", email: "dan@sportsacademy.com" },
            { name: "Vagabond BJJ", email: "josh@vagabondbjj.com" },
            { name: "Central Jersey Volleyball Academy", email: "info@cjva.org" },
            { name: "La Jolla Fencing Academy", email: "lajollafencing@gmail.com" },
            { name: "In The Zone Baseball & Softball Academy", email: "contact@inthezonenj.com" },
            { name: "M14Hoops Westfield", email: "Westfieldinfo@M14HOOPS.COM" },
            { name: "Lamont Smith Basketball Academy", email: "lsmith@lsbballacademy.com" },
            { name: "Rick Macci Tennis Academy", email: "info@rickmacci.com" },
            { name: "SOVRN Performance Lab", email: "contact@sovrnperformancelab.com" },
            { name: "CrossFit Tustin", email: "info@crossfittustin.com" },

            { name: "Magnolia Acupuncture", email: "marwane.assou@gmail.com" }, // covingtonacupuncture.com
            { name: "Magnolia Acupuncture", email: "magnolia.acu@gmail.com" }, // covingtonacupuncture.com
            { name: "HJ Acupuncture", email: "hjacupunctureclinic@gmail.com" }, // hj-acupuncture.com
            { name: "Apex Spine & Sport", email: "apexspineandsport@gmail.com" }, // apexspineandsport.com
            { name: "Acupuncture Center", email: "acucenternoco@gmail.com" }, // ccmu.edu
            { name: "Colorado Center", email: "drmlucas@acupuncturewoman.com" }, // ccmu.edu
            { name: "Set The Chi Free", email: "jacqui@setthechifree.com" }, // ccmu.edu
            { name: "Point Balance", email: "pointbalanceacupuncture@gmail.com" }, // ccmu.edu
            { name: "Dialectic Healing", email: "dialectichealing@gmail.com" }, // ccmu.edu
            { name: "Zendigo Acupuncture", email: "Jennie@zendigoacupuncture.com" }, // ccmu.edu
            { name: "Drouillard Acupuncture", email: "brandon@bdAcupuncture.net" }, // ccmu.edu
            { name: "Boost Acupuncture", email: "juliejohnsacu@gmail.com" }, // ccmu.edu
            { name: "Mariposa Spa", email: "mariposadayspa@gmail.com" }, // mariposadayspa.net
            { name: "Wildflower Spa", email: "wfgroupbookings@gmail.com" }, // thewildflowerdayspa.com
            { name: "8th Day Spa", email: "8thdayspafw@gmail.com" }, // 8thdayspafw.com
            { name: "Renee’s Spa", email: "reneesdayspa@gmail.com" }, // reneesdayspa.com
            { name: "Xhale Spa", email: "xhaledayspa@gmail.com" }, // xhaledayspa.com
            { name: "Wine N Cheese Spa", email: "winencheesedayspa@gmail.com" }, // winencheesedayspa.com
            { name: "Premier Spa", email: "premierdayspaandsalon.al@gmail.com" }, // premiersuites.info
            { name: "Midtown Spa", email: "midtowndayspa1014@gmail.com" }, // midtowndayspamd.com
            { name: "Day Spa Escape", email: "info.dayspaescape@gmail.com" }, // dayspaescape.com
            { name: "New Spring Spa", email: "newspringdayspa@gmail.com" }, // newspringdayspa.com
            { name: "The Middle Wellness", email: "themiddlegj@gmail.com" }, // themiddlewellness.com
            { name: "Wellness Center LA", email: "thewmwellnesscenter@gmail.com" }, // wmwellnesscenter.com
            { name: "Woods’ Rose Wellness", email: "naturobutte@gmail.com" }, // woodsrosewellness.com
            { name: "Heal By Hand", email: "leachchiro@gmail.com" }, // healbyhand.com
            { name: "Redefining Wellness", email: "mail.rwc@gmail.com" }, // redefiningwellnesscenter.com
            { name: "Sanctuary Wellness", email: "sanctuaryberryville@gmail.com" }, // sanctuaryberryville.com
            { name: "Pure Life Massage", email: "purelifemassage@gmail.com" }, // purelifemassage.weebly.com
            { name: "East of Equinox Spa", email: "eoedayspa@gmail.com" }, // eastofequinoxdayspa.com
            { name: "BHAV Spa", email: "bhavspa@gmail.com" }, // bhavspa.com
            { name: "Saucha Spa", email: "sauchavt@gmail.com" }, // sauchavt.com
            { name: "A New You Spa", email: "annieesthetics@gmail.com" }, // m.facebook.com
            { name: "Revive Skin Spa", email: "reviveskinspa@gmail.com" }, // revivespavt.com
            { name: "Apollo Spa", email: "apollosalonandspa@gmail.com" }, // apollosalonspa.com
            { name: "Spa at Saco Mills", email: "spaatsacomills@gmail.com" }, // spaatsacomills.com
            { name: "Spa Studios", email: "thespastudiosmaine@gmail.com" }, // thespastudiosmaine.com
            { name: "Katie Cote Spa", email: "katiecotespa@gmail.com" }, // katiecotespa.com
            { name: "Kennebec Spa", email: "wellnessspamaine@gmail.com" }, // kvwellnesscenter.com
            { name: "Renew ME Spa", email: "megan.work47@gmail.com" }, // renewmebelfast.com
            { name: "Amati Spa", email: "amatidayspa@gmail.com" }, // amatidayspa.com
            { name: "Blue Chic Boutique", email: "shopbluechicboutique@gmail.com" },
            { name: "The Grapevine of Alton", email: "thegrapevineofalton@gmail.com" },
            { name: "Hami Boutique", email: "shophamiboutique@gmail.com" },
            { name: "The Fashion Farm Boutique", email: "fashionfarmboutique@gmail.com" },
            { name: "Luminous Boutique Clothing", email: "luminousboutiqueclothing@gmail.com" },
            { name: "Amour Boutique", email: "amourboutiqueprattville@gmail.com" },
            { name: "The Dragonfly Boutique", email: "TheDragonflylexington@gmail.com" },
            { name: "Zeal Boutique", email: "shopzealphotos@gmail.com" },
            { name: "Posh West Boutique", email: "poshwestboutique@gmail.com" },
            { name: "Threads – A Clothing Boutique", email: "threadsaclothingboutique@gmail.com" },
            { name: "Olivia Clare Boutique", email: "oliviaclareboutique@gmail.com" },
            { name: "Blue Elephant Boutique", email: "blue.elephant.boutique@gmail.com" },
            { name: "R&R Boutique And More", email: "rr.photography.boutique@gmail.com" },
            { name: "Treehouse Boutique", email: "treehouse.boutique@gmail.com" },
            { name: "The French Rose Boutique", email: "shopthefrenchrose@gmail.com" },
            { name: "True Boutique", email: "trueboutiquearkansas@gmail.com" },
            { name: "Twisted Attitude Boutique", email: "twistedattitudeboutique@gmail.com" },
            { name: "Dale's Clothing", email: "dalesorders@gmail.com" },
            { name: "A’propos Boutique", email: "aproposboutique@gmail.com" },
            { name: "Revival Boutique", email: "RevivalBoutiquegroup@gmail.com" },
            { name: "Fannie’s Boutique", email: "shopfannies@gmail.com" },
            { name: "Queen of 5 Boutique", email: "Queenof5boutique@gmail.com" },
            { name: "White Lotus Boutique", email: "whitelotusflorida@gmail.com" },
            { name: "Who is She Boutique", email: "whoissheboutiquefl@gmail.com" },
            { name: "Salty Roots Boutique", email: "saltyrootsbtq@gmail.com" },
            { name: "Howdy Honey Boutique", email: "Howdy.honeyy@gmail.com" },
            { name: "Bungalow Boutique and Gifts", email: "cboring10@gmail.com" },
            { name: "Harajuku Boutique", email: "harajuku.santana.row@gmail.com" },
            { name: "Elisa Wen Boutique", email: "elisawenboutique@gmail.com" },
            { name: "Girl Boy Girl Boutique", email: "girlboygirlcarmel@gmail.com" },
            { name: "The Lotus Boutique", email: "thelotusboutiquesb@gmail.com" },
            { name: "Belle Boutique OC", email: "belleboutiqueoc@gmail.com" },
            { name: "The Loop Sonoma", email: "theloop07@gmail.com" },
            { name: "Salt Boutique", email: "sbsaltclothing@gmail.com" },
            { name: "Robles Boutique", email: "roblesboutique2021@gmail.com" },
            { name: "Penelope Boutique", email: "penelopeboutique@gmail.com" },
            { name: "Pretty As You Please Boutique", email: "prettyasyoupleasedh@gmail.com" },
            { name: "Deja Vintage Boutique", email: "dejavintageboutique@gmail.com" },
            { name: "Clotheshorse Menswear", email: "clotheshorsemenswear@gmail.com" },
            { name: "Indulge Boutique", email: "indulgeut@gmail.com" },
            { name: "The Wardrobe Modern Menswear", email: "wardrobeokc@gmail.com" },
            { name: "C|S Menswear", email: "csmenswear1@gmail.com" },
            { name: "Act II Consignment Boutique", email: "act2boutiquellc@gmail.com" },
            { name: "Bella Boutique Consignment", email: "bellaconsign@gmail.com" },
            { name: "Baystate Boutique & Consignment", email: "baystateboutiqueconsignment@gmail.com" },
            { name: "Panache Consignment Boutique", email: "panacheconsignboutique@gmail.com" },
            { name: "Lucky Finds Boutique", email: "luckyfindsboutique@gmail.com" },
            { name: "Peridot Boutique", email: "peridotboutique@gmail.com" },
            { name: "Trove Vintage Boutique", email: "trovevintageboutique@gmail.com" },
            { name: "Pigments Boutique", email: "pigmentsboutique@gmail.com" },
            { name: "Modo Boutique", email: "modo.email@gmail.com" },
            { name: "Hoot-n-Annie Resale Boutique", email: "hootnanniepdx@gmail.com" },
            { name: "Xtabay Vintage Boutique", email: "xtabayvintage@gmail.com" },
            { name: "Vagabond Boutique", email: "Vagabond.Boutique@gmail.com" },
            { name: "Wildwood Boutique", email: "wildwoodboutique@gmail.com" },
            { name: "Penn House Boutique", email: "pennhouseboutique@gmail.com" },
            { name: "Simply J Boutique", email: "simplyjhershey@gmail.com" },
            { name: "Malena’s Vintage Boutique", email: "shopmalenas@gmail.com" },
            { name: "Kushy Boutique", email: "kushyboutique@gmail.com" },
            { name: "Gracie Jaye’s Boutique", email: "graciejayesboutique@gmail.com" },

            { name: "Smith Tax Services", email: "info@smithtaxcpa.com" },
            { name: "Bright Accounting Group", email: "contact@brightaccounting.com" },
            { name: "Harper Financial Advisors", email: "jharper@harperfa.com" },
            { name: "Riverbend CPAs", email: "support@riverbendcpa.com" },
            { name: "Summit Tax & Accounting", email: "info@summittaxcpa.com" },
            { name: "Oakwood Financial Services", email: "info@oakwoodfinancial.com" },
            { name: "Miller & Co. CPAs", email: "amiller@miller-cpas.com" },
            { name: "Evergreen Tax Solutions", email: "contact@evergreencpa.com" },
            { name: "NorthStar Advisory", email: "info@northstaradvisory.com" },
            { name: "Greenfield Accounting", email: "contact@greenfieldcpa.com" },
            { name: "Hamilton CPA Group", email: "info@hamiltoncpa.com" },
            { name: "Metro Financial Advisors", email: "contact@metrofa.com" },
            { name: "Reliable Tax Service", email: "support@reliabletax.com" },
            { name: "Unity Accounting", email: "info@unitycpa.com" },
            { name: "Cedar Hill Tax Advisors", email: "info@cedarhillcpa.com" },
            { name: "Johnson & Clark CPAs", email: "tclark@johnsonclarkcpa.com" },
            { name: "Vista Accounting Solutions", email: "support@vistaaccounting.com" },
            { name: "Blue Ridge CPAs", email: "info@blueridgecpa.com" },
            { name: "Integrity Tax Group", email: "support@integritytaxgroup.com" },
            { name: "Westfield Advisors", email: "contact@westfieldfa.com" },
            { name: "Anderson Financial Services", email: "info@andersonfinancial.com" },
            { name: "Elm Street CPAs", email: "elmstreetcpa@gmail.com" },
            { name: "Pioneer Tax & Finance", email: "info@pioneertaxcpa.com" },
            { name: "Summit Wealth Advisors", email: "contact@summitwealth.com" },
            { name: "Carter Tax Consultants", email: "info@cartercpa.com" },
            { name: "Horizon CPAs", email: "info@horizoncpa.com" },
            { name: "Atlas Accounting", email: "contact@atlascpa.com" },
            { name: "PrimePoint Advisors", email: "support@primepointfa.com" },
            { name: "Oak Grove Tax Service", email: "oakgrovetax@gmail.com" },
            { name: "ClearPath CPAs", email: "info@clearpathcpa.com" },
            { name: "Riverstone Advisors", email: "info@riverstonefa.com" },
            { name: "Franklin CPA Firm", email: "support@franklincpa.com" },
            { name: "Harbor Tax & Advisory", email: "info@harborcpa.com" },
            { name: "AccuTrust Accounting", email: "info@accutrustcpa.com" },
            { name: "Global CPA Services", email: "support@globalcpa.com" },
            { name: "TrueNorth Advisors", email: "info@truenorthfa.com" },
            { name: "Cornerstone Accounting", email: "cornerstonecpa@gmail.com" },
            { name: "Redwood CPAs", email: "contact@redwoodcpa.com" },
            { name: "Aspen Financial", email: "info@aspenfinancial.com" },
            { name: "EverTrust CPAs", email: "support@evertrustcpa.com" },
            { name: "BrightLine Tax", email: "info@brightlinetax.com" },
            { name: "CapitalView Advisors", email: "info@capitalviewfa.com" },
            { name: "Westside CPAs", email: "support@westsidecpa.com" },
            { name: "Summit Edge Advisors", email: "contact@summitedge.com" },
            { name: "Parkway Tax Group", email: "parkwaycpa@gmail.com" },
            { name: "NextGen CPAs", email: "support@nextgencpa.com" },
            { name: "Liberty Tax Solutions", email: "info@libertycpa.com" },
            { name: "Keystone Accounting", email: "contact@keystonecpa.com" },
            { name: "NorthBridge Advisors", email: "info@northbridgefa.com" },
            { name: "Silverline CPAs", email: "support@silverlinecpa.com" },

            { name: "IronWorks Gym", email: "info@ironworksgym.com" },
            { name: "Momentum Fitness", email: "support@momentumfit.com" },
            { name: "Peak Performance Training", email: "contact@peakperformfit.com" },
            { name: "True Grit Fitness", email: "info@truegritfitness.com" },
            { name: "Next Level Training", email: "info@nextlevelfit.com" },
            { name: "Elevate Strength", email: "support@elevatestrength.com" },
            { name: "Balance Wellness", email: "info@balancewellness.com" },
            { name: "CorePower Training", email: "contact@corepowertraining.com" },
            { name: "Eastside Boxing Club", email: "info@eastsideboxing.com" },
            { name: "Athlete’s Edge", email: "support@athletesedge.com" },
            { name: "Prime Fitness Studio", email: "primefitnessstudio@gmail.com" },
            { name: "Titan Training Center", email: "info@titantraining.com" },
            { name: "Active Life Coaching", email: "contact@activelifecoaching.com" },
            { name: "Fit Nation Gym", email: "info@fitnationgym.com" },
            { name: "Dynamic Fitness", email: "support@dynamicfitness.com" },
            { name: "Revive Wellness Coaching", email: "revivewellness@gmail.com" },
            { name: "Stronger Together Gym", email: "info@strongertogether.com" },
            { name: "Summit Coaching", email: "summitcoachinginfo@gmail.com" },
            { name: "Alpha Training Systems", email: "info@alphatraining.com" },
            { name: "Transform Fitness", email: "contact@transformfitness.com" },
            { name: "Ignite Performance", email: "info@igniteperformance.com" },
            { name: "Flex Gym & Wellness", email: "support@flexgym.com" },
            { name: "Urban Strength Studio", email: "urbanstrengthstudio@gmail.com" },
            { name: "Thrive Fitness", email: "info@thrivefitness.com" },
            { name: "Edge Training", email: "support@edgetraining.com" },
            { name: "Resilience Coaching", email: "resiliencefit@gmail.com" },
            { name: "Victory Fitness", email: "contact@victoryfitness.com" },
            { name: "Momentum Wellness", email: "info@momentumwellness.com" },
            { name: "The Training Room", email: "support@trainingroom.com" },
            { name: "Pulse Gym", email: "pulsefitcenter@gmail.com" },
            { name: "Rise Up Coaching", email: "info@riseupcoaching.com" },
            { name: "Synergy Fitness", email: "support@synergyfitness.com" },
            { name: "Velocity Training", email: "contact@velocitytrain.com" },
            { name: "Empower Wellness", email: "info@empowerwellness.com" },
            { name: "ProActive Fitness", email: "proactivefit@gmail.com" },
            { name: "Core Strength Studio", email: "info@corestrengthstudio.com" },
            { name: "EverFit Coaching", email: "support@everfitcoaching.com" },
            { name: "Unity Fitness", email: "unityfitness@gmail.com" },
            { name: "Inspire Performance", email: "info@inspireperformance.com" },
            { name: "Champion Training Center", email: "contact@championtraining.com" },
            { name: "Wellness Path Coaching", email: "wellnesspath@gmail.com" },
            { name: "Ascend Fitness", email: "support@ascendfitness.com" },
            { name: "MindBody Coaching", email: "mindbodycoaching@gmail.com" },
            { name: "Powerhouse Gym", email: "info@powerhousegym.com" },
            { name: "Strength Society", email: "strengthsociety@gmail.com" },
            { name: "Zen Wellness Studio", email: "contact@zenwellness.com" },
            { name: "Iron Tribe Fitness", email: "info@irontribe.com" },
            { name: "Phoenix Coaching", email: "phoenixcoaching@gmail.com" },
            { name: "Vitality Fitness", email: "support@vitalityfitness.com" },
            { name: "Energize Wellness", email: "energizewellness@gmail.com" },



            { name: "Horizon Accounting", email: "info@horizoncpa.com" },
            { name: "Evergreen CPAs", email: "support@evergreencpas.com" },
            { name: "Summit Tax Solutions", email: "contact@summittaxsolutions.com" },
            { name: "BrightLine CPAs", email: "info@brightlinecpa.com" },
            { name: "Carter & Co. Tax", email: "support@cartercpa.com" },
            { name: "Unity CPAs", email: "info@unitycpas.com" },
            { name: "TrueNorth Financial", email: "contact@truenorthfinancial.com" },
            { name: "Harbor Accounting", email: "info@harborcpa.com" },
            { name: "Franklin Advisory", email: "support@franklinadvisory.com" },
            { name: "Westfield CPAs", email: "info@westfieldcpa.com" },
            { name: "NorthBridge Finance", email: "contact@northbridgefa.com" },
            { name: "CapitalView Accounting", email: "info@capitalviewcpa.com" },
            { name: "Atlas CPAs", email: "support@atlascpas.com" },
            { name: "Liberty Tax Group", email: "info@libertytaxgroup.com" },
            { name: "Parkway CPAs", email: "contact@parkwaycpa.com" },
            { name: "Keystone Advisory", email: "support@keystoneadvisory.com" },
            { name: "NextGen Tax", email: "info@nextgentax.com" },
            { name: "Aspen CPAs", email: "contact@aspencpa.com" },
            { name: "Cornerstone Accounting", email: "info@cornerstoneaccounting.com" },
            { name: "Riverstone CPAs", email: "support@riverstonecpa.com" },
            { name: "Blue Ridge CPAs", email: "info@blueridgecpas.com" },
            { name: "Integrity Tax", email: "support@integritytax.com" },
            { name: "AccuTrust Accounting", email: "info@accutrustaccounting.com" },
            { name: "Summit Edge CPAs", email: "contact@summitedgecpas.com" },
            { name: "Elm Street Tax", email: "info@elmstreettax.com" },
            { name: "Global CPAs", email: "support@globalcpas.com" },
            { name: "Vista Financial", email: "info@vistafinancial.com" },
            { name: "Oakwood CPAs", email: "contact@oakwoodcpa.com" },
            { name: "Silverline Accounting", email: "support@silverlineaccounting.com" },
            { name: "EverTrust CPAs", email: "info@evertrustcpa.com" },
            { name: "Cedar Hill CPAs", email: "contact@cedarhillcpas.com" },
            { name: "Metro CPAs", email: "info@metrocpa.com" },
            { name: "Reliable Accounting", email: "support@reliableaccounting.com" },
            { name: "Oak Grove Financial", email: "info@oakgrovefinancial.com" },
            { name: "Anderson CPAs", email: "contact@andersoncpas.com" },
            { name: "Summit Wealth CPAs", email: "support@summitwealthcpas.com" },
            { name: "Hamilton CPAs", email: "info@hamiltoncpas.com" },
            { name: "Unity Tax Services", email: "support@unitytaxservices.com" },
            { name: "PrimePoint CPAs", email: "contact@primepointcpa.com" },
            { name: "NorthStar CPAs", email: "info@northstarcpas.com" },
            { name: "Riverbend CPAs", email: "support@riverbendcpas.com" },
            { name: "Evergreen Tax", email: "info@evergreentax.com" },
            { name: "Horizon Tax", email: "contact@horizontax.com" },
            { name: "TruePath CPAs", email: "info@truepathcpa.com" },
            { name: "Integrity Finance", email: "support@integrityfinance.com" },
            { name: "Bright Accounting", email: "info@brightaccounting.com" },
            { name: "Capital Accountant", email: "contact@capitalaccountant.com" },
            { name: "Summit Advisors", email: "support@summitadvisors.com" },
            { name: "Westside CPAs", email: "info@westsidecpas.com" },


            { name: "Pulse Fitness", email: "info@pulsefitness.com" },
            { name: "Momentum Gym", email: "support@momentumgym.com" },
            { name: "Iron Tribe", email: "contact@irontribefitness.com" },
            { name: "Rise Up Training", email: "info@riseuptraining.com" },
            { name: "Alpha Fitness", email: "support@alphafitness.com" },
            { name: "True Grit Coaching", email: "info@truegritcoaching.com" },
            { name: "Core Strength Gym", email: "contact@corestrengthgym.com" },
            { name: "Zen Wellness", email: "support@zenwellness.com" },
            { name: "Champion Gym", email: "info@championgym.com" },
            { name: "Phoenix Fitness", email: "support@phoenixfitness.com" },
            { name: "Balance Training", email: "info@balancetraining.com" },
            { name: "Ignite Coaching", email: "contact@ignitecoaching.com" },
            { name: "Elevate Gym", email: "support@elevategym.com" },
            { name: "Summit Fitness", email: "info@summitfitness.com" },
            { name: "EverFit Studio", email: "contact@everfitstudio.com" },
            { name: "Resilience Training", email: "support@resiliencetraining.com" },
            { name: "Unity Wellness", email: "info@unitywellness.com" },
            { name: "Peak Coaching", email: "contact@peakcoaching.com" },
            { name: "Flex Studio", email: "support@flexstudio.com" },
            { name: "ProActive Gym", email: "info@proactivegym.com" },
            { name: "Stronger Together", email: "support@strongertogethergym.com" },
            { name: "Thrive Coaching", email: "info@thrivecoaching.com" },
            { name: "Next Level Gym", email: "contact@nextlevelgym.com" },
            { name: "Dynamic Training", email: "support@dynamictraining.com" },
            { name: "Urban Strength", email: "info@urbanstrength.com" },
            { name: "Evergreen Wellness", email: "contact@evergreenwellness.com" },
            { name: "Pulse Training", email: "support@pulsetraining.com" },
            { name: "Victory Fitness", email: "info@victoryfitness.com" },
            { name: "Synergy Coaching", email: "contact@synergycoaching.com" },
            { name: "Ascend Training", email: "support@ascendtraining.com" },
            { name: "Powerhouse Fitness", email: "info@powerhousefitness.com" },
            { name: "Energize Studio", email: "contact@energizestudio.com" },
            { name: "Inspire Coaching", email: "support@inspirecoaching.com" },
            { name: "Velocity Gym", email: "info@velocitygym.com" },
            { name: "Transform Training", email: "contact@transformtraining.com" },
            { name: "Revive Coaching", email: "support@revivecoaching.com" },
            { name: "Unity Fitness", email: "info@unityfitness.com" },
            { name: "Empower Training", email: "contact@empowertraining.com" },
            { name: "ZenFit Studio", email: "support@zenfitstudio.com" },
            { name: "Ignite Wellness", email: "info@ignitewellness.com" },
            { name: "Pulse Coaching", email: "contact@pulsecoaching.com" },
            { name: "Prime Fitness", email: "support@primefitness.com" },
            { name: "Core Wellness", email: "info@corewellness.com" },
            { name: "IronWorks Training", email: "contact@ironworkstraining.com" },
            { name: "Balance Gym", email: "support@balancegym.com" },
            { name: "Vitality Studio", email: "info@vitalitystudio.com" },
            { name: "Rise Wellness", email: "contact@risewellness.com" },
            { name: "Edge Training", email: "support@edgetraining.com" },
            { name: "EverFit Coaching", email: "info@everfitcoaching.com" },
            { name: "MindBody Gym", email: "contact@mindbodygym.com" },

            { name: "Alinea", email: "hospitality@alinearestaurant.com" },
            { name: "Addison", email: "grandelmar@fairmont.com" },
            { name: "Atelier Crenn", email: "info@ateliercrenn.com" },
            { name: "Benu", email: "contact@benusf.com" },
            { name: "Brooklyn Fare", email: "chefstable@brooklynfare.com" },
            { name: "Daniel", email: "danielinquiry@danielnyc.com" },
            { name: "Eleven Madison Park", email: "info@elevenmadisonpark.com" },
            { name: "Jungsik", email: "info@jungsik.com" },
            { name: "Le Bernardin", email: "reservations@le-bernardin.com" },
            { name: "Masa", email: "reservation@masanyc.com" },
            { name: "Providence", email: "info@providencela.com" },
            { name: "Quince", email: "info@quincerestaurant.com" },
            { name: "SingleThread", email: "info@singlethreadfarms.com" },
            { name: "Somni", email: "info@somnirestaurant.com" },
            { name: "The Inn at Little Washington", email: "reservations@theinnatlittlewashington.com" },
            { name: "The Harbor House Inn", email: "reservations@theharborhouseinn.com" },
            { name: "n/naka", email: "info@n-naka.com" },
            { name: "Acquerello", email: "info@acquerellosf.com" },
            { name: "Birdsong", email: "contact@birdsongsf.com" },
            { name: "Californios", email: "info@californiossf.com" },
            { name: "Lazy Bear", email: "contact@lazybearsf.com" },
            { name: "Mélisse", email: "info@citrinandmelisse.com" },
            { name: "Moody Tongue", email: "contact@moodytongue.com" },
            { name: "Oriole", email: "hospitality@oriolechicago.com" },
            { name: "Ever", email: "info@ever-restaurant.com" },
            { name: "Jônt", email: "info@jontdc.com" },
            { name: "Saga", email: "info@saga-nyc.com" },
            { name: "La Mer", email: "info@halekulani.com" },
            { name: "Canlis", email: "reservations@canlis.com" },
            { name: "Crown Shy", email: "info@crownshy.nyc" },
            { name: "COTE Korean Steakhouse", email: "reservations@cotekoreansteakhouse.com" },
            { name: "FIG", email: "hello@eatatfig.com" },
            { name: "Saison", email: "info@saisonsf.com" },
            { name: "Gabriel Kreuther", email: "office@gknyc.com" },
            { name: "Carbone", email: "hello@carbonefinefood.com" },
            { name: "L’Atelier de Joël Robuchon (Miami)", email: "reservations@latelier-miami.com" },
            { name: "La Mar by Gastón Acurio", email: "info@lamarbrickell.com" },
            { name: "Butcher & Singer", email: "butcherandsinger.info@starr-restaurants.com" },
            { name: "Commander's Palace", email: "feedback@commanderspalace.com" },
            { name: "One Market Restaurant", email: "info@onemarket.com" }
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
        host: process.env.SMTP_HOST || "smtp.hostinger.com",
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true,
        auth: {
            user: process.env.SMTP_USER || "contact@mwmofficiel.com",
            pass: process.env.SMTP_PASS || "@Marwane2003",
        },
    });

    const tasks = list.map(async ({ name, email }) => {
        const first = firstNameOf(name);
        const { subject, text, html } = buildEmail(first);
        const mailOptions = {
            from: `"${process.env.FROM_NAME || "MWMTECH"}" <${process.env.FROM_EMAIL || "contact@mwmofficiel.com"}>`,
            to: email,
            replyTo: process.env.FROM_EMAIL || "contact@mwmofficiel.com",
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
