let time = 2000,
  imageIndex = 0,
  images = document.querySelectorAll('.show-image img'),
  max = images.length;


const nextImage = () => {
  images[imageIndex].classList.remove('show');

  imageIndex += 1;

  if (imageIndex >= max) {
    imageIndex = 0;
  };

  images[imageIndex].classList.add('show');
};

const start = () => {
  setInterval(() => {
    nextImage();
  }, time);
};

window.addEventListener('load', start);


const products =
  [
    {
      name: 'carrinho de mão',
      price: 211.99,
      image: './carrinho-de-mão.jpeg',
    },
    {
      name: 'colher de pedreiro',
      price: 19.99,
      image: './colher-de-pedreiro.jpeg',
    },
    {
      name: 'furadeira Boch',
      price: 239.99,
      image: './furadeira.jpeg',
    },
    {
      name: 'trenna Vonder',
      price: 23.99,
      image: './trenna.jpeg',
    },
    {
      name: 'martelo Ferreiro',
      price: 29.99,
      image: './imagen-de-martelo.jpeg',
    },
  ];

const section = document.querySelector('.section');

for (let index = 0; index < products.length; index += 1) {

  const itensProducts = document.createElement('div');
  itensProducts.classList.add('iten-product');

  const buttons = document.createElement('button');
  buttons.innerText = 'comprar'

  const titles = document.createElement('p');
  titles.innerText = products[index].name;

  const images = document.createElement('img');
  images.src = products[index].image;

  const prices = document.createElement('h4');
  prices.innerText = products[index].price;

  itensProducts.appendChild(titles);
  itensProducts.appendChild(images);
  itensProducts.appendChild(prices)
  itensProducts.appendChild(buttons);
  section.appendChild(itensProducts);
};