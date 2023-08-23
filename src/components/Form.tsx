import { useState } from 'react';
import { objInput, InputType, verifyInputs } from '../data';

type FormProps = {
  handleClick: () => void;
};

function Form({ handleClick }: FormProps) {
  const [inputData, setInputData] = useState<InputType>(objInput);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log(name);
    setInputData({
      ...inputData,
      [name]: value,
    });
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={ handleSubmit } className="form-container">
      <div>
        <label htmlFor="name">Nome do serviço</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Nome do serviço"
          value={ inputData.name }
          onChange={ handleChange }
        />
      </div>
      <div>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          name="login"
          required
          placeholder="Login"
          value={ inputData.login }
          onChange={ handleChange }
        />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Senha"
          value={ inputData.senha }
          onChange={ handleChange }
        />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input type="text" id="url" placeholder="URL" />
      </div>
      <div>
        { verifyInputs(inputData)
          ? <button disabled={ false }>Cadastrar</button>
          : <button disabled>Cadastrar</button>}
      </div>
      <div>
        <button onClick={ handleClick } id="cancel-button">Cancelar</button>
      </div>
    </form>
  );
}

export default Form;
