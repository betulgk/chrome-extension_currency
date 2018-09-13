
function myFunction() {
    myVar = setInterval(todo, 3000);
}

function todo(){

	let url = 'https://www.doviz.com/api/v1/currencies/all/latest';

}

fetch(url)
.then(res => res.json())
.then((result) => {

	document.getElementById("currency_name").innerHTML += result[0]['code'];
	document.getElementById("selling").innerHTML += result[0]['selling'];
	document.getElementById("buying").innerHTML += result[0]['buying'];
})