// console.log('I am a cart');

export let cart = JSON.parse(localStorage.getItem('Cart')) || [];

console.log(cart);

let deliveryOption = 1;

cart.forEach((cartItem)=>{
  let orderSummaryElement = document.querySelector('.order-summary');
    let html = `
    <div class="cart-item-container">
              
    <div class="order-delivery-date">
      Delivery date: Tuesday, June 21
    </div>
  
    <div class="cart-item-details-grid">
      <img class="cart-item-image" src=${cartItem.image}>
  
      <div class="cart-item-details">
        <div class="cart-item-name">
          ${cartItem.name}
        </div>
        <div class="cart-item-price">
          $${(cartItem.priceCents/100).toFixed(2)}
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
    console.log(orderSummaryElement);
    orderSummaryElement.innerHTML += html;
    deliveryOption+=1;
  });


const deleteElements = document.querySelectorAll('.js-delete-item');
let matchingElement;
deleteElements.forEach((deleteButton)=>{
  // console.log(deleteButton.dataset);
  deleteButton.addEventListener('click', ()=>{
    console.log(deleteButton.dataset);
    let deleteProductId = deleteButton.dataset.deleteItem;
    let indexToDelete;
    cart.forEach((item)=>{
      if(item.id === deleteProductId){
        indexToDelete = cart.indexOf(item);
      }
    });
    cart.splice(indexToDelete,1);
    console.log(cart);
    localStorage.setItem('Cart', JSON.stringify(cart));
  });
});

