import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Produtos.module.css';
const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <div className={`${styles.produtos} animeLeft`}>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img
            className={styles.foto}
            src={produto.fotos[0].src}
            alt={produto.fotos[0].titulo}
          />
          <h1>{produto.nome}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Produtos;
