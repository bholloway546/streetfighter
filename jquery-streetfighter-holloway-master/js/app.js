$(document).ready(function(){

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
      /*playJazz();*/
      $('.ryu-still').hide();
      $('.ryu-cool').show();  
  }
}); /*.on('keyup',
	/*$('.ryu').on('keydown', function(e){
		if(e.keyCode == 88){
			playJazz()
			$('.ryu-ready').hide()
			$('.ryu-cool').show()
		}
	});*/
});

function playHadouken(){
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}

/*function playJazz(){
	$('#jazz-sound')[0].volume = 0.5;
	$('#jazz-sound')[0].load();
  	$('#jazz-sound')[0].play();
}*/