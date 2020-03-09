var dataContainer = document.getElementById("hw-info");

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET', 'http://jsonplaceholder.typicode.com/posts');
		ourRequest.onload = function() {
			var ourData = JSON.parse(ourRequest.responseText);
			console.log(ourData);
};
ourRequest.send();

});


var btn = document.getElementById("btn1");
btn.addEventListener("click", function() {

	var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET', 'http://jsonplaceholder.typicode.com/posts');
		ourRequest.onload = function() {
			var ourData = JSON.parse(ourRequest.responseText);
			console.log(ourData[9]);
};
ourRequest.send();

});




