import { products, endpoints } from '../util/data.js';

const time = 2000;
let imageIndex = 0;
const images = document.querySelectorAll('.show-image img');
const max = images.length;

const nextImage = () => {
  images[imageIndex].classList.remove('show');

  imageIndex += 1;

  if (imageIndex >= max) {
    imageIndex = 0;
  }

  images[imageIndex].classList.add('show');
};

const start = () => {
  setInterval(() => {
    nextImage();
  }, time);
};

window.addEventListener('load', start);

const section = document.querySelector('.section');

for (let index = 0; index < products.length; index += 1) {
  const itensProducts = document.createElement('div');
  itensProducts.classList.add('iten-product');
  itensProducts.classList.add(`id${ index }`);

  const buttons = document.createElement('button');
  buttons.classList.add('button-click');
  buttons.innerText = 'comprar';

  const id = document.createElement('p');
  id.innerText = index;
  id.style.display = 'none';

  const titles = document.createElement('p');
  titles.innerText = products[index].name;

  const images = document.createElement('img');
  images.src = products[index].image;
  images.alt = `producti n°${ index }`;

  const prices = document.createElement('h4');
  prices.innerText = products[index].price;

  itensProducts.appendChild(id);
  itensProducts.appendChild(titles);
  itensProducts.appendChild(images);
  itensProducts.appendChild(prices);
  itensProducts.appendChild(buttons);
  section.appendChild(itensProducts);
}

const lengthCart = document.querySelector('.length-cart');
lengthCart.innerHTML = '0';

const arr = JSON.parse(localStorage.getItem('user-produ')) || [];
arr === undefined ? lengthCart.innerHTML = '0' : lengthCart.innerText = arr.length;

const buttonClick = document.querySelectorAll('.button-click');
for (let index = 0; index < buttonClick.length; index += 1) {
  buttonClick[index].addEventListener('click', () => {
    const idProducts = document
      .querySelectorAll('.section')[0].childNodes[index].children[0].innerHTML;
    const nameProduct = document
      .querySelectorAll('.section')[0].childNodes[index].children[1].innerHTML;
    const imageProduct = document
      .querySelectorAll('.section')[0].childNodes[index].children[2].src;
    const priceProduct = document
      .querySelectorAll('.section')[0].childNodes[index].children[3].innerHTML;
    const objectProducts = {
      idProducts,
      nameProduct,
      imageProduct,
      priceProduct,
    };
    arr.push({ objectProducts });
    localStorage.setItem('user-produ', JSON.stringify(arr));

    lengthCart.innerText = arr.length;
  });
}

const logoSearch = document.querySelector('.logo-search');
const inputSearch = document.querySelector('.input-search');
const testSearch = document.querySelector('.test-search');

logoSearch.addEventListener('click', () => {
  for (let index = 0; index < endpoints.length; index += 1) {
    if (endpoints[index].includes(inputSearch.value)) {
      logoSearch.href = endpoints[index];
    }
  }

});

// document.querySelectorAll('.button-click')[0].parentNode.childNodes[0];
// [0] = p [1] = img, [2] = h4, [3] = button