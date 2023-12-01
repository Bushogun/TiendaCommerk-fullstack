import styles from './welcome.css';

const Welcome = () => {
  return (
    <section className={'home-section'}>
      <div className={'hero-container'}>
        <h1 className={'title'}>¡Bienvenidos!</h1>
        <h2 className={'subtitle'}>
          Gracias por tomarse el tiempo de hacer una revisión de este código!
          <br />
          <br />
          En esta aplicación (en la sección de CRUD) encontrará una data consumida de un API llamado FakeStore,
          y se despliega la data, podrás filtrar, acceder a un producto en específico para ver sus detalles.
          ¡Explora y disfruta!
        </h2>
      </div>
    </section>
  );
};

export default Welcome;