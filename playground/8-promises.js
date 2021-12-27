const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
		}, 2000);
	})
}

//* Not ideal, complex, and catch was duplicated.
// add(4, 5)
// 	.then((sum) => {
// 		console.log(sum);

// 		add(sum, 8)
// 			.then((sum2) => {
// 				console.log(sum2);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			})
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})

add(2, 4)
	.then(sum => {
		console.log(sum);
		return add(sum, 6)    // Promise chaining by return a promise.
	})
	.then(sum2 => {
		console.log(sum2);
	})
	.catch(error => console.log(error))