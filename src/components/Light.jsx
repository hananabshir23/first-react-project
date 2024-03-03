import { UseState, useState } from "react";

function Light() {
  const [color, setColer] = useState("");
  const handleOn = () => {
    setColer("yellow");
  };

  const handleOff = () => {
    setColer("white");
  };

  return (
    <div className="flex justify-center mt-5">
      <div>
        <div
          style={{ backgroundColor: color }}
          className=" border-4 border-black w-[300px] h-[300px] rounded-full"
        ></div>
        <button
          onClick={handleOn}
          className="bg-red-400 rounded text-white text-3xl px-3 py-2 m-3 ml-16"
        >
          on
        </button>
        <button
          onClick={handleOff}
          className="bg-red-400 rounded text-white text-3xl px-3 py-2 m-3 "
        >
          off
        </button>
      </div>
    </div>
  );
}
export default Light;
