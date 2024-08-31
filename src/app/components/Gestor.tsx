import React from "react";

const Gestor = ({ state }: { state: number }) => {
  if (state === 0) {
    type registro = {
      id: string;
      nombre: string;
      stock: number;
      precio: number;
      categoria: string;
    };
    const registros = [
      {
        id: "elec1",
        nombre: "Auriculares Bluetooth",
        stock: 50,
        precio: 29.99,
        categoria: "Electrónica",
      },
      {
        id: "alim1",
        nombre: "Botella de Aceite de Oliva Extra Virgen",
        stock: 100,
        precio: 9.99,
        categoria: "Alimentos",
      },
      {
        id: "hogar1",
        nombre: "Juego de Toallas de Baño",
        stock: 75,
        precio: 39.99,
        categoria: "Hogar",
      },
      {
        id: "bell1",
        nombre: "Crema Hidratante Facial",
        stock: 80,
        precio: 14.99,
        categoria: "Belleza",
      },
      {
        id: "dep1",
        nombre: "Pelota de Fútbol",
        stock: 40,
        precio: 19.99,
        categoria: "Deporte",
      },
      {
        id: "jug1",
        nombre: "Set de Bloques de Construcción",
        stock: 60,
        precio: 24.99,
        categoria: "Juguetería",
      },
      {
        id: "moda1",
        nombre: "Bufanda de Lana",
        stock: 90,
        precio: 12.99,
        categoria: "Moda",
      },
      {
        id: "jard1",
        nombre: "Maceta de Cerámica",
        stock: 55,
        precio: 8.99,
        categoria: "Jardinería",
      },
      {
        id: "mus1",
        nombre: "Álbum de Vinilo",
        stock: 35,
        precio: 29.99,
        categoria: "Música",
      },
      {
        id: "coc1",
        nombre: "Set de Cuchillos de Chef",
        stock: 70,
        precio: 49.99,
        categoria: "Cocina",
      },
      {
        id: "mas1",
        nombre: "Juguete para Perros de Goma",
        stock: 85,
        precio: 6.99,
        categoria: "Mascotas",
      },
      {
        id: "elec3",
        nombre: "Cargador Inalámbrico",
        stock: 45,
        precio: 19.99,
        categoria: "Electrónica",
      },
      {
        id: "alim2",
        nombre: "Bolsa de Arroz Integral",
        stock: 60,
        precio: 3.99,
        categoria: "Alimentos",
      },
      {
        id: "hogar2",
        nombre: "Lámpara de Escritorio LED",
        stock: 70,
        precio: 24.99,
        categoria: "Hogar",
      },
      {
        id: "bell3",
        nombre: "Set de Maquillaje",
        stock: 50,
        precio: 29.99,
        categoria: "Belleza",
      },
      {
        id: "dep2",
        nombre: "Cuerda para Saltar",
        stock: 65,
        precio: 9.99,
        categoria: "Deporte",
      },
      {
        id: "jug2",
        nombre: "Muñeca Articulada",
        stock: 80,
        precio: 14.99,
        categoria: "Juguetería",
      },
      {
        id: "moda2",
        nombre: "Sombrero de Paja",
        stock: 55,
        precio: 7.99,
        categoria: "Moda",
      },
      {
        id: "jard2",
        nombre: "Herramientas de Jardinería",
        stock: 40,
        precio: 29.99,
        categoria: "Jardinería",
      },
      {
        id: "lib2",
        nombre: "Novela Histórica",
        stock: 30,
        precio: 12.99,
        categoria: "Libros",
      },
      {
        id: "mus2",
        nombre: "Auriculares con Cancelación de Ruido",
        stock: 20,
        precio: 99.99,
        categoria: "Música",
      },
      {
        id: "coc3",
        nombre: "Exprimidor de Cítricos",
        stock: 50,
        precio: 14.99,
        categoria: "Cocina",
      },
      {
        id: "mas2",
        nombre: "Rascador para Gatos",
        stock: 75,
        precio: 19.99,
        categoria: "Mascotas",
      },
      {
        id: "ofi2",
        nombre: "Calculadora Científica",
        stock: 35,
        precio: 19.99,
        categoria: "Oficina",
      },
      {
        id: "viaj2",
        nombre: "Maleta de Viaje con Ruedas",
        stock: 90,
        precio: 79.99,
        categoria: "Viaje",
      },
      {
        id: "tec2",
        nombre: "Cámara de Seguridad WiFi",
        stock: 40,
        precio: 49.99,
        categoria: "Tecnología",
      },
      {
        id: "ent2",
        nombre: "Juego de Mesa Familiar",
        stock: 65,
        precio: 29.99,
        categoria: "Entretenimiento",
      },
      {
        id: "sal2",
        nombre: "Tensiómetro Digital de Muñeca",
        stock: 25,
        precio: 29.99,
        categoria: "Salud",
      },
      {
        id: "auto2",
        nombre: "Organizador para Coche",
        stock: 80,
        precio: 12.99,
        categoria: "Automóviles",
      },
      {
        id: "bri2",
        nombre: "Sierra Circular",
        stock: 40,
        precio: 79.99,
        categoria: "Bricolaje",
      },
      {
        id: "joy2",
        nombre: "Anillo de Compromiso",
        stock: 20,
        precio: 299.99,
        categoria: "Joyería",
      },
      {
        id: "fit2",
        nombre: "Estera de Yoga Antideslizante",
        stock: 55,
        precio: 24.99,
        categoria: "Fitness",
      },
      {
        id: "beb2",
        nombre: "Pack de Cervezas Artesanales",
        stock: 50,
        precio: 24.99,
        categoria: "Bebidas",
      },
      {
        id: "vg2",
        nombre: "Controlador de Videojuegos",
        stock: 65,
        precio: 39.99,
        categoria: "Videojuegos",
      },
      {
        id: "dec2",
        nombre: "Espejo Decorativo",
        stock: 75,
        precio: 39.99,
        categoria: "Decoración",
      },
      {
        id: "pap2",
        nombre: "Estuche de Lápices de Colores",
        stock: 90,
        precio: 8.99,
        categoria: "Papelería",
      },
      {
        id: "her2",
        nombre: "Destornillador Eléctrico",
        stock: 40,
        precio: 29.99,
        categoria: "Herramientas",
      },
      {
        id: "acc2",
        nombre: "Bolso de Mano",
        stock: 70,
        precio: 39.99,
        categoria: "Accesorios",
      },
      {
        id: "coc4",
        nombre: "Báscula de Cocina Digital",
        stock: 60,
        precio: 19.99,
        categoria: "Cocina",
      },
      {
        id: "bell4",
        nombre: "Esponja Exfoliante Facial",
        stock: 50,
        precio: 6.99,
        categoria: "Belleza",
      },
      {
        id: "elec4",
        nombre: "Cable HDMI de Alta Velocidad",
        stock: 55,
        precio: 9.99,
        categoria: "Electrónica",
      },
    ];

    const handleResult = ({ product, index }: { product: registro, index:number }) => {
      return (
        <tr key={product.id} className={`${index%2==0?"bg-gray-200":""}`}>
          <td className="border-x border-black">{product.id}</td>
          <td className="border-x border-black">{product.nombre}</td>
          <td className="border-x border-black">{product.stock}</td>
          <td className="border-x border-black">{product.precio}</td>
          <td className="border-x border-black">{product.categoria}</td>
          <td className="border-x border-black"><button className="bg-purple-500">editar</button><button className="bg-red-500">eliminar</button></td>

        </tr>
      );
    };

    return (
      <div className="w-[80%] h-[95%] overflow-y-scroll">
        <table className=" w-full h-full  border-collapse text-center border-b border-black ">
          <thead>
            <tr className="border border-black">
              <th className="border border-black">Codigo</th>
              <th className="border border-black">Nombre</th>
              <th className="border border-black">Stock</th>
              <th className="border border-black">Valor Unit.</th>
              <th className="border border-black">Categoria</th>
              <th className="border border-black">Accion</th>

            </tr>
          </thead>
          <tbody>{registros.map((product,index) => handleResult({ product,index }))}</tbody>
        </table>
      </div>
    );
  } else if (state === 1) {
    return <div className="w-[80%] h-[95%] overflow-y-scroll">
      <label htmlFor="">codigo del po</label>
      <input type="text" />
    </div>;
  } else if (state === 2) {
  } else if (state === 3) {
  }
};

export default Gestor;
