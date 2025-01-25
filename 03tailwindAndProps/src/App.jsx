import { useState } from "react";
import Cards from "./components/Cards";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="font-extrabold bg-black text-amber-300 text-8xl text-center pb-3">
        Tailwind
      </h2>
      <div className="container flex flex-row justify-center items-center gap-4 mt-4">
        <Cards
          userName={"ReactJS"}
          src={
            "https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png"
          }
        />
        <Cards
          userName="Vite Bundler"
          src="https://th.bing.com/th/id/OIP.u6XamjK1fq5M9kBmNiEK9QHaH_?w=1000&h=1080&rs=1&pid=ImgDetMain"
        />
      </div>
    </>
  );
}

export default App;
