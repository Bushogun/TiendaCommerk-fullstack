import React from 'react'

function home() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col bg-[#2e2b4e] p-8 rounded-lg">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-[#e44a3c] bg-gray-100 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-bold mb-2">Ver Productos</h2>
            <p className="leading-relaxed text-base">
            Esta opción lista todos los productos que se encuentren en base de datos por medio de un método GET.
            </p>
            <a className="mt-3 text-[#e44a3c] inline-flex items-center" href='/view-products'>Ver Productos
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col bg-[#2e2b4e] p-8 rounded-lg">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-bold mb-2">Crear Productos</h2>
            <p className="leading-relaxed text-base">
              Esta opción permite crear productos en base de datos a través de un método POST.
            </p>
            <a className="mt-3 text-[#e44a3c] inline-flex items-center" href='/create-product'>Crear Productos
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-[#e44a3c] bg-gray-100 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3zM12 8v8m-4-4h8"></path>
            </svg>
          </div>
        </div>
        
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col bg-[#2e2b4e] p-8 rounded-lg">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-[#e44a3c] bg-gray-100 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
            <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-bold mb-2">Crear Venta</h2>
            <p className="leading-relaxed text-base">
              Esta opción permite crear una venta que se verá reflejada en cada usuario, añadiendo datos al reporte que se puede generar con la siguiente opción.
            </p>
            <a className="mt-3 text-[#e44a3c] inline-flex items-center" href='/generate-sell'>Crear Venta
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>


        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col bg-[#2e2b4e] p-8 rounded-lg">
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 className="text-white text-lg title-font font-bold mb-2">Generar Reporte</h2>
            <p className="leading-relaxed text-base">
              Esta opción permite generar un reporte con toda la información actualizada en formato excel
            </p>
            <a className="mt-3 text-[#e44a3c] inline-flex items-center" href='/generate-report'>Generar Reporte
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-[#e44a3c] bg-gray-100 flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
              <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

  )
}

export default home