import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function showNotificationError() {
    iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 2000,
    close: false,
    overlay: false,
    displayMode: 'once',
    color: '#EF4040',
    messageColor: '#FFFFFF',
    messageSize: '16px',
    iconColor: '#FFFFFF',
    theme: 'dark',
    messageLineHeight: '24px',
    iconColor: '#FFFFFF',
    });
}

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionClass: 'caption-style',
    close: true,
    closeText: '×',
    fadeSpeed: 250,
    animationSpeed: 250,
},);
const loader = document.querySelector('.loader');

form.addEventListener('submit', onSearch);

function onSearch(e) { 
    e.preventDefault();
    gallery.innerHTML = '';
    loader.classList.add('loader-show');
    const searchQuery = input.value;
    fetchImages(searchQuery);
    form.reset();
}

function fetchImages(searchQuery) { 
    const API_KEY = '38212376-ffcb529addc704f756c0c7d48';
    const BASE_URL = 'https://pixabay.com/api/';
    const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.hits.length === 0) {
                showNotificationError();
                loader.classList.remove('loader-show');
            } else {
                const markup = createGalleryMarkup(data.hits);
                gallery.insertAdjacentHTML('beforeend', markup);
                loader.classList.remove('loader-show'); 
                lightbox.refresh();
            }
        })
        .catch(error => console.log(error));
}

function createGalleryMarkup(images) { 
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads, user }) => {
        return `
        <li class="photo-card">
            <a href="${largeImageURL}" class="gallery__item">
                <img src="${webformatURL}" alt="Author: ${user}, tags: ${tags}" class="gallery__image" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${likes}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${views}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${comments}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${downloads}</span>
                </p>
            </div>
        </li>
        `;
    }).join('');
}