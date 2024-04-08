import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/useContext.jsx';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loggedIn, login } = useAuth();

  useEffect(() => {
    if (loggedIn) {
    }
  }, [loggedIn]);

  const handleLogin = () => {
    if (username !== '' && password !== '') {
      login();
      alert('bienvenido');
    } else {
      alert('Por favor, ingresa un nombre de usuario y contraseña válidos.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Bienvenido, {username}!</h2>
          <button onClick={() => logout()}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <label>
               Usuario:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Contraseña:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
