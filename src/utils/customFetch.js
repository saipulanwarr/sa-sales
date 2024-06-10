import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:8100",
});

export default customFetch;
