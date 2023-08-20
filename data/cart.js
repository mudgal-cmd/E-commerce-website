import {products} from './products-data.js';

// console.log('I am a cart');

// export let cart = JSON.parse(localStorage.getItem('Cart')) || [];

export let cart = [{
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
      
      console.log(cart);
  }

// function deleteItemFromCart(){

//   const deleteElements = document.querySelectorAll('.js-delete-item');
//   let deleteElement;
//   deleteElements.forEach((button)=>{
//     deleteElement = button.dataset.cartItemId;
//   });

//   console.log(deleteElement);

// }
// deleteItemFromCart();

// console.log(document.querySelector('.js-delete-item'));

// const deleteElements = document.querySelectorAll('.js-delete-item');
// let matchingElement;
// deleteElements.forEach((deleteButton)=>{
//   // console.log(deleteButton.dataset);
//   deleteButton.addEventListener('click', ()=>{
//     console.log(deleteButton.dataset);
//     let deleteProductId = deleteButton.dataset.deleteItem;
//     let indexToDelete;
//     cart.forEach((item)=>{
//       if(item.id === deleteProductId){
//         indexToDelete = cart.indexOf(item);
//       }
//     });
//     cart.splice(indexToDelete,1);
//     console.log(cart);
//     localStorage.setItem('Cart', JSON.stringify(cart));
//   });
// });

export function deleteFromCart(deleteItemId){

  let indexOfDeletedItem;

  cart.forEach((cartItem)=>{
    if(deleteItemId === cartItem.id)
      indexOfDeletedItem = cart.indexOf(cartItem);
  });

  cart.splice(indexOfDeletedItem, 1);

}