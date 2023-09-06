import axios from "axios";

const baseService = axios.create({
    baseURL: "http://localhost:4000/api", 
    headers: {
        "Content-type": "application/json"
    }
});

export default baseService;
