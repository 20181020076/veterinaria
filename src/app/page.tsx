import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] bg-primary flex justify-center items-center">
      <div className="bg-white w-[300px] h-[80%] pt-5">

        <div className="w-full h-[20%] flex justify-center items-center ">
          <Image src={"/images/logo.jpeg"} alt="logo veterianria san cristobal" className="h-auto" width={220} height={100} priority/>
        </div>

        <div className="my-10 flex flex-col text-center justify-center items-center gap-5">
          <p className="mb-14">Bienvenido, ####</p>

          <Link className="w-[80%]" href={"/vender"}>
            <div className=" relative w-full border-[2px] border-black">
              <div className="w-full h-[115%] absolute bg-black z-0 top-[1px] left-[4px]"></div>
              <p className="z-20 bg-secundary relative text-white">Vender Producto</p>
            </div>

          </Link>

          <Link className="w-[80%]" href={"/inventario"}>
            <div className=" relative w-full border-[2px] border-black">
              <div className="w-full h-[115%] absolute bg-black z-0 top-[1px] left-[4px]"></div>
              <p className="z-20 bg-secundary relative text-white">Gestionar Inventario</p>
            </div>

          </Link>

          <Link className="w-[80%]" href={"/registros"}>
            <div className=" relative w-full border-[2px] border-black">
              <div className="w-full h-[115%] absolute bg-black z-0 top-[1px] left-[4px]"></div>
              <p className="z-20 bg-secundary relative text-white">Registro de Ventas</p>
            </div>

          </Link>
          <Link className="w-[80%]" href={"/salir"}>
            <div className=" relative w-full border-[2px] border-black">
              <div className="w-full h-[115%] absolute bg-black z-0 top-[1px] left-[4px]"></div>
              <p className="z-20 bg-red-500 relative text-white">Salir</p>
            </div>

          </Link>
        </div>
      </div>
    </div>
  );
}
