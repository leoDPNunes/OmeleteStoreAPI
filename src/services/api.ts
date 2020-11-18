import axios from 'axios';

// const api = axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://store.omelete.com.br',
});

// const api = axios;
// axios.defaults.baseURL = 'https://store.omelete.com.br';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default api;
