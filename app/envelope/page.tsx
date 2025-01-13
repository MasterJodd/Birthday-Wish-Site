"use client";
import { useState } from "react";
import "./style.css";

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div
        className={`envelope-wrapper ${isOpen ? "flap" : ""}`}
        onClick={toggleEnvelope}
      >
        {/* Envelope */}
        <div className="envelope">
          {/* Letter */}
          <div className={`letter ${isOpen ? "open" : ""}`}>
            <div className="text">
              <strong>Hello 🎀❤</strong>
              <p>
                मैं तुमसे प्यार करता हूं, पर सिर्फ इसलिए नहीं ,बदले मैं तुम भी
                मुझसे प्यार करो, मैं सिर्फ तुमसे प्यार करता हूं इस्लीये लिखा है
                🙃🙂 ❤🎀कि मुझे बातों से अच्छे तुम्हारे इशारे लगते हैं बिना गजरो
                के भी बाल तुम्हारे प्यारे लगते हैं लगता होगा सारे जमाने को चांद
                खूबसूरत लगता होगा सारे जमाने को चांद खूबसूरत मुझे चांद से अच्छे
                सितारे लगते हैं अपनी मोहब्बत हासिल कर लेने वालों से कहीं ज्यादा
                एक तरफ चा चा रखने वाले प्यारे लगते हैं और कर्ता रहता है सारा
                जहां सकरों के सुंदरता की बात मुझे इस जहां में सबसे सुंदर कदम
                तुम्हारे लगते हैं दूर कितना भी क्यों ना रह लूं मैं तुमसे पता
                नहीं क्यों सबको हम तुम्हारे लगते हैं❤🎀❤
              </p>
            </div>
          </div>
        </div>
        {/* Heart Decoration */}
        <div className="heart"></div>
      </div>
    </div>
  );
}
