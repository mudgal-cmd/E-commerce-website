import {products} from './products-data.js';

// console.log('I am a cart');

// export let cart = JSON.parse(localStorage.getItem('Cart')) || [];
export let cart = JSON.parse(localStorage.getItem('Cart')) || [{
  id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 1
},  
{
  id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity : 2
},
{
  id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
  quantity: 2
}];

  export function addToCart(productId){

    let matchingItem;
    let quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    let itemQuantity = Number(quantitySelector.value);
  
      cart.forEach((cartItem)=>{
        if(productId === cartItem.id){
          matchingItem = cartItem;
        }
      });

  
      if(matchingItem){
        matchingItem.quantity+=itemQuantity;
      }
      else{
        cart.push({
          // ...productData,
          id: productId,
          quantity:itemQuantity
        });
        
      }
      saveCartToStorage();
      console.log(cart);
  }

export function deleteFromCart(deleteItemId){

  let indexOfDeletedItem;

  cart.forEach((cartItem)=>{
    if(deleteItemId === cartItem.id)
      indexOfDeletedItem = cart.indexOf(cartItem);
  });

  cart.splice(indexOfDeletedItem, 1);
  

}

export function saveCartToStorage(){
  localStorage.setItem('Cart', JSON.stringify(cart));
}

export function calculateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartItem)=>{
    cartQuantity+=cartItem.quantity;
  });
  
  return cartQuantity;
}

export function updateQuantity(itemId, newQuantity){
  cart.forEach((cartItem)=>{
    if(itemId === cartItem.id){
      cartItem.quantity = newQuantity;
    }
  });
}

export function getItemQuantityById(itemId){
  let quantity;
  cart.forEach((cartItem)=>{
    if(cartItem.id === itemId){
      quantity = cartItem.quantity;
    }
  });
  return quantity;
}