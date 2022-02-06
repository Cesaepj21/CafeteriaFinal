
const axios = require('axios');
/*  Listo 
function ProductsCollection() {
  // console.log("Products Collection");
  axios.get('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/getProducts')
  .then(response => {
    console.log(response.data);
    // console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  
}
console.log(ProductsCollection());
*/

async function CreateNewProduct() {
  // console.log("Create a New Product");
  const res = await axios({
    method: 'put',
    url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/createProduct',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {  
      name: "cafe",  
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.JPG',
      price: 300
  }
});
  console.log(res);
    
}
console.log(CreateNewProduct());















































// const GetListOfProducts = require('GetListOfProducts');

// GetListOfProducts('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/getProducts', function (error, response, body) {
//   console.log('Status:', response.statusCode);
//   console.log('Headers:', JSON.stringify(response.headers));
//   console.log('Response:', body);
// }); 

// console.log(GetListOfProducts);


/* var CreateNewProduct = require('Crear Nuevo Producto');

CreateNewProduct({
  method: 'PUT',
  url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/createProduct',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  \"name\": \"cafe\",  \"image\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.JPG\",  \"price\": 300}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
}); */

/* var updateProduct = require('Actualizar Producto');

updateProduct({
  method: 'POST',
  url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/updateProduct',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  \"image\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.jpg\",  \"price\": 305,  \"id\": \"bb6a902d-bbcb-4c80-9db0-389fb759bf4c\",  \"name\": \"Café\"}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
}); */

/* var deleteProduct = require('Eliminar Producto');

deleteProduct({
  method: 'DELETE',
  url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/deleteProduct',
  headers: {
    'Content-Type': 'application/json'
  },
   body: "{ \"id\": \"bb6a902d-bbcb-4c80-9db0-389fb759bf4c\"}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
}); */


/* var CreateNewProduct = require('Crear Nuevo Producto');

CreateNewProduct({
  method: 'PUT',
  url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/createOrder',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  \"items\": [    {      \"id\": \"63dc592c-c1b7-4c7c-b85f-7bb64a0e63c5\",      \"qty\": 3    }  ],  \"user\": \"Danny Chaves\"}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
}); */

/* var GetListOfProducts = require('Tomar lista de Ordenes');

GetListOfProducts('https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/getOrders', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
}); */

/* var UpdateOrderStatud = require('Actualizar Orden de Status');

UpdateOrderStatud({
  method: 'POST',
  url: 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/orders/updateOrder',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  \"id\": \"876da453-204f-40a5-b0b2-936a51a74aec\",  \"state\": \"complete\"}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
}); */