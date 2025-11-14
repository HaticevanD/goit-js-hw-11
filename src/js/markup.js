// imports
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // clean the previous results

  const markup = images
    .map(
      img => `
    <li class="gallery-item">
      <a href="${img.largeImageURL}">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>👍 ${img.likes}</p>
        <p>👁️ ${img.views}</p>
        <p>💬 ${img.comments}</p>
        <p>⬇️ ${img.downloads}</p>
      </div>
    </li>
  `
    )
    .join('');

  gallery.innerHTML = markup;

  // SimpleLightbox
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
