// api.js
const API_KEY = '53247506-7aa000431d66614cf5718bca5';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    if (!data.hits || data.hits.length === 0) {
      return [];
    }
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
