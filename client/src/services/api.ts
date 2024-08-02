import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const registerEntry = (personId: string, gate: string) => API.post('/entry', { personId, gate });
export const registerExit = (personId: string, gate: string) => API.post('/exit', { personId, gate });
export const getPeople = () => API.get('/people');

export const getHistory = async (personId: string, startDate: string, endDate: string) => {
  try {
    const response = await API.get(`/history?personId=${personId}&startDate=${startDate}&endDate=${endDate}`);
    return response;
  } catch (error) {
    console.error('Error fetching history:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};

export const getAnalytics = () => API.get('/analytics');
