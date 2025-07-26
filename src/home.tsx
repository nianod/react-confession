import { useState, useRef } from "react";
import confetti from 'canvas-confetti'

const Home = () => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYes = () => {
   
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Heart explosion animation
    const heartColors = ['#ff0000', '#ff69b4', '#ff1493', '#ff00ff'];
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 1,
          angle: Math.random() * 360,
          spread: 30,
          startVelocity: 20 + Math.random() * 20,
          origin: { x: Math.random(), y: Math.random() * 0.5 + 0.2 },
          colors: [heartColors[Math.floor(Math.random() * heartColors.length)]],
          shape: 'heart',
        });
      }, i * 150);
    }
    
    setAccepted(true);
  };

  const handleNo = () => {
    alert('Oops, wrong button!');
  };

  const moveButton = () => {
    if (noButtonRef.current) {
      const btn = noButtonRef.current;
      const maxX = window.innerWidth - btn.offsetWidth;
      const maxY = window.innerHeight - btn.offsetHeight;
      
      const randoX = Math.floor(Math.random() * maxX * 0.6) - maxX * 0.3;
      const randoY = Math.floor(Math.random() * maxY * 0.6) - maxY * 0.3;
      
      btn.style.transform = `translate(${randoX}px, ${randoY}px)`;
    }
  };

  return (
    <div className="text-white mt-35 flex flex-col justify-center items-center ">
      {accepted ? (
        <div className="text-center animate-bounce">
          <h2 className="font-semibold flex flex-col items-center text-4xl mb-4 animate-pulse">
            Yaaay! 🥰 <br />
            <span className="text-2xl mt-4">Let's meet on Friday!</span>
          </h2>
          <div className="heart-animation">💖</div>
          <style >{`
            @keyframes float {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(10deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
            .heart-animation {
              font-size: 3rem;
              animation: float 2s ease-in-out infinite;
              display: inline-block;
            }
          `}</style>
        </div>
      ) : (
        <>
          <h1 className="font-semibold text-xl mb-2">Arnold says:</h1>
          <p className="font-semibold text-lg mb-4">Will you be my Girlfriend?</p>
          <div className="flex gap-4 mt-3 relative">
            <button
              onClick={handleYes}
              className="text-white p-2 px-6 rounded-lg font-bold bg-green-500 cursor-pointer hover:bg-green-600 transition text-lg transform hover:scale-105"
            >
              YES
            </button>
            <button
              ref={noButtonRef}
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              onClick={handleNo}
              className="text-white p-2 px-6 rounded-lg font-bold bg-red-500 cursor-pointer hover:bg-red-600 transition text-lg"
            >
              NO
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;