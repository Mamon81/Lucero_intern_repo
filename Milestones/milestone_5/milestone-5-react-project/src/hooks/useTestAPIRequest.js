import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { testAPIRequest } from '../api/services/testAPIRequest';

export const useTestAPIRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const makeRequest = async (testData) => {
    setLoading(true);
    setError(null);

    try {
      const responseData = await testAPIRequest(testData);
      setData(responseData);

      // Check if the server response requires a redirect
      if (responseData && responseData.redirectURL) {
        navigate(responseData.redirectURL);
      }
    } catch (err) {
      // Fallback to a generic message if err.message is unavailable
      setError(
        err.message || 'An error occurred while making the API request.'
      );
    } finally {
      // Ensure loading state is disabled regardless of success or failure
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    makeRequest,
  };
};

export default useTestAPIRequest;
