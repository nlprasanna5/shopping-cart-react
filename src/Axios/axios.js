import axios from 'axios'

const API = axios.create({
    baseURL:"https://shopping-backend-t6jp.onrender.com"
})

export default API