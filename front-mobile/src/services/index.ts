import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.16.0.6:8080',
  // baseURL: "https://kevin-dscatalog.herokuapp.com",
})

export const TOKEN = "Basic ZHNjYXRhbG9nOmRzY2F0YWxvZzEyMw=="