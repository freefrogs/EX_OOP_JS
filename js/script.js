var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');

getJoke();		//calling function after page loading

button.addEventListener('click', function() {
	getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {			//listening for server responses
		var response = JSON.parse(xhr.response);		//translation from JSON to JS server response
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}

