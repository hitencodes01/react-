import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*)(";
    for (let index = 0; index < length; index++) {
      let element = Math.floor(Math.random() * str.length);
      pass += str[element];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto bg-gray-700 my-40 p-6 outline-2 outline-white">
        <h2 className="font-extrabold text-white text-center text-4xl py-2">
          Password Generator
        </h2>
        <div className="flex justify-center  py-4 gap-2">
          <input
            className="bg-white w-[60%] py-2 rounded-lg text-justify"
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 text-white px-3 text-center font-extrabold rounded-lg"
            onClick={copyPasswordToClipBoard}
          >
            copy
          </button>
        </div>
        <div className="flex justify-center gap-2 pb-1 font-bold ">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          Number
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          Characters
        </div>
      </div>
    </>
  );
}

export default App;
