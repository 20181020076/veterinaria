"use client";
import React, { useState, useEffect } from 'react';

function DateComponent({date}:{date:Date}) {
  const [currentDate, setCurrentDate] = useState(new Date(date));

  
  useEffect(()=>{
    
      const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000)
      
    
    

    
    return () => clearInterval(interval);

  },[])
  return (
    <div>
      <p>{`${currentDate.getHours()}:${currentDate.getMinutes()}/${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`}</p>
    </div>
  );
}

export default DateComponent;