"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import DateComponent from "../components/DateComponent";


const Vender = () => {
  const [carrito, setCarrito] = useState<productoCarrito[]>([]);
  const [carritoMobileView,setCarritoMobileView] = useState<Boolean>(true)
  const fecha = new  Date()
  

// types

  type productoCarrito = {
    producto:producto,
    cantidad:number
  }

  type producto = {
      codigo: number,
      nombre: string,
      stock: number,
      precio: number,
  }

  const productos:producto[] = [
    {
      codigo: 1,
      nombre: "Collar",
      stock: 15,
      precio: 10000,
    },
    {
      codigo: 2,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },
    {
      codigo: 3,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },{
      codigo: 4,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },{
      codigo: 5,
      nombre: "comida",
      stock: 6,
      precio: 50000,
    },{
      codigo: 6,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },{
      codigo: 7,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },{
      codigo: 8,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },{
      codigo: 9,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },{
      codigo: 10,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },{
      codigo: 11,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },{
      codigo: 12,
      nombre: "comida",
      stock: 10,
      precio: 50000,
    },
  ];


  const handleRepeatProduct = (codigo:number):boolean => {
    const validation = carrito.find(productoCarrito=>productoCarrito.producto.codigo===codigo)
    if(validation)return true
    return false
  }
  const handleAddProduct = (codigo:number) =>{
    const isRepeat = handleRepeatProduct(codigo)
    if (!isRepeat){
      const produ = productos.find(producto=>producto.codigo===codigo);
      if (produ){
        const newProductCart = {producto:{...produ},cantidad:1}
        setCarrito([...carrito,newProductCart])
      }
    }
    
  }

  const handleResult = ({product, index}:{product:producto, index:number}) => {

    
    return(
      <tr key={product.codigo} className={`${index%2==0?"bg-gray-200":""}`}>
          <td className="border-x border-black">{product.codigo}</td>
          <td className="border-x border-black">{product.nombre}</td>
          <td className="border-x border-black">{product.stock}</td>
          <td className="border-x border-black">{product.precio}</td>
          <td className="border-x border-black" onClick={()=>handleAddProduct(product.codigo)}><button className={`underline ${handleRepeatProduct(product.codigo)?"":"text-blue-500"} `}>Agregar</button></td>
        </tr>
    )
  };

  
  // imprime los contenedores y contiene las funciones de carrito
  const handleCart = ({productCart, index}:{productCart:productoCarrito,index:number}) => {
    const aumentarCantidad = () => {
      setCarrito(prevCarrito => {
        const nuevoCarrito = prevCarrito.map(item => {
          if (item.producto.codigo === productCart.producto.codigo) {
            const nuevaCantidad = Math.min(item.cantidad + 1, item.producto.stock);
            return { ...item, cantidad: nuevaCantidad };
          }
          return item;
        });
        return nuevoCarrito;
      });
    };
  
    const disminuirCantidad = () => {
      setCarrito(prevCarrito => {
        const nuevoCarrito = prevCarrito.map(item => {
          if (item.producto.codigo === productCart.producto.codigo && item.cantidad > 0) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          return item;
        }).filter(item => item.cantidad > 0); // Filtrar los elementos con cantidad mayor que 0
        return nuevoCarrito;
      });
    };
    


    return(
      <tr key={productCart.producto.codigo} className={`${index%2==0?"bg-gray-200":""}`}>
          <td className="border-x border-black">{productCart.producto.codigo}</td>
          <td className="border-x border-black">{productCart.producto.nombre}</td>
          <td className="border-x border-black"><button onClick={disminuirCantidad} >-</button>{productCart.cantidad}<button onClick={aumentarCantidad}>+</button></td>
          <td className="border-x border-black">{productCart.producto.precio}</td>
          <td className="border-x border-black">{productCart.producto.precio * productCart.cantidad}</td>
        </tr>
    )
  };
  
  const handlePrecioTotal = ():number=>{
    const sumaTotal = carrito.reduce((total,producto)=>total + (producto.producto.precio * producto.cantidad), 0)
    return sumaTotal
  }

  useEffect(()=>{
  },[carrito])
  return (
    <div className="h-[100vh] w-[100vw] bg-primary flex justify-center items-end pb-[3vh] overflow-hidden relative">
      <Navbar prop={"absolute"} title="Punto de Venta"/>
      <div className={`absolute hidden bottom-0  flex-col justify-end items-start h-[100vh] w-full left-0 z-30 ${carritoMobileView?"sm:flex":"hidden"}`}>
        <div className=" bg-black opacity-30 h-[20%] w-full" onClick={()=>setCarritoMobileView(!carritoMobileView)}></div>
        <div className="bg-white w-full h-[80%] p-5 overflow-scroll">
          <h3>Carrito:</h3>
          {carrito.map((item,index)=>{
            return(
              <div key={index}>
                <p>{item.producto.nombre}</p>
                <div><button onClick={()=>handleCart({productCart:item,index})} >-</button>{item.cantidad}<button onClick={()=>handleCart({productCart:item,index})}>+</button></div>
              </div>
            )
          })}
          
        </div>
      </div>
      <div className="bg-white w-[90%] h-[84%] border-[3px] border-black p-3 sm:overflow-y-scroll">
        <div className="h-[40%] w-full  sm:h-[40%]">
          <div className="text-end h-[15%]">{<DateComponent date={fecha}/>}</div>

          <div className="flex h-[85%] sm:flex-col">
            <div className="flex flex-col w-[50%] justify-center gap-2  p-3">
              <p className="font-bold capitalize">Buscar</p>
              <input
                type="text"
                placeholder="codigo"
                className="border border-black w-[230px]"
              />
              <input
                type="text"
                placeholder="nombre"
                className="border border-black w-[230px]"
              />
              <button className=" hidden relative w-[150px] border-[2px] border-black text-center sm:block" onClick={()=>setCarritoMobileView(!carritoMobileView)}>
                  <div className="w-full h-[115%] absolute bg-black z-0 top-[1px] left-[4px]"></div>
                  <p className="z-20 bg-secundary relative text-white">
                    Ver Carrito: {carrito.length}
                  </p>
                  
                </button>
            </div>
            <div className="w-[50%] h-full flex flex-col justify-center sm:hidden ">
              <p className="font-bold capitalize">Mi Carrito</p>
              <div className="flex w-full  gap-8">
                <p>Valor total: COP:${handlePrecioTotal().toLocaleString('es-CO')}</p>
                {/* button */}
                <button className=" relative w-[150px] border-[2px] border-black text-center">
                  <div className="w-full h-[115%] absolute bg-black z-0 top-[1px] left-[4px]"></div>
                  <p className="z-20 bg-secundary relative text-white">
                    Comprar Carrito
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[60%] w-full  ">
          <p className="h-[10%] font-bold capitalize">Resultados:</p>
          <div className="flex w-full h-[90%]">
            <div className="w-[50%] max-h-[80%]  overflow-y-scroll sm:w-[100%] sm:max-h-[90%]">
              {/* tabla resultados */}
              <table className=" min-w-[400px] h-full  border-collapse text-center border border-black  sm:w-full sm:min-w-0">
                <thead>
                  <tr className="border border-black" >
                    <th className="border border-black">Código</th>
                    <th className="border border-black">Nombre</th>
                    <th className="border border-black">Stock</th>
                    <th className="border border-black">Valor Unit.</th>
                    <th className="border border-black">Acción</th>
                  </tr>
                </thead>
                <tbody>{
                  productos.map((product, index)=>(
                    handleResult({ product, index})
                  ))
                }</tbody>
              </table>
            </div>
            <div className="w-[50%] max-h-[80%]  overflow-y-scroll sm:hidden">
              {/* tabla carrito */}
              <table className=" min-w-[400px] border-collapse border border-black">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Valor Unit.</th>
                    <th>Valor Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((productCart,index)=>(
                    handleCart({productCart,index})
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vender;
