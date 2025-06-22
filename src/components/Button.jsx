import React from 'react'

import { useState } from 'react'

const Button = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrease = ()=> {
        setCounter(counter + 1)
    }
    const handleSetZero = () => {
        setCounter(0);
    }
    
  return (
    
    <div className="bg-[#F0F0F0] px-6 md:px-16 flex items-center h-[500px] overflow-hidden">
        
        <div className='mx-10 px-2 py-3 bg-blue-300 flex  flex-col items-center'>
        <button className='bg-red text-white'>{counter}</button>
        <button className='bg-black text-white mx-3 my-4 rounded-lg px-2 py-3'  onClick={handleIncrease}>Increase</button>
      <button className='bg-yellow-200 text-white mx-3 my-4 rounded-lg px-2 py-3' onClick={()=>{setCounter(counter - 1)}}>Decrease</button>
      <button className='bg-gray-200 text-white mx-3 my-4 rounded-lg px-2 py-3' onClick={handleSetZero}>Set to zero</button>
        </div>
     
    </div>
  )
}

export default Button
