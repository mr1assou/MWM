"use client";

import { useState } from "react";

const ContactPage = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleSend = async () => {
    setMessage(null); // reset before sending
    try {
      const res = await fetch("/api/cold_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ test: "hello" }), // dummy payload for now
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`✅ Emails envoyés: ${data.message}`);
      } else {
        setMessage(`❌ Erreur: ${data.error || "Impossible d'envoyer les emails"}`);
      }

      console.log("Client received:", data);
    } catch (err) {
      console.error("Client error:", err);
      setMessage("❌ Une erreur est survenue lors de l'envoi.");
    }
  };

  return (
    <div className="mt-20 h-96 flex flex-col justify-center items-center gap-4">
      <button
        onClick={handleSend}
        className="bg-primary text-white px-10 py-4 rounded-lg"
      >
        Send emails
      </button>

      {message && (
        <p className="mt-4 text-center text-sm font-medium text-gray-700">
          {message}
        </p>
      )}
    </div>
  );
};

export default ContactPage;
