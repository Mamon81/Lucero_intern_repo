import axiosInstance from '../axiosInstance';

export const testAPIRequest = async (testData) => {
  try {
    const response = await axiosInstance.post('/posts', testData);

    return response.data;
  } catch (error) {
    console.error('Error submitting test data:', error);
    throw error;
  }
};
