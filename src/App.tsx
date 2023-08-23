import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [sForm, setSForm] = useState(false);

  const clickForm = () => {
    setSForm(!sForm);
  };

  return (
    <>
      <Title />
      {sForm
        ? <Form handleClick={ clickForm } />
        : <Button handleClick={ clickForm }>Cadastrar nova senha</Button>}
    </>
  );
}

export default App;
