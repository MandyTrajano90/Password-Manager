import { InputType } from '../data';

function PasswordData({ passwordData }: { passwordData: InputType[] }) {
  return (
    <ul>
      {passwordData.map((password) => (
        <li key={ password.name }>
          <a href={ password.url } target="_blank" rel="noreferrer noopener">
            { password.name }
          </a>
          <p>{ password.login }</p>
          <p>{ password.senha }</p>
        </li>
      ))}
    </ul>
  );
}

export default PasswordData;
