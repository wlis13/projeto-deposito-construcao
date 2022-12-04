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
      price: `R$ 211,99`,
      image: './images/carrinho-de-mão.jpeg',
    },
    {
      name: 'colher de pedreiro',
      price: 'R$ 19,99',
      image: './images/colher-de-pedreiro.jpeg',
    },
    {
      name: 'furadeira Boch',
      price: 'R$ 239,99',
      image: './images/furadeira.jpeg',
    },
    {
      name: 'trenna Vonder',
      price: 'R$ 23,99',
      image: './images/trenna.jpeg',
    },
    {
      name: 'martelo Ferreiro',
      price: 'R$ 29,99',
      image: './images/imagen-de-martelo.jpeg',
    },
    {
      name: 'piso-incenor-66180 58x58',
      price: 'R$ 69,99',
      image: './images/piso-incenor-66180 58x58-1.jpg',
    },
    {
      name: 'piso-pointer-cantabria-gris 45x90',
      price: 'R$ 121,99',
      image: './images/piso-pointer-cantabria-gris 45x90-1.jpg',
    },
    {
      name: 'porcelanato-bianco-lux 90x90',
      price: 'R$ 111,98',
      image: './images/porcelanato-biancogres -lux-90x90-1.jpg',
    },
    {
      name: 'porcelanato-branco-PO 90x90',
      price: 'R$ 29,99',
      image: './images/porcelanato-branco-PO.jpeg',
    },
    {
      name: 'porcelanato-PO-lux 120x60',
      price: 'R$ 125,98',
      image: './images/porcelanato.jpeg',
    },
    {
      name: 'Ferragen 5/16',
      price: 'R$ 24,99',
      image: './images/ferragen01.jpeg',
    },
    {
      name: 'ferragens montada 5/16',
      price: 'R$ 45,99',
      image: './images/ferragen02.jpeg',
    },
  ];

const section = document.querySelector('.section');

for (let index = 0; index < products.length; index += 1) {

  const itensProducts = document.createElement('div');
  itensProducts.classList.add('iten-product');
  itensProducts.classList.add(`id${ index }`)

  const buttons = document.createElement('button');
  buttons.classList.add('button-click')
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
const lengthCart = document.querySelector('.length-cart');
lengthCart.innerHTML = '0';

const arr = [];
const buttonClick = document.querySelectorAll('.button-click');
for (let index = 0; index < buttonClick.length; index += 1) {
  buttonClick[index].addEventListener('click', () => {
    const nameProduct = document.querySelectorAll
      ('.button-click')[index].parentNode.childNodes[0].innerHTML;
    const imageProduct = document.querySelectorAll
      ('.button-click')[index].parentNode.childNodes[1].src;
    const priceProduct = document.querySelectorAll
      ('.button-click')[index].parentNode.childNodes[2].innerHTML;
    let objectProducts = {
      nameProduct,
      imageProduct,
      priceProduct,
    };
    arr.push({ objectProducts })
    localStorage.setItem("user-produ", JSON.stringify(arr));

    if (arr.length > 0) {
      lengthCart.innerHTML = arr.length;
    }
  })

}

// document.querySelectorAll('.button-click')[0].parentNode.childNodes[0];
// [0] = p [1] = img, [2] = h4, [3] = button