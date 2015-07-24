$(document).ready(function(){

	var cCount = 140;
	var tweetContent;

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
	$('.tweet-compose').on('keyup', function(){
		cCount--;
		$('#char-count').html(cCount);
		//if cCount is below 130 then turn the text red
		if(cCount <= 30){
			$('#char-count').css('color', 'red');
		}
		//If count is below 0 then disable the tweet button
		if(cCount < 0){
			$('#tweet-submit').prop('disabled', true);
		}
		else{
			$('#tweet-submit').prop('diasbled', false);
		}
	})

	//When the user hits the Tweet button, a new tweet is created
	$('#tweet-submit').click(function(){
		//take the tweet and assign it to the tweetContent variable
		tweetContent = $('textarea.tweet-compose').val();
		//Create the new tweet
		function newTweet(){
			var tTweet = "<div class='tweet'><div class='content'><img class='avatar' src='img/alagoon.jpg' /><strong class='fullname'>NAME</strong><p class='tweet-text'></p></div></div>";
			$('#stream').prepend(tTweet);
		}
		newTweet();
		//Reset the tweet controls and content box
		$('#tweet-controls').hide();
		$('.tweet-compose').css('height', '2.5em');
	})
})





