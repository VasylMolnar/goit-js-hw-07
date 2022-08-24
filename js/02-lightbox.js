import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryContainer: document.querySelector('.gallery'),
};

const galleryElements = galleryItems
    .map(({ preview, original, description } = {}) => {
        return `<a class="gallery__item" href=${original}>
            <img 
            class="gallery__image" 
            src=${preview} 
            alt=${description} 
            />
      </a>`;
    })
    .join('');

refs.galleryContainer.innerHTML = galleryElements;

refs.galleryContainer.addEventListener('click', event => {
    event.preventDefault();
});

new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    animationSpeed: 250,
    captionsData: 'alt',
});