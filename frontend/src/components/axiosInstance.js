import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Base URL
    headers: {
        'Content-Type': 'application/json',
    },
    // You can also add authentication tokens here if needed
});

export default axiosInstance;
