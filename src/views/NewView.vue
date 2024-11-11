<template>
  <div id="app">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Nome</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <div>
        <label for="username">E-mail</label>
        <input type="text" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Senha</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Cadastrar</button>
      <hr>
    </form>
  </div>
</template>

<script>
import authService from '../services/auth';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      authService.register({ name: this.name, email: this.email, password: this.password })
        .then(response => {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/dashboard');
        })
        .catch(error => {
          console.error('Erro ao cadastrar:', error.response);
        });
    },
  }
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
