import React, { useState } from 'react';

function Welcome() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validarEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    if (!newEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      e.target.setCustomValidity('Por favor, ingrese un email válido.');
    } else {
      e.target.setCustomValidity('');
    }
    setEmail(newEmail);
  };

  const validarUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const validarContrasenas = async () => {
    try {
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
  
      const newUser = {
        Nombre: fullName,
        NombreUsuario: username,
        CorreoElectronico: email,
        Contrasena: password,
        TotalVentas: 0,
        Balance: 0,
      };
  
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        console.log(await response.text());
        throw new Error('Error al crear el usuario.');
      }
  
      const data = await response.json();
      alert('Usuario creado exitosamente.');
      window.location.replace('');
      console.log('Respuesta del servidor:', data);
    } catch (error) {
      alert(error.message);
    }
  };
  

  const validarNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFullName = e.target.value;
    if (!newFullName.match(/^[A-Za-z\s]+$/)) {
      e.target.setCustomValidity('El nombre solo puede contener letras.');
    } else {
      e.target.setCustomValidity('');
    }
    setFullName(newFullName);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
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
            value={fullName}
            onChange={validarNombre}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            pattern="[A-Za-z\s]+"
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="username" className="leading-7 text-sm text-gray-600">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={validarUsername}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
            value={password}
            onChange={handlePasswordChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="confirm-password" className="leading-7 text-sm text-gray-600">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <button
          className="text-white bg-[#e44a3c] border-0 py-2 px-8 focus:outline-none hover:bg-[#a03127] rounded text-lg"
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