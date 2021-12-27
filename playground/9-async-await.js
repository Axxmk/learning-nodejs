const add = (a = 0, b = 0) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (a < 0 || b < 0) {
				return reject('Number must be positive.');
			}

			resolve(a + b);
		}, 2000);
	})
}

const doWork = async () => {
	const sum = await add(9, -1);
	const sum2 = await add(sum, 90);
	const sum3 = await add(sum2, -50);
	return sum3;
}

doWork()
	.then(result => {
		console.log("result: ", result);
	})
	.catch(error => {
		console.log("error: ", error);
	})