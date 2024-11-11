import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const authService = {
    register(user) {
        return axios.post(API_URL + 'register', user);
    },

    login(user) {
        return axios.post(API_URL + 'login', user);
    },

    logout() {
        return localStorage.removeItem('token');
    },

    getUser() {
        return axios.get(API_URL + 'user', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
    },

    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
};

export default authService;
