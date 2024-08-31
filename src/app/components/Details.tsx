"use client";
import React, {useState} from 'react'

const Details = ({codigo,setCodigo}:{codigo:number,setCodigo:Function}) => {
  return (
    <div className={`fixed top-0 right-0 w-[100%] h-[100%] bg-black bg-opacity-35  ${codigo===0?"hidden":""}`}>
        <div className='fixed top-0 right-0 w-[60%] h-full bg-white border-2 border-black'>
            <p onClick={()=>setCodigo(0)} className='text-black p-5'>cerrar</p>
        </div>

        
    </div>
  )
}

export default Details