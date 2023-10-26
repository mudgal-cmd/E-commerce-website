import { cart, deleteFromCart, saveCartToStorage } from '../data/cart.js';
import { products } from '../data/products-data.js';
import { formatPrice } from './utils/pricing.js';
import { orderNetTotal } from './order-payments.js';
import { calculateCartQuantity } from '../data/cart.js';

let deliveryOption = 1;

cart.forEach((cartItem)=>{
  let matchingProduct;
  products.forEach((product)=>{
    if(product.id === cartItem.id)
      matchingProduct = product;
  });

  // 

  // console.log(matchingProduct);

  let orderSummaryElement = document.querySelector('.order-summary');
    let html = `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
              
    <div class="order-delivery-date">
      Delivery date: Tuesday, June 21
    </div>
  
    <div class="cart-item-details-grid">
      <img class="cart-item-image" src=${matchingProduct.image}>
  
      <div class="cart-item-details">
        <div class="cart-item-name">
          ${matchingProduct.name}
        </div>
        <div class="cart-item-price">
          $${formatPrice(matchingProduct.priceCents)}
        </div>
        <div class="cart-item-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="cart-item-quantity-update-link js-update-item" data-update-item-id = ${cartItem.id}>
            Update
          </span>
          <span class="cart-item-quantity-delete-link js-delete-item" data-delete-item = ${cartItem.id}>
            Delete
          </span>
        </div>
      </div>
      
  
      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option" data-delivery-item = "Dtype1">
          <input type="radio" checked class="delivery-option-input" name="delivery-option-${deliveryOption}">
          <div class="delivery-details">
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
  
        <div class="delivery-option" data-delivery-item = "Dtype2">
          <input type="radio" class="delivery-option-input js-delivery-option-input" name="delivery-option-${deliveryOption}">
          <div class="delivery-details">
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
          </div>
         
  
        <div class="delivery-option" data-delivery-item = "Dtype3">
          <input type="radio" class="delivery-option-input" name="delivery-option-${deliveryOption}">
          <div class="delivery-details">
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
          </div>
         
  
      </div>
    </div>
  </div>
    `;
    orderSummaryElement.innerHTML += html;
    deliveryOption+=1;
  });



export function calculateCartPrice(){

  console.log('Inside calculate price function');
  let matchingItem;

  let cartItemsPrice = 0;

  cart.forEach((cartItem)=>{

    products.forEach((product)=>{
      if(cartItem.id === product.id)
        matchingItem = product;
    })

    cartItemsPrice += matchingItem.priceCents*cartItem.quantity;

  });

  return cartItemsPrice;

}

//displaying order net total
function displayOrderNetTotal(){
  document.querySelector('.js-order-net-total').textContent = `$${formatPrice(calculateCartPrice())}`;
}

document.addEventListener('DOMContentLoaded', displayOrderNetTotal);

document.querySelectorAll('.js-delete-item').forEach((deleteLink) => {
  let deleteItemId;
  deleteLink.addEventListener('click', ()=>{

    //Using the data attribute to uniquely identify the selected item to be deleted.
    deleteItemId = deleteLink.dataset.deleteItem;

    deleteFromCart(deleteItemId);
    updateCheckoutHeaderQuantity();
    let cartItemTODelete = document.querySelector(`.js-cart-item-container-${deleteItemId}`);
    cartItemTODelete.remove();
    saveCartToStorage();
    displayOrderNetTotal();
  });
  
});

// updating the cart quantity in the checkout header

function updateCheckoutHeaderQuantity(){
  let checkoutHeaderQuantity = 0;

  checkoutHeaderQuantity = calculateCartQuantity();

  document.querySelector('.js-checkout-header-quantity').textContent = `${checkoutHeaderQuantity} items)`;

}

document.addEventListener('DOMContentLoaded', updateCheckoutHeaderQuantity);



// console.log(document.getElementsByClassName('delivery-option')[0].dataset);
let deliveryOptionList = document.getElementsByClassName('delivery-option-input');
// console.log(deliveryOptionList);
for(let i of deliveryOptionList){
  if(i.checked){
    // console.log(i.dataset);
    console.log(i.dataset);
  }
}

