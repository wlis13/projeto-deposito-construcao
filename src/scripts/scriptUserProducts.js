const userProducts = document.querySelector('.user-products');
const getProductsUser = JSON.parse(localStorage.getItem('user-produ'));

let total = 0;

for (let index = 0; index < getProductsUser.length; index += 1) {
  const divCart = document.createElement('div');
  divCart.classList.add('div-cart');
  const id = document.createElement('p');
  id.innerText = getProductsUser[index].objectProducts.idProducts;
  const named = document.createElement('p');
  named.innerText = getProductsUser[index].objectProducts.nameProduct;
  const imaged = document.createElement('img');
  imaged.src = getProductsUser[index].objectProducts.imageProduct;
  const priced = document.createElement('h4');
  priced.innerText = getProductsUser[index].objectProducts.priceProduct;
  const stringPrice = priced.innerHTML.split('');
  const test = stringPrice.splice(3)
  console.log(test);
  const buttonExcluir = document.createElement('button');
  buttonExcluir.innerText = 'Excluir';
  buttonExcluir.classList.add('button-excluir');
  divCart.appendChild(id);
  divCart.appendChild(named);
  divCart.appendChild(imaged);
  divCart.appendChild(priced);
  divCart.appendChild(buttonExcluir);
  userProducts.appendChild(divCart);
}

const buttonExcluirProduct = document.querySelectorAll('.button-excluir');

for (let index = 0; index < buttonExcluirProduct.length; index += 1) {
  buttonExcluirProduct[index].addEventListener('click', () => {
    const getProductsStorad = JSON.parse(localStorage.getItem('user-produ'));
    const nameProductsStorad = document.querySelectorAll('.button-excluir')[index]
      .parentNode.childNodes[0].innerHTML;

    const remove = getProductsStorad.filter((iten) => {
      return iten.objectProducts.idProducts !== nameProductsStorad
    });

    localStorage.removeItem('user-produ');
    localStorage.setItem('user-produ', JSON.stringify(remove))
    location.reload();
  });
}
