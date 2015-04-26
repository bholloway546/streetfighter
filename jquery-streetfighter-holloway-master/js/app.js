$(document).ready(function(){
	
	/*playJumparound()*/
	doIntro()

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
			$('#delight-sound')[0].pause();
      		$('#delight-sound')[0].load();
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

function doIntro() {
  $('#jumparound-sound')[0].volume = 0.3;
  $('#jumparound-sound')[0].play();
  $('#jumparound-sound').on('keydown', function(e){
		if (e.keyCode == 87) {
			$('#jumparound-sound')[0].pause();
		};
	});
  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.instructions').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}

