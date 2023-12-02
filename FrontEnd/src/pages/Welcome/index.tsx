import styles from './welcome.module.css';
import { Link } from 'react-router-dom';


const Welcome = () => {
  return (
<section className="grid place-items-center h-screen items-center justify-items-center">
      <div className={`${styles['hero-container']} text-white text-center min-w-[300px] max-w-[800px]`}>
        <h1 className="m-5 text-6xl">INICIO</h1>
        <h2 className="m-5 py-4 text-[#ddd] text-lg">
          Esta aplicación permite crear usuarios, crear productos, ver los usuarios y productos realizar ventas, comisionar para al final generar un reporte.<br/>Esta aplicación fue creada con una base de datos relacional usando el MER en MySQL cuya única justificación se orienta a efectos prácticos, el front está realizado en REACT y su Backend está hecho con NodeJs con el framework NESTJS usando clean Architecture y la inyección de dependencias como patrón de diseño.
        </h2>
        <Link to="/login">
          <button className="bg-[#e44a3c] rounded-full box-border text-white cursor-pointer text-2xl font-semibold leading-[50px] px-12 py-2 hover:bg-[#a03127]">Ingresa a la APP</button>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;