<template>
    <div id="app">
        <h1 style="color: black;">Dashboard</h1>
        <button @click="logout()">Logout</button>
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
    created() {
        if (!authService.isAuthenticated()) {
            this.$router.push('/');
        }
    },
    methods: {
      logout() {
        authService.logout();
        this.$router.push('/');
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
  