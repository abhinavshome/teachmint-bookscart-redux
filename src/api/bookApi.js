import axios from "axios";

const bookApi = axios.create({
    baseURL: 'http://localhost:5000'
});

export default bookApi;
