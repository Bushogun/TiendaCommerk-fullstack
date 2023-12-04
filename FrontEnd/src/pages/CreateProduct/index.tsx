import React, { useState, ChangeEvent } from 'react';

function CreateProduct() {
  const [image, setImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productRealPrice: 0,
    productSalePrice: 0,
    productStockQuantity: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Verifica si el valor es numérico y realiza la conversión a número si es necesario
    const parsedValue = /^\d+$/.test(value) ? parseInt(value) : value;

    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  const handleSubmit = async () => {
    const dataToSend = {
      NombreProducto: formData.productName,
      DescripcionProducto: formData.productDescription,
      PrecioReal: formData.productRealPrice,
      PrecioVenta: formData.productSalePrice,
      Cantidad: formData.productStockQuantity,
      ImagenProducto: image, // Asegúrate de manejar correctamente la imagen para convertirla a un formato aceptable (Buffer, en este caso)
      FechaCreacion: new Date(), // Si es necesario, agrega la fecha de creación aquí
    };

    console.log('Data to send:', dataToSend);

    try {
      const response = await fetch('http://localhost:4000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Producto creado exitosamente.');
        window.location.replace('');
      } else {
        console.error('Error al crear el producto.');
        // Aquí maneja el caso en el que la respuesta no es exitosa.
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:max-w-2xl lg:w-full bg-gray-100 rounded-lg p-8 flex flex-col w-full">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Crea un producto para venta!</h2>
          <div className="relative mb-4">
            <label htmlFor="product-name" className="leading-7 text-sm text-gray-600">Nombre Producto</label>
            <input
              type="text"
              id="product-name"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              pattern="[A-Za-z\s]+"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="product-description" className="leading-7 text-sm text-gray-600">Descripcion Producto</label>
            <input
              type="text"
              id="product-description"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="product-real-price" className="leading-7 text-sm text-gray-600">Precio Real</label>
            <input
              type="number"
              id="product-real-price"
              name="productRealPrice"
              value={formData.productRealPrice}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="product-sale-price" className="leading-7 text-sm text-gray-600">Precio Venta</label>
            <input
              type="number"
              id="product-sale-price"
              name="productSalePrice"
              value={formData.productSalePrice}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="product-stock-quantity" className="leading-7 text-sm text-gray-600">Cantidad en stock</label>
            <input
              type="number"
              id="product-stock-quantity"
              name="productStockQuantity"
              value={formData.productStockQuantity}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <button
            className="text-white bg-[#e44a3c] border-0 py-2 px-8 focus:outline-none hover:bg-[#a03127] rounded text-lg"
            onClick={handleSubmit}
          >
            Crear Producto
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateProduct;
