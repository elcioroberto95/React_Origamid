import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';
const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft`}>
      <Head title="Contato" description="Ok" />
      <img className={styles.foto} src={foto} alt="Maquina de escrever" />
      <div className={styles.dados}>
        <h1>entre em contato</h1>
        <ul>
          <li>Email@email.com</li>
          <li>9999-9999</li>
          <li>Rua elcio,pereiraPq florely</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
