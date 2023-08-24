import axios from "axios";

const { REACT_APP_API_TOKEN, REACT_APP_BASE_URL } = process.env;

export const HTTPAruna = axios.create({
  baseURL: REACT_APP_BASE_URL || "http://localhost:1337",
  headers: {
    Authorization: "Bearer " + REACT_APP_API_TOKEN
  }
})