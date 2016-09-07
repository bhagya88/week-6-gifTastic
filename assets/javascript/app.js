$(document).ready(function(){
	var topics = ["cat","dog","pig"];

	topics.forEach(function(ele){
		var btn = $("<button>");
		btn.addClass("col-lg-1");

		btn.html(ele);
		$("#choices").append(btn);
	});

	function fetchImages(){
		console.log($(this).text());

		var queryURL ="http://api.giphy.com/v1/gifs/search?q="+$(this).text()+"&limit=10&api_key=dc6zaTOxFJmzC";
		console.log(queryURL);
		$.ajax({
			url:queryURL,
			method:"GET"

		}).done(function(response){
			results = response.data;
			console.log(results);
		});

	}

	$('#choices').on('click','button',fetchImages);

});