import { useState, useRef } from "react";

const Home = () => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYes = () => {
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
    <div className="text-white mt-35 flex flex-col justify-center items-center min-h-screen">
      {accepted ? (
        <div>
          <h2 className="font-semibold flex flex-col items-center text-2xl">
            Yaaay! 🥰 <br />
            <span className="text-xl mt-2">Let's meet on Friday!</span>
          </h2>
        </div>
      ) : (
        <>
          <h1 className="font-semibold text-xl mb-2">Arnold says:</h1>
          <p className="font-semibold text-lg mb-4">Will you be my Girlfriend?</p>
          <div className="flex gap-4 mt-3 relative">
            <button
              onClick={handleYes}
              className="text-white p-2 px-6 rounded-lg font-bold bg-green-500 cursor-pointer hover:bg-green-600 transition text-lg"
            >
              YES
            </button>
            <button
              ref={noButtonRef}
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              onClick={handleNo}
              className="text-white p-2 px-6 rounded-lg font-bold bg-red-500 cursor-pointer hover:bg-red-600 transition text-lg "
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