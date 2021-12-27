//* Object property shorthand

const name = 'Ann';
const userAge = 19;

const user = {
	name,
	age: userAge,
	location: 'Bangkok',
};

// console.log(user);

//* Object destructuring

const product = {
	label: 'Blue notebook',
	price: 3,
	stock: 205,
	salePrice: undefined,
	rating: 4.3,
};

const { label: productLabel, price, rating = 5 } = product;
console.log(productLabel, price, rating);

const transaction = (type, { label, stock = 0 } = {}) => {
	console.log(type, label, stock);
}

transaction('order', product);