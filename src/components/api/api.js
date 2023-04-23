import axios from 'axios';

const API_KEY = '34340610-d80af26bc152b3d7b72183181';
const BASE_URL = 'https://pixabay.com/api/';
const fetchImages = async (query, currentPage) => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  const images = await axios.get(`${BASE_URL}?${searchParams}`);

  return images.data;
};
export default fetchImages;
