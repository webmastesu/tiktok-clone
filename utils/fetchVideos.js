import axios from 'axios';

export const fetchVideos = async () => {
  try {
    const response = await axios.get('https://nano.109110.xyz/api.php'); // Update with your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};
