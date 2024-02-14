import React, { useState } from 'react';

function Forrm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHdler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('name==>', name, 'email==>', email, 'password==>', password);
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        margin: 'auto',
      }}
      onSubmit={submitHdler}
    >
      {loading && (
        <div>
          <span>Chargement...</span>
        </div>
      )}
      <label htmlFor='name'></label>
      <input
        value={name}
        id='name'
        type='text'
        placeholder='Entrer votre nom'
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='email'></label>
      <input
        value={email}
        id='email'
        type='email'
        placeholder='Entrer votre email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'></label>
      <input
        value={password}
        id='password'
        type='password'
        placeholder='Entrer votre nom'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Envoyer</button>
    </form>
  );
}

export default Forrm;
