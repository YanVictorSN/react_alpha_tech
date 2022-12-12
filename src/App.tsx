import { Formulario } from './components/Form'
import './App.css';
import React, { useState } from 'react';
import { Modal } from './components/Modal';



function App() 
{


  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState();
  console.log(dataUser);
  
  async function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement);
    const body = Object.fromEntries(formData.entries());
    setModalOpened(true)

    const res = await fetch("https://localhost:8000/users", {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(body),
    }).then((res) => res.json()).then((json) => {
      setDataUser(json)
    })
  }

  function closeModal(){
    setModalOpened(!modalOpened)
  }

  return (
    <>
    <Modal isOpen={modalOpened} closeModal={closeModal}/>
    
    <div className="App">
      <Formulario onSubmit={handleSubmit} textSubmit='Entrar'>
      <label htmlFor='name'>Nome</label>
      <input id='name' type='text' name='name'/>
      <label htmlFor='email'>Email</label>
      <input id='email' type='email' name='email'/>
      <label htmlFor="password">Senha</label>
      <input id='password' type='password' name='password'/>
      </Formulario>
    </div>
    </>
    
    
  );
}

export default App;
