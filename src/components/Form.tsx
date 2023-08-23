type FormProps = {
  handleClick: () => void;
};

function Form({ handleClick }: FormProps) {
  return (
    <form className="form-container">
      <div>
        <label htmlFor="name">Nome do serviço</label>
        <input type="text" id="name" placeholder="Nome do serviço" />
      </div>
      <div>
        <label htmlFor="login">Login</label>
        <input type="text" id="login" placeholder="Login" />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" placeholder="Senha" />
      </div>
      <div>
        <label htmlFor="url">URL</label>
        <input type="text" id="url" placeholder="URL" />
      </div>
      <div>
        <button type="submit" id="sub-button">Cadastrar</button>
      </div>
      <div>
        <button onClick={ handleClick } id="cancel-button">Cancelar</button>
      </div>
    </form>
  );
}

export default Form;
