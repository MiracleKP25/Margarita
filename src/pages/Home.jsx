import React, { useEffect, useState } from "react";

function Home() {
  const [showBlock, setShowBlock] = useState(false);
  const [btn1Visible, setBtn1Visible] = useState(false);
  const [btn2Visible, setBtn2Visible] = useState(false);
  const [btn3Visible, setBtn3Visible] = useState(false);

  useEffect(() => {
    // Bloc principal
    const blockTimeout = setTimeout(() => setShowBlock(true), 500);

    // Bouton 1
    const btn1Timeout = setTimeout(() => setBtn1Visible(true), 1000);

    // Bouton 2
    const btn2Timeout = setTimeout(() => setBtn2Visible(true), 1500);

    // Bouton 3
    const btn3Timeout = setTimeout(() => setBtn3Visible(true), 2000);

    return () => {
      clearTimeout(blockTimeout);
      clearTimeout(btn1Timeout);
      clearTimeout(btn2Timeout);
      clearTimeout(btn3Timeout);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-center flex flex-col justify-between"
      
    >
      <div className="flex flex-col md:flex-row items-center justify-around flex-1 px-4 py-12 ">
        {/* Logo */}
        <div>
          <img
            src="/assets/images/mojito-logo.png"
            alt="Mojito Republic"
            className="w-64 h-auto drop-shadow-lg"
          />
        </div>

        {/* Bloc avec animation */}
        <div
          className={`bg-opacity-50 rounded-lg p-8 flex flex-col items-center transition-all duration-700  ${
            showBlock ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 text-center tracking-widest">
            VOS MOJITOS SIMPLEMENT
          </h1>
          <h2 className="text-white text-xl md:text-2xl mb-8 text-center font-light tracking-wide">
            Partagez de Savoureux Moments de Plaisir
          </h2>

          {/* Boutons apparaissant l’un après l’autre */}
          <div className="flex flex-col space-y-4 w-full justify-center items-center">
            <button
              className={`bg-white w-1/2 text-black rounded-full py-3 px-3 font-light shadow hover:bg-green-400 transition-all duration-700 ${
                btn1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Vous êtes un particulier
            </button>

            <button
              className={`bg-white w-1/2 text-black rounded-full py-3 px-3 font-light shadow hover:bg-green-400 transition-all duration-700 ${
                btn2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Vous êtes un professionnel
            </button>

            <button
              className={`bg-white mt-7 w-1/2 text-black rounded-full py-3 px-3 font-light shadow hover:bg-green-400 transition-all duration-700 ${
                btn3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Nos prestations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
