import axios from 'axios';

export const api = axios.create({
    baseURL: "https://62d36eceafb0b03fc5b2f5d9.mockapi.io/api/kabum/",
});