import React from 'react'

function GenerateReport() {
  return (
    <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded invert" alt="hero" src="https://cdn-icons-png.flaticon.com/512/4371/4371054.png" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Generar reporte
      </h1>
      <p className="mb-8 leading-relaxed">Genera el reporte con este simple botón</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#e44a3c]  border-0 py-2 px-6 focus:outline-none hover:bg-[#a03127] rounded text-lg">Generar reporte</button>
      </div>
    </div>
  </div>
</section>
  )
}
export default GenerateReport