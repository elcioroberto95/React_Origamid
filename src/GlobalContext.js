import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);
  function LimparDados() {
    setDados(null);
  }
  return (
    <GlobalContext.Provider value={{ dados, LimparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
