import { hammers } from '../util/data.js';
const martelos = hammers;

const containerSearch = document.querySelector('.container-search-input');

for (let index = 0; index < martelos.length; index += 1) {
  const containerProductsSearch = document.createElement('div');
  const name = document.createElement('p');
  name.innerHTML = martelos[index].type;
  const price = document.createElement('p');
  price.innerHTML = martelos[index].price;
  const weight = document.createElement('p');
  weight.innerHTML = martelos[index].weight;
  const image = document.createElement('img');
  image.src = martelos[index].image;

  containerProductsSearch.appendChild(name);
  containerProductsSearch.appendChild(price);
  containerProductsSearch.appendChild(weight);
  containerProductsSearch.appendChild(image);
  containerSearch.appendChild(containerProductsSearch);

}