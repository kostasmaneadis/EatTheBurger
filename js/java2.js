    function collision($myimg, $goal) {
      var x1 = $myimg.offset().left;
      var y1 = $myimg.offset().top;
      var h1 = $myimg.outerHeight(true);
      var w1 = $myimg.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $goal.offset().left;
      var y2 = $goal.offset().top;
      var h2 = $goal.outerHeight(true);
      var w2 = $goal.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }

window.setInterval(function() {
	if(collision($('#myimg'), $('#goal'))) {
	$("body").css("background-color","green");
	stop();
	putRandom();}	
	
}, 200);


