"use client";
import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Gestor from "../components/Gestor";
const Inventario = () => {
const [gestor, setGestor] = useState(0)

  return (
    <div className="h-[100vh] w-[100vw] bg-primary flex justify-center items-end pb-[3vh] overflow-hidden relative">
      <Navbar prop={"absolute"} title={"Inventario"} />
      <div className="bg-white w-[90%] h-[84%] border-[3px] border-black p-3">
        <div className="w-full h-[25%] flex flex-col border border-black">
          <div className="flex w-full h-[40%] gap-6 justify-center items-center">
            <button className={`w-[120px] h-[85%] ${gestor==0?"bg-secundary":"bg-white"} text-black text-sm border border-black `} onClick={()=>setGestor(0)}>Gestionar en Inventario</button>
            <button className={`w-[120px] h-[85%] ${gestor==1?"bg-secundary":"bg-white"} text-black text-sm border border-black`} onClick={()=>setGestor(1)}>Gestionar Reservas</button>
            <button className={`w-[120px] h-[85%] ${gestor==2?"bg-secundary":"bg-white"} text-black text-sm border border-black`} onClick={()=>setGestor(2)}>Gestionar Vendedores</button>
          </div>
          <div className={`flex w-full ${gestor==1?"hidden":""}`}>
            <div className="w-[50%] flex flex-col gap-3  justify-center items-center">
              {/* input Categoria */}
              <div className=" w-[70%] flex ">
                <label className="w-[30%] ">Categoria: </label>
                <select className="w-[70%] border border-black">
                  <option>Opcion 1</option>
                </select>
              </div>
              {/* input Nombre */}
              <div className=" w-[70%] flex ">
                <label className="w-[30%] ">Nombre: </label>
                <input type="text" className="w-[70%] border border-black" />
              </div>
            </div>

            <div className="w-[50%] flex flex-col gap-3 justify-center items-center">
              {/* input id cliente */}
              <div className=" w-[70%] flex ">
                <label className="w-[30%] ">Codigo: </label>
                <input type="text" className="w-[70%] border border-black" />
              </div>
              {/* input procuto */}
              <div className=" w-[70%] flex ">
                <label className="w-[30%] ">Producto: </label>
                <input type="text" className="w-[70%] border border-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[75%] flex justify-center items-start pt-4">
          <Gestor state={gestor}/>
        </div>
      </div>
    </div>
  );
};

export default Inventario;
