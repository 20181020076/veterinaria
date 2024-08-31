"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = ({ prop, title }: { prop: string, title:string }) => {
  const [menu, setMenu] = useState(false)
  


  return (
    <div
      className={`w-full flex h-[12vh] bg-white border-[3px] border-black top-0 ${prop}`}
    >
      {/* menu */}
      <div className={`fixed w-full h-[100vh] bg-black bg-opacity-50 text-white transition-all pt-5 z-50 ${menu?"-translate-x-1":"-translate-x-[102vw]"}`}>
         <div className="fixed w-[50%] h-full top-0 bg-primary">
          <div onClick={()=>{setMenu(!menu)}}>
            <p className="text-end">cerrar</p> 
          </div>
            <div className="h-[80%] flex flex-col justify-center">
              <Link href={"/"}><p className="border border-white pl-5 h-12 flex items-center">Home</p></Link>
              <Link href={"/vender"}><p className="border border-white pl-5 h-12 flex items-center">Punto de Venta</p></Link>
              <Link href={"/inventario"}><p className="border border-white pl-5 h-12 flex items-center">Gestionar Inventario</p></Link>
              <Link href={"/registros"}><p className="border border-white pl-5 h-12 flex items-center">Registro de Ventas</p></Link>
              <Link href={"/salir"}><p className="border border-white pl-5 h-12 flex items-center">Salir</p></Link>
            </div>
         </div>
      </div>

      {/* burger button */}
      <div className="flex flex-col gap-1 w-[20%] h-[100%] items-center justify-center" onClick={()=>{setMenu(!menu)}}>
        <div className="bg-black border border-black h-[1px] w-[15px]"></div>
        <div className="bg-black border border-black h-[1px] w-[15px]"></div>
        <div className="bg-black border border-black h-[1px] w-[15px]"></div>
      </div>

      <div className="w-[80%] h-[100%] flex items-center justify-center">
        <h1 className="text-xl font-bold text-black">{title}</h1>
      </div>
      
      <Link href={"/"} className="w-[20%] h-[100%] flex justify-center items-center overflow-hidden">
        <Image
          src={"/images/logo.jpeg"}
          alt="logo veterianria san cristobal"
          className="h-auto"
          width={220}
          height={100}
          priority
        />
      </Link>
    </div>
  );
};

export default Navbar;
