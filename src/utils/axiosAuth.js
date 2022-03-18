import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:9999/auth/',
    timeout: 10000
})

client.interceptors.request.use(config => config)

client.interceptors.response.use(config => config)

export default client
