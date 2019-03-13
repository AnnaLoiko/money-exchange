module.exports = function makeExchange(currency) {	
	if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if (currency <= 0) return {};
 
	let coins = {"H":50,"Q":25,"D":10,"N":5,"P":1};
	let exchange = {};

	for (let key in coins) {
		let result = Math.trunc( currency / coins[key] );
		if (result !== 0) {
			exchange[key] = result;
		}
		currency = currency - result*coins[key];
	}
	
	return exchange;
}
