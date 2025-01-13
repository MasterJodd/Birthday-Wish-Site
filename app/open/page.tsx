import React from "react";
import "./style.css";
import Link from "next/link";

const Open = () => {
  return (
    <section className="text-center ">
        <h1 className="" >Open This Window</h1>
      <div className="wrapper bg-[#fff9ae] px-4 pt-2 mb-10 mt-10 text-start">
        <div id="left-door" className="door">
          <div className="shape"></div>
          <div className="shape"></div>
          <div id="left-knob" className="knob"></div>
        </div>
        <strong className="text-xs">Hello 🎀❤</strong>
        <p className="text-xs">
          {" "}
          मैं तुमसे प्यार करता हूं, पर सिर्फ इसलिए नहीं ,बदले मैं तुम भी मुझसे
          प्यार करो, मैं सिर्फ तुमसे प्यार करता हूं इस्लीये लिखा है 🙃🙂
        </p>
        <p className="text-xs">
          ❤🎀कि मुझे बातों से अच्छे तुम्हारे इशारे लगते हैं बिना गजरो के भी बाल
          तुम्हारे प्यारे लगते हैं लगता होगा सारे जमाने को चांद खूबसूरत लगता
          होगा सारे जमाने को चांद खूबसूरत मुझे चांद से अच्छे सितारे लगते हैं
          अपनी मोहब्बत हासिल कर लेने वालों से कहीं ज्यादा एक तरफ चा चा रखने वाले
          प्यारे लगते हैं और कर्ता रहता है सारा जहां सकरों के सुंदरता की बात
          मुझे इस जहां में सबसे सुंदर कदम तुम्हारे लगते हैं दूर कितना भी क्यों
          ना रह लूं मैं तुमसे पता नहीं क्यों सबको हम तुम्हारे लगते हैं❤🎀❤
        </p>
        <div id="right-door" className="door">
          <div className="shape"></div>
          <div className="shape"></div>
          <div id="right-knob" className="knob"></div>
        </div>
      </div>
      <div>
        <Link
          href="/please"
          className="px-6 py-2 bg-[#800080] text-white font-semibold rounded-md shadow-md hover:bg-gray-100"
        >
          Tap After Seeing
        </Link>
      </div>
    </section>
  );
};

export default Open;
