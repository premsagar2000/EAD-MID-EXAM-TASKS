import React, { useState } from 'react'

export default function PollDisplay() {
    let ques = {
    question: "What is your favorite programming Language?",
    choices: [
      { "id": 1, "label": "JavaScript", "votes": 0 },
      
      { "id": 2, "label": "Python", "votes": 0 },
    
      { "id": 3, "label": "Java", "votes": 0 },
    
      { "id": 4, "label": "C#", "votes": 0 }
    ]
  }



  return (
    <div>
        <h2>{ques.question}</h2>
        <div></div>
        <button> Submit </button>
        
       
    </div>
    
  )
}
