// imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './api.js';
import { renderGallery } from './markup.js';

// DOM elements
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const searchInput = event.target.elements['search-input'];
  const searchQuery = searchInput.value.trim();

  // Gallery
  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  if (!searchQuery) {
    iziToast.info({
      title: 'Empty Search',
      message: 'Please enter a search term!',
      position: 'topRight',
      timeout: 2000,
    });
    loader.classList.add('hidden');
    return;
  }

  try {
    const images = await fetchImages(searchQuery);

    if (!images.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
      });
      return;
    }

    renderGallery(images);

    // Clean input box
    searchInput.value = '';
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong while fetching images.',
      position: 'topRight',
      timeout: 3000,
    });
  } finally {
    loader.classList.add('hidden');
  }
});

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('focus', () => {
  searchInput.placeholder = 'Type area...';
});

searchInput.addEventListener('blur', () => {
  searchInput.placeholder = 'Search images...';
});
