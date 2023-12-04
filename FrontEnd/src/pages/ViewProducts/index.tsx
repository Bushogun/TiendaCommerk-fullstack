import React, { useState, useEffect } from 'react';

function ViewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:4000/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Establece los datos recibidos en el estado 'products'
        } else {
          console.error('Error al cargar los productos:', response.status);
        }
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      }
    }

    fetchProducts();
  }, []); // El segundo argumento [] asegura que esto se ejecute solo una vez al montar el componente

  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.ProductoID} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`https://picsum.photos/420/260?random=${product.ProductoID}`} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-white title-font text-lg font-medium">{product.NombreProducto}</h2>
                <p className="mt-1">${product.PrecioVenta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ViewProducts;
