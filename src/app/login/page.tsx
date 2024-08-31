import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="h-[100vh] w-[100vw] bg-primary flex justify-center items-center">
      <div className="bg-white w-[300px] h-[80%] pt-5">
        <div className="w-full h-[20%] flex justify-center items-center ">
          <Image
            src={"/images/logo.jpeg"}
            alt="logo veterianria san cristobal"
            className="h-auto"
            width={220}
            height={100}
            priority
          />
        </div>

        <div className="my-10 h-[200px] flex flex-col text-center justify-center items-center gap-5 ">
          <form className=" relative w-full flex flex-col items-center gap-5">
            <input
              className="z-20 w-[80%] bg-secundary relative text-white placeholder:text-white pl-2"
              placeholder="Usuario"
              type="text"
            />
            <input
              className="z-20 w-[80%] bg-secundary relative text-white placeholder:text-white pl-2"
              placeholder="Password"
              type="password"
            />
            <button className="w-[80%]" >
              <div className=" relative w-full border-[2px] border-black">
                <div className="w-full h-[115%] absolute bg-black z-0 top-[1px] left-[4px]"></div>
                <p className="z-20 bg-green-500 relative text-black">
                  Ingresar
                </p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
