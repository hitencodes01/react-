import { useState } from 'react'

function App(){
  let [color, setColor] = useState('white');
  return(
    <>
    <div style={{backgroundColor: color}} className='h-screen w-full'>
    <div className='flex gap-3 fixed bottom-2 justify-center align-middle w-[500px] bg-white p-4 rounded-full mx-auto'>
    <button className='outline-none text-white p-2 rounded-full cursor-pointer border-black border-[1px]' style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
    <button className='outline-none text-white p-2 rounded-full cursor-pointer border-black border-[1px]' style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>blue</button>
    <button className='outline-none text-white p-2 rounded-full cursor-pointer border-black border-[1px]' style={{backgroundColor:"green"}} onClick={() => setColor("green")}>green</button>
    <button className='outline-none text-white p-2 rounded-full cursor-pointer border-black border-[1px]' style={{backgroundColor:"yellow"}} onClick={() => setColor("yellow")}>yellow</button>
    <button className='outline-none text-white p-2 rounded-full cursor-pointer border-black border-[1px]' style={{backgroundColor:"black"}} onClick={() => setColor("black")}>black</button>
    <button className='outline-none text-white p-2 rounded-full cursor-pointer border-black border-[1px]' style={{backgroundColor:"purple"}} onClick={() => setColor("purple")}>purple</button>
    </div>
    </div>
    </>
  )
}

export default App
