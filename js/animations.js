$(document).ready(function(){

	var cCount = 140;

	//Hide the tweet button and char count
	$('#tweet-controls').hide();

	//When the user clicks on the text area it should double in size
	//and display the tweet controls
	$('.tweet-compose').on('click', function(){
		//double the size
		$(this).css('height', '5em');
		//show the controls
		$('#tweet-controls').show();
		//change the char count to match the charCount variable
		$('#char-count').html(cCount);
	})

	//As the user types in the box, the char count decreases. If it
	//gets below 130 the text should turn red. If it gets below 0
	//then the tweet button should be disabled.
	$('.tweet-compose').on('keydown', function(){
		cCount--;
		$('#char-count').html(cCount);
		//if cCount is below 130 then turn the text red
		
	})

})