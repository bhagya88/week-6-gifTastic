$(document).ready(function(){
	var topics = ["soccer","football","gymnastics"];

	function renderButtons(){
		$("#choices").empty();
		topics.forEach(function(ele){
			var btn = $("<button>");
			btn.addClass("col-lg-1 btn btn-default");

			btn.html(ele);
			$("#choices").append(btn);
		});
	}

	function fetchImages(){
		console.log($(this).text());
		var apiKey="dc6zaTOxFJmzC";
		var queryURL ="http://api.giphy.com/v1/gifs/search?q="+$(this).text()+"&limit=10&api_key="+apiKey;
		console.log(queryURL);
		$.ajax({
			url:queryURL,
			method:"GET"

		}).done(function(response){
			results = response.data;
			console.log(results);
			var image;
			$('#images').empty();
			$('#imgMsg').removeClass("hidden");
			results.forEach(function(ele){
				image =$('<img>');
				image.addClass("col-lg-3");
				image.addClass("col-sm-6");
				image.addClass("col-xs-12");
				image.addClass("gify-image");
				image.addClass("img-rounded");
				image.attr("src",ele.images.fixed_height_still.url);
				image.attr("data-stillsrc",ele.images.fixed_height_still.url);
				image.attr("data-animatesrc",ele.images.fixed_height.url);
				image.attr("data-isstill",true);
				$('#images').append(image);

			});	
		});
	}


	function toggleImage(event){
		console.log($(this));
		event.preventDefault();
		if ($(this).data().isstill) {
         $(this).attr("src",$(this).data().animatesrc);
         $(this).data().isstill=false;
         
       } else {
         $(this).attr("src",$(this).data().stillsrc);
         $(this).data().isstill=true;
          
       }
	}


	renderButtons();
	$('#choices').on('click','button',fetchImages);
	$('#btnAdd').click(function(event){
		event.preventDefault()
		if($('#userChoice').val()){
			topics.push($('#userChoice').val());
			renderButtons();
			$('#userChoice').val("");
		}
		
	});

	$('#images').on('click','*',toggleImage);

});