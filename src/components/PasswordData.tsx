import { InputType } from '../data';

type PasswordDataProps = {
  passwordData: InputType[];
  deleteService: (param: string) => void;
};

function PasswordData({ passwordData, deleteService }: PasswordDataProps) {
  return (
    <ul>
      {passwordData.map((password) => (
        <li key={ password.name }>
          <a href={ password.url } target="_blank" rel="noreferrer noopener">
            { password.name }
          </a>
          <p>{ password.login }</p>
          <p>{ password.senha }</p>
          <button
            data-testid="remove-btn"
            onClick={ () => deleteService(password.name) }
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PasswordData;
