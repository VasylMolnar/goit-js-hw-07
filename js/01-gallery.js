import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryContainer: document.querySelector('.gallery'),
};

const galleryElements = galleryItems
    .map(({ preview, original, description } = {}) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt=${description}
                />
            </a>
        </div>`;
    })
    .join('');

refs.galleryContainer.innerHTML = galleryElements;

refs.galleryContainer.addEventListener('click', event => {
    event.preventDefault();
    const source = event.target.dataset.source;

    if (event.target.nodeName != 'IMG') {
        return;
    }

    basicLightbox.create(`<img src="${source}">`).show();
    window.addEventListener('keydown', modalClose);

    //console.log(event.target);
    //console.log(event.currentTarget);
    //console.log(event.target.dataset.source);
});

const modalClose = event => {
    if (event.code !== 'Escape') {
        return;
    }

    document.querySelector('.basicLightbox').remove();
    window.removeEventListener('keydown', modalClose);
};