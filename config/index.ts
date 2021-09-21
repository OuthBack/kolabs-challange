import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,
  params: { api_key: 'e2e6c0526e3737f2381684d2fd63d354', language: 'pt-BR' },
});
