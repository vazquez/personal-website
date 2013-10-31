// Fade-in 1st photo in array at load of page
$('#video').slideUp(0).delay(100).fadeIn(600);

// Creating a counter variable
var i=0;
console.log(i);

// Creating two arrays. One for narrative and one for images.
var narrativeArray = [  "<h1>Strawberries taste</h1><h1>just like your lips do.</h1><br><h2>And I'm a berry loving man.</h2>",
                      "<h1>If I were to drink it all</h1><h1>it would still be a</h1><h1>beautiful sight.</h1><br><h2>I would have you beside me.</h2>",
                      "<h1>This love is childish,</h1><h1>innocent and pure.</h1><br><h2>And sometimes I just want to play.</h2>",
                      "<h1>Even spaces like these</h1><br><h1>cannot contain our magic.</h1><br><h2>Let's not be afraid of going to the ends of the Earth.</h2>",
                      "<h1>Let's challenge the</h1><br><h1>concept of Impossibility.</h1><br><h2>Want to build a castle? Piece of cake.</h2>",
                      "<h1>My love is like a</h1><br><h1>summer tsunami tide.</h1><br><h2>Put your goggles on...</h2>"
                      ];

var photoArray = [ "url(_img/photo.jpeg)",
                  "url(_img/lake.jpg)",
                  "url(_img/dog.jpg)",
                  "url(_img/clouds.jpg)",
                  "url(_img/castle.jpg)",
                  "url(_img/tsunami.jpg)"
                  ];

// Changing the narrative according to array
$('.message').html(narrativeArray[0]);

//Changing the image according to array
$('.photo').css("background", photoArray[0]);
$('.photo').css("background-repeat-x", "no-repeat");
$('.photo').css("background-repeat-y", "no-repeat");
$('.photo').css("background-position-x", "50%");
$('.photo').css("background-position-y", "50%");
$('.photo').css("background-size", "cover");

i=1;

$('#next').click(function(){

  console.log(i);

  // Changing the image according to array
  $('.photo').slideUp(0).fadeIn(600).css("background", photoArray[i]);

  //changing the html within the .message class to reflect what is in the array
  $('.message').slideUp(0).delay(600).fadeIn(600).html(narrativeArray[i]);

  // incrementing counter
  i+=1;

  // Conditional statement removing the next button as soon as the array is depleted
  if(i===photoArray.length){
    $('#next').css("display", "none");
  } else if(i!==photoArray.length){
    $('#next').css("display", "block");
  }

});


