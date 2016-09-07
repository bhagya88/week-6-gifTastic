$(document).ready(function(){
	var topics = ["soccer","football","gymnastics"];

	function renderButtons(){
		$("#choices").empty();
		topics.forEach(function(ele){
			var btn = $("<button>");
			btn.addClass("col-lg-1");

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
			var video;
			$('#videos').empty();
			results.forEach(function(ele){
				video =$('<video loop>');
				video.addClass("col-lg-3");
				video.addClass("video-clip");
				video.addClass("embed-responsive");
				video.attr("src",ele.images.fixed_height.mp4);
				$('#videos').append(video);

			});	
		});
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

	$('#videos').on('click','*',function(){

		if (this.paused) {
         this.play();
         
       } else {
          this.pause();
          
       }
		
		
	});

});