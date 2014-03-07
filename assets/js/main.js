$(document).ready(function(){
  var $btnGo = $('.bttn-success');
  var $btnStop = $('.bttn-danger');
  var $btnRestart = $('.bttn-warning');

  $btnGo.click(function(){
    start();
    difficulty();
    $(this).addClass('bounceOutLeft').hide();
    setTimeout(function(){$btnStop.addClass('bounceInRight').show()}, 1000);
  });

  $btnStop.click(function(){
    $btnRestart.removeClass('bounceOutLeft');
    shouldWeparty();
    $btnGo.removeClass('bounceOutLeft');
    $('#time').addClass('bounceIn').show();
    $(this).addClass('bounceOutLeft').hide();
    $btnRestart.addClass('bounceInRight').show();
    highscore();
  });

  $btnRestart.click(function(){
    $('.celebrate').removeClass('lightSpeedIn').hide();
    $('#time').removeClass('bounceIn');
    $btnStop.removeClass('bounceOutLeft');
    $btnStop.addClass('bounceInRight').show();
    $(this).addClass('bounceOutLeft').hide();
    start();
    difficulty();
  });

  show();
});

function shouldWeparty() {
  ms = parseFloat($('#time').text());
  console.log(ms);
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
  console.log(hs);
}