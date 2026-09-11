import axios from 'axios';

export const sendFormData = async (data: any) => {
  try {
    const response = await axios.post('/api/clients', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data || 'Error de red');
    }
    throw error;
  }
};