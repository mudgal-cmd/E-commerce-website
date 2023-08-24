import { estimatedTax } from "./utils/pricing";
import { calculateCartPrice } from "./checkout";

export function orderTotal(){

  let orderNetTotal;

  let orderGrossTotal = calculateCartPrice + calculateCartPrice*estimatedTax;
  console.log(orderGrossTotal);
}