$(document).ready(function(){
	
	playJumparound()

	$('.ryu').on('mouseenter',function(){
		$('.ryu-still').hide()
		$('.ryu-ready').show()
	});
	$('.ryu').on('mouseleave',function(){
		$('.ryu-still').show()
		$('.ryu-ready').hide()
	});
	$('.ryu').on('mousedown',function(){
		playHadouken()
		$('.ryu-ready').hide()
		$('.ryu-throwing').show()
		$('.hadouken').finish().show().animate(
			{'left':'1020px'},
			750,
			function(){
				$('.hadouken').hide()
				$('.hadouken').css('left','520px');
			}
			);
	});
	$('.ryu').on('mouseup',function(){
		$('.ryu-ready').show()
		$('.ryu-throwing').hide()
	});

	$(document).on('keydown',function(e) {
    if (e.keyCode == 88) {
      playDelight()
      $('.ryu-still').hide()
      $('.ryu-cool').show() 
  }
}) .on('keyup', function(e){
		if (e.keyCode == 88) {
			/*$('#cool')[0].pause();
      		$('#cool')[0].load();*/
			$('.ryu-still').show()
			$('.ryu-cool').hide()
		}
		});
});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}

function playDelight(){
	$('#delight-sound')[0].volume = 0.5;
	$('#delight-sound')[0].load();
  	$('#delight-sound')[0].play();
}

function playJumparound(){
	$('#jumparound-sound')[0].volume = 0.5;
	$('#jumparound-sound')[0].load();
  	$('#jumparound-sound')[0].play();
}