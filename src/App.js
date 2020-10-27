import React from 'react';

const App = () => {
  const formFields = [
    {
      id: 'nome',
      label: 'nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'numero',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'estado',
      type: 'text',
    },
  ];
  const formFieldsReduce = formFields.reduce((acc, field) => {
    console.log(acc);
    return {
      ...acc,
      [field.id]: '',
    };
  }, {});
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  const [response, setResponse] = React.useState(null);
  function handleChange(event) {
    const { id, value } = event.target;
    setForm({ ...form, [id]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://ranekapi.origamid.dev/json/api/usuario`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={label}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}

      {response && response.ok && <p>Vai se fuder</p>}
      {response && response.ok == false && <p>Vai toma no seu CU</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
