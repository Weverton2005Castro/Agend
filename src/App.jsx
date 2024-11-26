import React from "react";

function App() {
 

  return (
    <div id="app">
      {/* Renderize o botão do usuário ou o formulário de login dependendo da autenticação */}
      {isAuthenticated ? (
        <div id="user-button"></div>
      ) : (
        <div id="sign-in"></div>
      )}
    </div>
  );
}

export default App;
