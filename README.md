# GifTastic

### Overview
The theme for this page is sports. It is a dynamic web page where the `GIPHY API` is used to fetch gifs of your choice. 

### Demo
[Click to watch the demo](https://calm-inlet-38692.herokuapp.com/)

### Technologies used
* HTML, CSS, Javascript
* JQuery
* Bootstrap
* GIPHY API

### Challenges faced
* HOW to animate the picture when user clicks on it?
* How to add dynamic buttons?

### Solutions found
* Console logging the object returned from GIPHY and searching for an animated picture on it and replacing the still picture with animated picrure worked.
* Select element and append functions of Jquery are used to add dynamic buttons.

### How it works

1. When the user loads the page, it shows buttons of various sports. These are default buttons.

3. When the user clicks on a button, the page grabs 10 static, non-animated gif images `from the GIPHY API` and places them on the page. 

4. When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it stop playing.

5. Above every gif, it also displays its rating (PG, G, so on). 
	* This data is provided by the GIPHY API.

6. The page also has user input box, when the user enters a sport of his choice, a `button is created for that sport dynamically`. The user can then click that button and get the gif images.


#### Developed by Bhagya