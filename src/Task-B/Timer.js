import { useState } from 'react'
import { useEffect } from 'react';

function Timer() {
    const [count, setCount] =useState(10);
    
  return (
   <div> Timer - {count} </div>
  )
}

export default Timer