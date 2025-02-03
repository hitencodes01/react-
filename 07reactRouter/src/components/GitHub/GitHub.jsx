import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data , setData] =useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hitencodes01')
        .then(response => response.json)
        .then(data => {
            setData(data)
        })
    },[])
  return (
    <div className='text-center bg-gray-500 text-white p-4 text-3xl'>GitHub Followers : {data.followers} 
    <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default GitHub