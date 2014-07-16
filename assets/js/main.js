$(document).ready(function(){
  var $btnStop = $('.bttn-danger');
  var $btnRestart = $('.bttn-success');

  $btnStop.click(function(){
    shouldWeparty();
    $('#time').addClass('bounceIn').show()
    highscore();
  });

  $btnRestart.click(function(){
    $('#time').removeClass('bounceIn').show()
    start();
    difficulty();
  });

  cookieGrab();
  show();
});

function shouldWeparty() {
  ms = parseFloat($('#time').text());
  if ( ms === 5000 ) {
    console.log('yes');
    $('.celebrate').addClass('lightSpeedIn').show();
  } else {
    if (ms > 4000 && ms < 5000) {
      var dway = 5000 % ms;
      $('.celebrate').text('Close! Within ' + dway + ' ms!').addClass('lightSpeedIn').show();
    }
    if (ms > 3000 && ms < 4000 || ms > 6000 && ms < 7000 ) {
      $('.celebrate').text('Close! Within 2 seconds!').addClass('lightSpeedIn').show();
    }
    if (ms > 5000) {
      var dway = ms % 5000;
      $('.celebrate').text('Close! You went over ' + dway + ' ms!').addClass('lightSpeedIn').show();
    }
  }
}

function difficulty() {
  if ($('#difficulty').val() === "Easy") {
    $("#time").show();
  } else {
    $('#time').fadeOut(2234);
  }
}

function highscore() {
  var hs = 5000 % ms;
  console.log(hs, ms);
  if (hs < distance) {
    $.cookie('score', ms);
    $.cookie('distance_from_5', hs);
  }
}

function cookieGrab() {
  $.cookie();

  score = $.cookie('score');
  distance = $.cookie('distance_from_5', { path: '/' });

  if (score === undefined) {
    console.log('No cookie');
    $('.highscore').hide();
  } else {
    $('.highscore').fadeIn();
    $('.score').append(distance + 'ms');
    console.log(score);
    console.log(distance);
  }
}