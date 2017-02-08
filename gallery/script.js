	$(document).ready(function(){

		console.log('test!');
		var imageSource=[
		{
			image: 'images/vangogh1.jpg',
			artist: "Vincent Van Gogh",
			title:"Francis of Assisi"
	    },
	    {
	    	image: 'images/vangogh2.jpg',
	    	artist:"Vincent Van Gogh",
	    	title:"Theodore Roosevelt"
	    },
	    {
	    	image: 'images/vangogh3.jpg',
	    	artist:"Vincent Van Gogh",
	    	title:"Confucius"
	    },
	    {
	    	image: 'images/vangogh4.jpg',
	    	artist:"Vincent Van Gogh",
	    	title:"Thomas A. Edison"
	    },
	    {
	    	image: 'images/vangogh5.jpg',
	    	artist:"Vincent Van Gogh",
	    	title:"Confucius"
	    }
	];

	$('h2').addClass('animated bounceInDown');
	$('a').addClass('animated bounceInUp');
		

		$('#imageButton').click(function(evt){
			//define the containers of the info we target
			var image = $('#imageTitle').text();
			var imageArtist = $('#imageArtist').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to an image and setting a limit
			var sourceLength = imageSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new image
			for(i=0;i<=sourceLength;i+=1){
			var newImage = imageSource[randomNumber].image;
			var newImageArtist = imageSource[randomNumber].artist;
			var newImageTitle = imageSource[randomNumber].title;
			console.log(newImage,newImageArtist, newImageTitle);
      var timeAnimation = 500;
      var imageContainer = $('#imageContainer');
      var imageFrame = $('#imageFrame');
      //fade out animation with callback
      imageContainer.fadeOut(timeAnimation, function(){
      	imageFrame.html('');
        imageContainer.html('');
        imageFrame.append('<img src=' + newImage + ' width=800 height=800' + ' >');
				imageContainer.append(
					//image title
					'<p>'+ 'Title: ' + newImageTitle+'</p>' + 
					//image artist
					'<p>'+ 'Artist: ' + newImageArtist+'</p>'

					); 
        
        //fadein animation.
        imageContainer.fadeIn(timeAnimation);
        imageFrame.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end imageButton function
		
		
});//end document ready

