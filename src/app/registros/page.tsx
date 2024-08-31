"use client";
import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Details from "../components/Details";
type registro = {
  codigo:number,
  idCliente:number,
  fecha:string,
  vendedor:string,
  total:number,
  productos:number[]
}

const registros = () => {
  const reg:registro[] = [
    {codigo:1,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:50000,productos:[2,3]},
    {codigo:2,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:150000,productos:[10]},
    {codigo:3,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:10000,productos:[6,10,11]},
    {codigo:4,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:60000,productos:[1,2,3]},
    {codigo:5,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:80000,productos:[7,8]},
    {codigo:6,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:80000,productos:[7,8]},
    {codigo:7,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:80000,productos:[7,8]},
    {codigo:8,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:80000,productos:[7,8]},
    {codigo:9,idCliente:123,fecha:"01/10/24", vendedor:"daniel", total:80000,productos:[7,8]},


  ]
  const [showDetails, setShowDetails] = useState(0)


  const handleRegistros = ({registro,index}:{registro:registro,index:number})=>{
    return(
      <tr key={registro.codigo} className={`h-[56px] ${index%2==0?"bg-gray-200":""}`}>
        <th>{registro.codigo}</th>
        <th>{registro.fecha}</th>
        <th>hora</th>
        <th>{registro.idCliente}</th>
        <th>{registro.vendedor}</th>
        <th>{registro.total}</th>
        <th><button onClick={()=>setShowDetails(registro.codigo)}>&gt;&gt;Ver detalles</button></th>

      </tr>
    )
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-primary flex justify-center items-end pb-[3vh] overflow-hidden relative">
      <Navbar prop={"absolute"} title={"Registro de Ventas"} />
      <Details codigo={showDetails} setCodigo={setShowDetails}/>
      <div className="bg-white w-[90%] h-[84%] border-[3px] border-blac flex flex-col p-3">
        <div className="w-full h-[30%] flex ">
          <div className="w-[50%] flex flex-col gap-3  justify-center items-center">
            {/* input fecha */}
            <div className=" w-[70%] flex ">
              <label className="w-[30%] ">Fecha: </label>
              <input
                type="datetime-local"
                className="w-[70%] border border-black"
              />
            </div>
            {/* input vendedor */}
            <div className=" w-[70%] flex ">
              <label className="w-[30%] ">Vendedor: </label>
              <input
                type="text"
                className="w-[70%] border border-black"
              />
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-3 justify-center items-center">
            {/* input id cliente */}
            <div className=" w-[70%] flex ">
              <label className="w-[30%] ">Id Cliente: </label>
              <input
                type="text"
                className="w-[70%] border border-black"
              />
            </div>
            {/* input procuto */}
            <div className=" w-[70%] flex ">
              <label className="w-[30%] ">Producto: </label>
              <input
                type="text"
                className="w-[70%] border border-black"
              />
            </div>
          </div>
          
        </div>
        <div className="w-full h-[70%] flex justify-center items-start pt-4">
          <div className="w-[80%] h-[90%] overflow-y-scroll">
          <table className=" w-full h-full  border-collapse text-center border-b border-black ">
                <thead>
                  <tr className="border border-black">
                    <th className="border border-black">Código</th>
                    <th className="border border-black">Fecha</th>
                    <th className="border border-black">Hora</th>
                    <th className="border border-black">Documento cliente</th>
                    <th className="border border-black">Vendedor</th>
                    <th className="border border-black">Total Venta</th>
                    <th className="border border-black">Productos</th>

                  </tr>
                </thead>
                <tbody>{
                  reg.map((registro,index)=>(
                    handleRegistros({registro,index})
                  ))
                }</tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default registros;
