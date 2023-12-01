import styles from './welcome.module.css';

const Welcome = () => {
  return (
    <section className={styles['home-section']}>
      <div className={styles['hero-container']}>
        <h1 className={styles['title']}>INICIO</h1>
        <h2 className={styles['subtitle']}>
          Esta aplicación permite 
          <br />
          
        </h2>
      </div>
    </section>
  );
};

export default Welcome;