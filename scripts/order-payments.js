import { calculateCartPrice } from "./checkout.js";
import { cart } from "../data/cart.js";
import { tax } from "./utils/pricing.js";

export function orderNetTotal(){

  let netAmount = calculateCartPrice();

  console.log(`Net Amount is ${netAmount}`);

  return 

}

document.querySelector('.js-place-order-btn').addEventListener('click', orderNetTotal);
