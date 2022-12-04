const getProductsUser = JSON.parse(localStorage.getItem("user-produ"));
const totalValue = getProductsUser;

const userProducts = document.querySelector('.user-products');

for (let index = 0; index < totalValue.length; index += 1) {
  const divCart = document.createElement('div');
  divCart.classList.add('div-cart');
  const named = document.createElement('p');
  named.innerText = totalValue[index].objectProducts.nameProduct;
  const imaged = document.createElement('img');
  imaged.src = totalValue[index].objectProducts.imageProduct;
  const priced = document.createElement('h4');
  priced.innerText = totalValue[index].objectProducts.priceProduct;
  divCart.appendChild(named)
  divCart.appendChild(imaged)
  divCart.appendChild(priced)
  userProducts.appendChild(divCart)

}


//getProductsUser[index].objectProducts.nameProduct