<script type="text/javascript">



$(document).ready(function(){
console.log('here')
// BASE SPEED OF BOUNCING. WILL ADD RAINDOM 0-100 TO UNSYNC BOUNCING

var bouncespeed = 600;



$('span.cross').each(function () {

var currentPos = $(this).position();

$(this).data('originalLeft', currentPos.left);

$(this).data('originalTop', currentPos.top);

bounce(this);

});



// ACTUAL BOUNCER. CALLBACK OF ANIMATION IS THE BOUNCER ITSELF, TO LOOP ALL NIGHT LONG

function bounce(currentA) {

newx = Math.floor(10*Math.random()) + $(currentA).data('originalLeft');

newy = Math.floor(10*Math.random()) + $(currentA).data('originalTop');

newspeed = bouncespeed + Math.floor(100*Math.random());

$(currentA).animate({left: newx + 'px ', top: newy + 'px'}, newspeed, 'swing', function() { bounce(currentA);});

}

});



</script>
