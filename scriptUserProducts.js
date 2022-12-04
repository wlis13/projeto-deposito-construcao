const getProductsUser = JSON.parse(localStorage.getItem("user-produ"));
const totalValue = getProductsUser;

const userProducts = document.querySelector('.user-products');

for (let index = 0; index < totalValue.length; index += 1) {
  const named = document.createElement('p');
  named.innerText = totalValue[index].objectProducts.nameProduct;
  named.classList.add('named-product-user');
  userProducts.appendChild(named)

}


//getProductsUser[index].objectProducts.nameProduct