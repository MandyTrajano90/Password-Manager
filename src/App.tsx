import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Title from './components/Title';
import { InputType } from './data';
import PasswordData from './components/PasswordData';

function App() {
  const [sForm, setSForm] = useState(false);
  const [servList, setServlist] = useState<InputType[]>([]);

  const clickForm = () => {
    setSForm(!sForm);
  };

  const addPassword = (newService: InputType) => {
    setServlist([...servList, newService]);
  };

  return (
    <>
      <Title />
      {sForm
        ? <Form handleClick={ clickForm } newService={ addPassword } />
        : <Button handleClick={ clickForm }>Cadastrar nova senha</Button>}
      { servList.length === 0 ? (
        <h2>Nenhuma senha cadastrada</h2>
      ) : (
        <PasswordData passwordData={ servList } />
      )}
    </>
  );
}

export default App;
