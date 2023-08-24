import { useState } from 'react';
import { objInput, InputType, verifyInputs } from '../data';

type FormProps = {
  handleClick: () => void;
  newService: (service: InputType) => void;
};

function Form({ handleClick, newService }: FormProps) {
  const [inputData, setInputData] = useState<InputType>(objInput);

  const valid = 'valid-password-check';
  const inValid = 'invalid-password-check';

  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/;
  const verifyPassword = regex.test(inputData.senha);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  function deletePassword() {
    setInputData(objInput);
  }
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
        <input
          type="text"
          name="url"
          id="url"
          placeholder="URL"
          value={ inputData.url }
          onChange={ handleChange }
        />
      </div>
      <div>
        <button
          disabled={ !verifyInputs(inputData) }
          onClick={ () => {
            handleClick();
            newService(inputData);
            deletePassword();
          } }
        >
          Cadastrar
        </button>
      </div>
      <div>
        <button
          id="cancel-button"
          onClick={ () => {
            handleClick();
            newService(inputData);
            deletePassword();
          } }
        >
          Cancelar
        </button>
      </div>
      <fieldset>
        <div className={ verifyPassword ? valid : inValid }>
          Possuir 8 ou mais caracteres
        </div>
        <div className={ verifyPassword ? valid : inValid }>
          Possuir até 16 caracteres
        </div>
        <div className={ verifyPassword ? valid : inValid }>
          Possuir letras e números
        </div>
        <div className={ verifyPassword ? valid : inValid }>
          Possuir algum caractere especial
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
