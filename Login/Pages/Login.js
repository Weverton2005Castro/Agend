import React from 'react';
import './Login.css';

console.log("erro", Login);

const Login = () => {

  return (
      <main>

      <div className="DivH1" >
        <h1>Login</h1>
      </div>

      <div className="DivEmail" >
        <input
          className="InputEmail"
          id="email"
          type="email"
          placeholder="Digite o seu e-mail"
        />
      </div>

      <div className="DivSenha" >
        <input
          className="InputSenha"
          type="password"
          placeholder="Digite a sua senha"
          id="senha"
        />
      </div>
      
      <div>
        <button
          onClick={Login}
          type="button"
          className="button">
          Logar
        </button>
      </div>

    </main>
  );
};

export default Login;
