import React, { useState } from 'react'

export default function Input() {
    let [inputValue , setInputValue] = useState("")
  return (
    <input type="text" placeholder='start from here..' value={inputValue}/>
  )
}
