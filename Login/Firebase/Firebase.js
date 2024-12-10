import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnIIUyBtzoYcQQ6QKWv3eNvY2InrTSaew",
  authDomain: "agendamento-ac4cb.firebaseapp.com",
  projectId: "agendamento-ac4cb",
  storageBucket: "agendamento-ac4cb.firebasestorage.app",
  messagingSenderId: "940316996510",
  appId: "1:940316996510:web:8ff3cbf76db6656ba05c8f",
  measurementId: "G-M4DPB6RB6S"
};

// 2. Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

// 3. Referência para os botões e áreas de usuário
const loginBtn = document.getElementById("login-btn");
const userInfo = document.getElementById("user-info");
const userName = document.getElementById("user-name");
const userPhoto = document.getElementById("user-photo");
const logoutBtn = document.getElementById("logout-btn");


// 4. Função de login com Google
const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const result = await auth.signInWithPopup(provider);
    const user = result.user;
    console.log(user);
    // Exibe as informações do usuário
    userName.innerText = user.displayName;
    userPhoto.src = user.photoURL;
    loginBtn.style.display = "none";
    userInfo.style.display = "block";
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
  }
};

// 5. Função de logout
const logout = () => {
  auth.signOut().then(() => {
    loginBtn.style.display = "block";
    userInfo.style.display = "none";
  }).catch(error => {
    console.error("Erro ao sair:", error.message);
  });
};

// 6. Adiciona evento de clique para o botão de login
loginBtn.addEventListener("click", loginWithGoogle);

// 7. Adiciona evento de clique para o botão de logout
logoutBtn.addEventListener("click", logout);

// 8. Observa o estado de autenticação do usuário
auth.onAuthStateChanged(user => {
  if (user) {
    userName.innerText = user.displayName;
    userPhoto.src = user.photoURL;
    loginBtn.style.display = "none";
    userInfo.style.display = "block";
  } else {
    loginBtn.style.display = "block";
    userInfo.style.display = "none";
  }
});