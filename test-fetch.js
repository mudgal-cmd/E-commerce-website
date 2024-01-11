// const fetch = require('node-fetch');


// fetch('https://fakestoreapi.com/products')
//   .then(res => res.json())
//   .then(op => console.log(op));

// const http = require('http');

// const options = {
//   hostname: 'https://fakestoreapi.com',
//   method: 'GET',
//   path: '/products' 
// };
// let data='';
// let request = http.request((options, res)=>{
//   res.writeHead('data', (chunk)=>{
//     data+=chunk;
//   });
//   res.on('end', ()=>{
//     console.log(data);
//   });
// });
// request.end();

const axios = require('axios');

axios.get('https://fakestoreapi.com/products')
.then((res)=> console.log(res.data));



