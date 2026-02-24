import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Helper to create a unique ID for every request tracking
const generateRequestId = () => uuidv4();

// Main settings for our API connection
const config = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(config);

// This runs BEFORE every request leaves your computer
axiosInstance.interceptors.request.use(
  (config) => {
    const currentConfig = config;

    // Add a unique tracking ID to the headers
    currentConfig.headers['X-Request-ID'] = generateRequestId();

    // Create a "kill switch" to cancel the request if needed
    const controller = new AbortController();
    currentConfig.signal = controller.signal;

    // If we have a login token, attach it automatically
    const token = localStorage.getItem('authToken');
    if (token) {
      currentConfig.headers.Authorization = `Bearer ${token}`;
    }

    return currentConfig;
  },
  (error) => Promise.reject(error)
);

// This runs AFTER a response comes back from the server
axiosInstance.interceptors.response.use(
  (response) => response, // If successful, just return the data
  (error) => {
    // Check if the request stopped because it took too long
    if (error.code === 'ECONNABORTED') {
      console.error('Request timed out:', error.config.url);
    }

    // Check for specific server errors (like "Logged Out" or "Not Found")
    if (error.response) {
      if (error.response.status === 401) {
        console.warn('Unauthorized - user should log in again');
      }
    } else if (error.request) {
      console.error('Network error - server did not respond');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
