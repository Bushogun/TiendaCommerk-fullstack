import React from 'react'

function GenerateSell() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
      <div className="lg:max-w-2xl lg:w-full bg-gray-100 rounded-lg p-8 flex flex-col w-full">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Venta de productos</h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Nombre producto a vender</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Nombre Vendedor</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="text-white bg-[#e44a3c] border-0 py-2 px-8 focus:outline-none hover:bg-[#a03127] rounded text-lg">Realizar venta</button>
      </div>
    </div>
  </section>
  )
}
export default GenerateSell







