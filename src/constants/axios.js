import axios from "axios";
import { apiBaseUrl } from "./constants";
const instance = axios.create({
    baseURL: apiBaseUrl
    
});
export default instance
