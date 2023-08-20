import { cart } from '../data/cart.js';
import { products } from '../data/products-data.js';
import { formatPrice } from './utils/pricing.js';

let deliveryOption = 1;
cart.forEach((cartItem)=>{
  let matchingProduct;
  products.forEach((product)=>{
    if(product.id === cartItem.id)
      matchingProduct = product;
  });

  console.log(matchingProduct);

  let orderSummaryElement = document.querySelector('.order-summary');
    let html = `
    <div class="cart-item-container">
              
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
          <span class="cart-item-quantity-update-link">
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
        <div class="delivery-option">
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
  
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input" name="delivery-option-${deliveryOption}">
          <div class="delivery-details">
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
          </div>
         
  
        <div class="delivery-option">
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
    // console.log(orderSummaryElement);
    orderSummaryElement.innerHTML += html;
    deliveryOption+=1;
  });

// document.querySelector('.js-delete-item').addEventListener('click', ()=>{
//   console.log('Delete clicked');
// });
