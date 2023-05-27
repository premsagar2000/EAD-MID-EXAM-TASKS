import { useState } from 'react'
import { useEffect } from 'react';

function Timer() {
    const [count, setCount] =useState(10);

    useEffect(() => {
        if (count > 0) {
            setTimeout(() => setCount(count - 1), 1000);
        } 
        else {
            setCount('Time Up!');
        }
    });

   
  return (
   <div> {count} </div>
  )
}

export default Timer