import { useState } from "react";

const Home = () => {
  const [accepted, setAccepted] = useState<boolean>(false)


  const handleYes = () => {
    setAccepted(true)
  }
  const handleNo = () => {
    alert('oops wrong')
  }
  return (
    <div className="text-white mt-35 flex flex-col justify-center items-center">
      {accepted ? (
        <div>
           <h2 className="font-semibold flex flex-col items-center">Yaaay!🩷🩷 <br />
             <span>Let's meet on Friday</span>
           </h2>
        </div>
      ) : (
        <>
          <h1 className="font-semibold">Arnold says:</h1>
          <p className="font-semibold">Will you be my Girlfried?</p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleYes}
              className="text-white p-1 px-2 rounded font-bold bg-green-500 cursor-pointer"
            >
              YES
            </button>
            <button
              onMouseEnter={(e) => {
                const btn = e.currentTarget
                const randoX = Math.floor(Math.random() * 200) - 100
                const randoY = Math.floor(Math.random() * 200) - 100
                btn.style.transform = `translate(${randoX}px, ${randoY}px)`
              }}
              id="deny"
              onClick={handleNo}
              className="text-white p-1 px-2 rounded font-bold bg-red-500 cursor-pointer transition"
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
