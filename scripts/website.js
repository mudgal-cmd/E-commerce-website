import {cart} from './cart.js';

let productsHTML = '';
products.forEach((product)=>{
  // console.log(product.image);
  const html = `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      ${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class = "js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class='added-to-cart js-added-msg-${product.id}'>
      <img src="images/icons/checked.png" class="checkmark-icon">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = ${product.id}>
      Add to Cart
    </button>
  </div>`;

  productsHTML+=html;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

const addToCartButton = document.querySelectorAll('.js-add-to-cart');

let cartQuantity=0;
let cartItem = [];
let addedToCartMsgElement;
let timeoutIntervalId;
addToCartButton.forEach((button) => {

  button.addEventListener('click', ()=> {

    const productId = button.dataset.productId;

    addedToCartMsgElement = document.querySelector(`.js-added-msg-${productId}`);

    let quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

    console.log(quantitySelector);
    console.log(quantitySelector.value);

    addedToCartMsgElement.classList.add('js-visible-added-to-cart-msg');

    clearInterval(timeoutIntervalId);

    timeoutIntervalId = setTimeout(()=>{
      addedToCartMsgElement.classList.remove('js-visible-added-to-cart-msg');
    }, 2000);

    

    let itemQuantity = Number(quantitySelector.value);

    cartQuantity+= itemQuantity;

    document.querySelector('.js-cart-quantity').textContent = cartQuantity;

    let matchingItem;

    cart.forEach((item)=>{
      if(productId === item.id){
        matchingItem = item;
      }
    });

    let productData ;

    products.forEach((product)=>{
      if(product.id === productId){
        productData = product;
      }

    });

    if(matchingItem){
      matchingItem.quantity+=itemQuantity;
    }
    else{
      cart.push({
        ...productData,
        quantity:itemQuantity
      });
      
    }
    
    console.log(cart);

    localStorage.setItem('Cart', JSON.stringify(cart));

  });
});

let intervalId;

function addToCartInterval(){
  clearInterval(intervalId);

  intervalId = setInterval(()=>{
    addedToCartMsgElement.classList.remove('js-visible-added-to-cart-msg');
  }, 2000);

}

