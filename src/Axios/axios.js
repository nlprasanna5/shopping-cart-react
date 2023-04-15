import axios from 'axios'

const API = axios.create({
    baseURL:"https://shooping-backend.onrender.com"
})

export default API