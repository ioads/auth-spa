<template>
  <div id="app">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">E-mail</label>
        <input type="text" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Entrar</button>
      <hr>
      <button @click="goToHome">Cadastrar</button>
    </form>
    <p v-if="loginFailed" style="color: red;">Usuário ou senha inválidos!</p>
  </div>
</template>

<script>
import authService from '../services/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
      loginFailed: false,
    };
  },
  created() {
    if (authService.isAuthenticated()) {
      this.$router.push('/dashboard');
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    handleSubmit() {
      authService.login({ email: this.email, password: this.password })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/dashboard');
        })
        .catch(error => {
          this.loginFailed = true
          console.error('Erro de autenticação:', error.response);
        });
    },
    goToHome() {
      this.$router.push({name: 'register'})
    }
  },
};
</script>

<style>
#app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

div {
  margin-bottom: 15px;
}

label {
  font-size: 1rem;
  color: #000000;
}

input {
  padding: 8px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
