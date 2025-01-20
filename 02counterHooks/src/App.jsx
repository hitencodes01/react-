import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  let add = () => {
    // if(counter<20){
    //   setCounter(counter + 1)
    // }
    (counter < 20) ? setCounter(counter + 1) : setCounter(20);
  }
  let remove = () => {
    // if (counter >0){
    //   setCounter(counter -1)
    // }
    (counter > 0) ? setCounter(counter-1): setCounter(0);
  }
  return (
    <>
      <h1>Food Options</h1>
      <h3>Burger : {counter} </h3>
      <button
      onClick={add}
      >ADD</button>
      <br/>
      <button
      onClick={remove}
      >Remove</button>
    </>
  )
}

export default App
