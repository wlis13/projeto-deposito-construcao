const userProducts = document.querySelector('.user-products');
const getProductsUser = JSON.parse(localStorage.getItem('user-produ'));

for (let index = 0; index < getProductsUser.length; index += 1) {
  const divCart = document.createElement('div');
  divCart.classList.add('div-cart');
  const named = document.createElement('p');
  named.innerText = getProductsUser[index].objectProducts.nameProduct;
  const imaged = document.createElement('img');
  imaged.src = getProductsUser[index].objectProducts.imageProduct;
  const priced = document.createElement('h4');
  priced.innerText = getProductsUser[index].objectProducts.priceProduct;
  const buttonExcluir = document.createElement('button');
  buttonExcluir.innerText = 'Excluir';
  buttonExcluir.classList.add('button-excluir');
  divCart.appendChild(named);
  divCart.appendChild(imaged);
  divCart.appendChild(priced);
  divCart.appendChild(buttonExcluir);
  userProducts.appendChild(divCart);
}
// getProductsUser[index].objectProducts.nameProduct