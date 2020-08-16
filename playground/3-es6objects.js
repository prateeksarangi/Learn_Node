// Object property shorthand

const name = 'Prateek';
const age = 21;

const user = {
  name,
  age,
  location: 'Bargarh'
};

console.log(user);

const product = {
  label: 'My Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

const { label, stock, price } = product;
console.log(label);
console.log(stock);
console.log(price);
