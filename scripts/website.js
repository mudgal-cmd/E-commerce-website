console.log('Hello');

// const products = [{
//   product_image : 'images/products/athletic-cotton-socks-6-pairs.jpg',
//   product_name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
//   product_rating : {
//     stars : 4.5,
//     count : 87
//   },
//   // Since JS has problem working with float, so saving the product price in cents, the price below actually is $10.90
//   product_priceCents : 1090 
// },
// {
//   product_image : 'images/products/intermediate-composite-basketball.jpg',
//   product_name: 'Intermediate Size Basketball',
//   product_rating: {
//     stars : 0.4,
//     count : 127
//   },
//   product_priceCents : 2095
// },
// {
//   product_image : 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
//   product_name : 'Adults Plain Cotton T-Shirt - 2 Pack',
//   product_rating: {
//     stars : 4.5,
//     count : 56
//   },
//   product_priceCents : 799
// },
// {
//   product_image : 'images/products/black-2-slot-toaster.jpg',
//   product_name : '2 Slot Toster - Black',
//   product_rating : {
//     stars : 0.5,
//     count : 2197
//   },
//   product_priceCents : 1899
// }];

// console.log(products);
let productsHTML = '';
products.forEach((product)=>{
  console.log(product.image);
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
      <select>
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

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary">
      Add to Cart
    </button>
  </div>`;

  // console.log(html);
  productsHTML+=html;
});

console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;