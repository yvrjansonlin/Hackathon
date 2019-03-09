// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $.get('/localchat/getall', function(data) {
    	console.log(data)

    	data.forEach((msg) => {

    		var mainchat = msg['mainchat']
    		var user_id = msg['user_id']
    		var timestamp = msg['timestap']
			var 

			$('#chats').append(`${timestamp}:${mainchat}`) 
    	});

    	$('.chat-time').append(data['timestap']);
    });
});
