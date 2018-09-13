var url = setInterval(func, 10);

function func(){
	let url = 'https://www.doviz.com/api/v1/currencies/all/latest';
	fetch(url)
	.then(res => res.json())
	.then((result) => {
		document.getElementById("selling-usd").innerHTML = result[0]['selling']; /*DOLLOR*/
		document.getElementById("buying-usd").innerHTML = result[0]['buying'];	 /*DOLLOR*/
		document.getElementById("selling-euro").innerHTML = result[1]['selling']; /*EURO*/
		document.getElementById("buying-euro").innerHTML = result[1]['buying'];	 /*EURO*/

	})
}
