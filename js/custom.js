var url = setInterval(func, 100)																																																																																																												;

function func(){
	let url = 'https://www.doviz.com/api/v1/currencies/all/latest';
	fetch(url)
	.then(res => res.json())
	.then((result) => {
		document.getElementById("selling-usd").innerHTML = result[0]['selling']; /*DOLLOR SELLING*/
		document.getElementById("buying-usd").innerHTML = result[0]['buying'];	 /*DOLLOR BUYING*/
		document.getElementById("selling-euro").innerHTML = result[1]['selling']; /*EURO SELLING*/
		document.getElementById("buying-euro").innerHTML = result[1]['buying'];	 /*EURO BUYING*/

		var tl_value = $("#tl-input").val();
		var usd_value = $("#dollar-input").val();
		var euro_value = $("#euro-input").val();
	})
}																					

$(document).ready(function(){

    $("#dollar-input").keyup(function(){
    	       
        var tl_value = $("#tl-input").val();
		var usd_value = $("#dollar-input").val();
		var euro_value = $("#euro-input").val();

        if ( $("#dollar-input").val() !=  null ){		
			document.getElementById("tl-input").placeholder = usd_value*document.getElementById("selling-usd").innerHTML;
			document.getElementById("euro-input").placeholder = (usd_value*document.getElementById("selling-usd").innerHTML)/document.getElementById("selling-euro").innerHTML;																																																																																																																						
		}
    });

    $("#tl-input").keyup(function(){
    	       
        var tl_value = $("#tl-input").val();
		var usd_value = $("#dollar-input").val();
		var euro_value = $("#euro-input").val();

		if ( $("#tl-input").val() !=  null ){		
			document.getElementById("dollar-input").placeholder = tl_value/document.getElementById("selling-usd").innerHTML;
			document.getElementById("euro-input").placeholder = tl_value/document.getElementById("selling-euro").innerHTML;																																																																																																												
		}

    });

    $("#euro-input").keyup(function(){
    	       
        var tl_value = $("#tl-input").val();
		var usd_value = $("#dollar-input").val();
		var euro_value = $("#euro-input").val();
		console.log(usd_value);

		if ( $("#euro-input").val() !=  null ){		
			document.getElementById("dollar-input").placeholder = (euro_value*document.getElementById("selling-euro").innerHTML)/document.getElementById("selling-usd").innerHTML;
			document.getElementById("tl-input").placeholder =euro_value*document.getElementById("selling-euro").innerHTML;																																																																																																												
		}

    });
});