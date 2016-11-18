$(document).ready(function(){
	// set default topics
	var topics = ["soccer","football","gymnastics"];

	// renders buttons
	function renderButtons(){
		$("#choices").empty();
		topics.forEach(function(ele){
			var btn = $("<button>");
			btn.addClass("col-lg-1 btn btn-default");

			btn.html(ele);
			$("#choices").append(btn);
		});
	}

	// makes api call to giphy to get images related to text on the button
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
			var figure;
			var figCaption;
			var image;

			$('#images').empty();
			$('#imgMsg').removeClass("hidden");

			// shows images on the page
			results.forEach(function(ele){
				figure = $('<figure>');
				figCaption=$('<figcaption class="row text-center">');
				image =$('<img class="row">');

				figure.addClass("col-lg-3");
				figure.addClass("col-sm-4");
				figure.addClass("col-xs-6");
				figure.addClass("image-box")
				image.addClass("gify-image");
				image.addClass("img-rounded");
				image.attr("src",ele.images.fixed_height_still.url);
				image.attr("data-stillsrc",ele.images.fixed_height_still.url);
				image.attr("data-animatesrc",ele.images.fixed_height.url);
				image.attr("data-isstill",true);

				figCaption.html("Rating: "+ele.rating);
				figure.append(figCaption);
				figure.append(image);
				$('#images').append(figure);

			});	
		});
	}


	// toggles between image or animated clip
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

	// lets user add a button of his choice
	function addGame(event){
		event.preventDefault();
		var userChoice =$('#userChoice').val().trim();
		if(userChoice && topics.indexOf(userChoice) === -1){
			topics.push($('#userChoice').val().trim());
			renderButtons();
			$('#userChoice').val("");
		}
		
	}

	// program execution starts here
	renderButtons();

	// handles user interaction 
	$('#choices').on('click','button',fetchImages);
	$('#btnAdd').click(addGame);
	$('#images').on('click','*',toggleImage);

});