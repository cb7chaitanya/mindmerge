import React from 'react'

function Logo({className}) {
  return (
    <div className={`text-3xl font-extrabold ${className}`}>
      <span className='text-zinc-100'>Mind</span>
      <br></br>
      <span className='text-zinc-800'>Merge</span>
    </div>
  )
}

export default Logo