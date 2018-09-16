$(document).ready(function() {
  console.log("I'm ready.")


  const synth = window.speechSynthesis;


  const speak = text => {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    let utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
  };


  setTimeout(function() {
    $('#line1').html("- Hello! -");
  }, 1000);

  setTimeout(function() {
    $('#line2').html("- Let's play a game. -");
  }, 2000);

  setTimeout(function() {
    $('#line1').html("");
    $('#line2').html("");
  }, 3000);
  setTimeout(function() {
    $('#line1').html("- Guess! -");
  }, 4000);
  setTimeout(function() {
    $('#line2').html("- Am I a bot or real human? -");
  }, 5000);
  setTimeout(function() {
    $('#line1').html("");
    $('#line2').html("");
  }, 6000);
  setTimeout(function() {
    $("#answer1").css("visibility", "visible");
    $("#answer2").css("visibility", "visible");
  }, 7000);


  $('#answer1').on('click', function() {
    console.log("answer1");
    $("#gif").attr("src", "speaking.gif");
    setTimeout(function() {
      speak("Well, I never thought of pretending to be human.");
    }, 1000);
  });

  $('#answer2').on('click', function() {
    console.log("answer2");
    $("#gif").attr("src", "speaking.gif");
    $('body').append('<embed src="answer2.m4a" autostart="true" hidden="true" loop="false">');
  });

});
