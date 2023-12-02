import React from 'react';

function Welcome() {
  const validarEmail = (e) => {
    const email = e.target.value;
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      e.target.setCustomValidity('Por favor, ingrese un email válido.');
    } else {
      e.target.setCustomValidity('');
    }
  };

  const validarContrasenas = () => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
    }
  };

  const validarNombre = (e) => {
    const nombre = e.target.value;
    if (!nombre.match(/^[A-Za-z\s]+$/)) {
      e.target.setCustomValidity('El nombre solo puede contener letras.');
    } else {
      e.target.setCustomValidity('');
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:max-w-2xl lg:w-full bg-gray-100 rounded-lg p-8 flex flex-col w-full">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registrarse</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Nombre completo</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Ingrese su nombre completo"
              pattern="[A-Za-z\s]+"
              required
              onInput={validarNombre}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="username" className="leading-7 text-sm text-gray-600">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Ingrese su nombre de usuario"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Ingrese su correo electrónico"
              required
              onInput={validarEmail}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="confirm-password" className="leading-7 text-sm text-gray-600">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Confirme su contraseña"
              required
            />
          </div>
          <button
            className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            onClick={validarContrasenas}
          >
            Registrarse
          </button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
