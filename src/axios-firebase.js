import axios from 'axios';

const instance = axios.create({
   baseURL: "https://todo-list-b8946-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default instance;