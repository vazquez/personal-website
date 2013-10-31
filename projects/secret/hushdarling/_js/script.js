$('#video').slideUp(0).delay(100).fadeIn(600);
$('#logo').slideUp(0).delay(100).fadeIn(600);
$('.message').slideUp(0).delay(600).fadeIn(600);

// Creating a counter variable
var i=0;

console.log(i);


// Creating two arrays. One for copy and one for images.
var messageArray = [  "<h1>Strawberries taste</h1><h1>just like your lips do.</h1><br><h2>And I'm a berry loving man.</h2>",
                      "<h1>If I were to drink it all</h1><h1>it would still be a</h1><h1>beautiful sight.</h1><br><h2>I would have you beside me.</h2>",
                      "<h1>This love is childish,</h1><h1>innocent and pure.</h1><br><h2>And sometimes I just want to play.</h2>",
                      "<h1>Even spaces like these</h1><br><h1>cannot contain our magic.</h1><br><h2>Let's not be afraid of going to the ends of the Earth.</h2>",
                      "<h1>Let's challenge the</h1><br><h1>concept of Impossibility.</h1><br><h2>Want to build a castle? Piece of cake.</h2>",
                      // "<h1>If you find something</h1><br><h1>better, that's ok.</h1><br><h2>I will go with you</h2>"
                      "<h1>My love is like a</h1><br><h1>summer tsunami tide.</h1><br><h2>Put your goggles on...</h2>"
                      ];
var array = ["url(_img/photo.jpeg)", "url(_img/lake.jpg)", "url(_img/dog.jpg)", "url(_img/clouds.jpg)", "url(_img/castle.jpg)", "url(_img/tsunami.jpg)"];



$('.message').html(messageArray[0]);
// Changing the image according to array

$('.image1').css("background", array[0]);
$('.image1').css("background-repeat-x", "no-repeat");
$('.image1').css("background-repeat-y", "no-repeat");
$('.image1').css("background-position-x", "50%");
$('.image1').css("background-position-y", "50%");
// changing the background-image of NAV title according to array
$('nav h1').css("background-image", array[0]);
$('nav h1').css("background-position", "50% 50%");

i=1;



$('#next').click(function(){
  console.log(i);
  //changing the html within the .message class to reflect what is in the array
  $('.message').slideUp(0).delay(600).fadeIn(600).html(messageArray[i]);

  // Changing the image according to array
  $('.image1').slideUp(0).fadeIn(600).css("background", array[i]);
  $('.image1').css("background-repeat-x", "no-repeat");
  $('.image1').css("background-repeat-y", "no-repeat");
  $('.image1').css("background-position-x", "50%");
  $('.image1').css("background-position-y", "50%");

  // changing the background-image of NAV title according to array
  $('nav h1').slideUp(0).fadeIn(600).css("background-image", array[i]).fadeIn(600);
  $('nav h1').css("background-position", "0% 0%");

  // incrementing counter
  i+=1;

  // Conditional statement removing the next button as soon as the array is depleted
  if(i===array.length){
    $('#next').css("display", "none");
  } else if(i!==array.length){
    $('#next').css("display", "block");
  }
  console.log("Up:" + i);
});

$('#previous').click(function(){

   i-=1;

  console.log("Down:" + i);

  $('.message').slideUp(0).delay(600).fadeIn(600).html(messageArray[i]);

  // Changing the image according to array
  $('.image1').slideUp(0).fadeIn(600).css("background", array[i]);
  $('.image1').css("background-repeat-x", "no-repeat");
  $('.image1').css("background-repeat-y", "no-repeat");
  $('.image1').css("background-position-x", "50%");
  $('.image1').css("background-position-y", "50%");

  // changing the background-image of NAV title according to array
  $('nav h1').slideUp(0).fadeIn(600).css("background-image", array[i]).fadeIn(600);
  $('nav h1').css("background-position", "0% 0%");

  if(i===array.length){
    $('#next').css("display", "none");
  } else if(i!==array.length){
    $('#next').css("display", "block");
  }

});


