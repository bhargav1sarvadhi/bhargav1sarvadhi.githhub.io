import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const callAPI = async (method, endpoint, data = null) => {
  try {
    const response = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
    });
    return response.data;
  } catch (err) {
    // Handle error here, for example:
    // - Log the error
    // - Show user-friendly messages
    // - Customize error handling based on status code or message

    // You can include more detailed error handling here if needed
    console.error('API call error:', err);
    
    // Return a user-friendly error or rethrow
    throw new Error(err.response ? err.response.data.message : 'An unknown error occurred');
  }
};
