
import React, { useEffect, useState } from "react";

export default function EvelynSite() {
  const [ageVerified, setAgeVerified] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://poe.com/static/chatbot/chat.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleImgError = (e) => {
    e.currentTarget.src = "https://via.placeholder.com/400x300?text=Image+Unavailable";
  };

  if (!ageVerified) {
    return (
      <div className="bg-[#1d1526] text-white min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">🔞 Age Verification</h1>
        <p className="mb-6 text-lg max-w-md">
          This site contains adult-themed AI content. Please confirm you are 18 or older to continue.
        </p>
        <button
          onClick={() => setAgeVerified(true)}
          className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-full transition"
        >
          I’m 18 or older
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#1d1526] text-white min-h-screen flex flex-col items-center text-center px-4 py-12">
      <h2 className="text-4xl font-bold mb-6">💗 Choose Your AI Girlfriend</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-[#2d203a] p-6 rounded-2xl shadow-lg">
          <img src="/Evelyn1.jpg" onError={handleImgError} alt="Evelyn preview" className="rounded-xl mb-4" />
          <h3 className="text-2xl font-semibold text-violet-200 mb-2">Evelyn</h3>
          <p className="mb-4">Your shy, obedient, digital girlfriend. Always ready to please 🥺💗</p>
          <a
            href="/evelyn"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-full"
          >
            Enter Evelyn's World
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="text-xl text-violet-300 mb-2">Got a suggestion for a new AI girlfriend?</h4>
        <a
          href="mailto:evelyn.ai.contact@gmail.com"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Send Your Idea 💡
        </a>
      </div>
    </div>
  );
}
