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
        $('.celebrate').text('Close! Within 1 second!').addClass('lightSpeedIn').show();
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
