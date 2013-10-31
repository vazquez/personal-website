      $(document).ready(function(){

    $.getJSON("http://twitter.com/statuses/user_timeline/iamrvazquez.json?callback=?", function(data) {
     $("#tweet").html(data[0].text);

     $('a[href=#top]').click(function(){
         $('html, body').animate({ scrollTop: 0 }, 'slow');
         return false;
     });

});
    //Variables needed for timer event below
    var showDelay = 3000; //will be delayed 2sec
    var showTimer = null;

    //When mouse rolls over
    $(".circular").mouseover(function(){
        $(this).css("background","url(../_img/quote.png)");
    });

    //When mouse is removed
    $(".circular").mouseout(function(){
        $(this).css("background","url(../_img/photo.jpg)")
    });

    //When icons are hovered over, display descriptive text
    $('a#dribbble').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Dunking shots on Dribbble");
    });

    $('a#twitter').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Tweeting tweets on Twitter");
    });

    $('a#linkedin').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Connecting people on LinkedIn");
    });

    $('a#mail').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Crafting sentences by email");
    });

    $('a#skype').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Talking one-to-many on Skype");
    });

    $('a#googlePlus').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Giving a plus one on Google+");
    });

    $('a#foursquare').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Checking in on Foursquare");
    });

    $('a#flickr').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Being a 'photographer' on Flickr");
    });
    $('a#forrst').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Sharing good code on Forrst");
    });

    $('a#github').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Forking some code on Github");
    });
    $('a#zootool').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Being a zookeeper on Zootool");
    });

    $('a#zerply').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Expanding myself on Zerply");
    });

    $('a#rdio').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Getting my daily music fix on Rdio");
    });

    $('a#instagram').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Looking through Instagram");
    });

    $('a#lastfm').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Sharing my favourites on last.fm");
    });

    $('a#meetup').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Finding friends on Meetup");
    });

    $('a#pinterest').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Pinning shtuff on Pinterest");
    });

    $('a#stumbleUpon').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Mining for gold on StumbleUpon");
    });

    $('a#ps').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Playing video games on Playstation");
    });

    $('a#steam').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Using my Mac wisely on Steam (not)");
    });

    $('a#tumblr').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Posting thoughts on Tumblr");
    });

    $('a#vimeo').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Sharing videos on Vimeo");
    });

    $('a#evernote').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Making virtual notes on Evernote");
    });

    $('a#delicious').mouseover(function(){
       console.log("you hovered");
       $('.iconText').text("Sharing Stacks on Delicious");
    });

    //Dynamically adding a class to the .iconsList
    $('.iconsList').children().addClass("icons");


    //THIS IS FOR THE PROJECTS PAGE

    //Mouseover displays descriptive text
    $('a#dripless').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("Dripless.org: Website");
    });

    $('a#badges').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("Scrum Gamification");
    });

    $('a#gg').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("Guerrilla Girls Website");
    });

    $('a#media').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("Private Media Data Vis.");
    });

    $('a#days').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("1095 Days: Responsive");
    });

    $('a#dearJen').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("Dear Jen: Responsive");
    });

    $('a#redefine').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("Burlington Art Centre");
    });

    $('a#gallery').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("Sheridan Gallery");
    });

    $('a#robot').mouseover(function(){
       console.log("you hovered");
       $('.projectName').text("I Am Robot: Responsive");
    });

    $('a#darling').mouseover(function(){
       $('.projectName').text("Hey Darling");
    });

    $('a#craigslist').mouseover(function(){
       $('.projectName').text("Craigslist Redesign");
    });

    $('a#uploader').mouseover(function(){
       $('.projectName').text("The New 500px Uploader");
    });

    //Set a timer event to return to generic text after hover

    $('a').live('mouseover', function()
    {
        if (showTimer)//if there is already such event this cancels the setTimeout()
            clearTimeout(showTimer);
        showTimer = setTimeout(function() //executes a code some time in the future
        {
            $('.projectName').text("Hover over projects...");
        }, showDelay);
    });
});

$(document).ready(function(){

    //setting variables for timer event below
    var showDelay = 3000; //will be delayed 2sec
    var showTimer = null;

    //set a timer for icons to return to generic text after hover
    $('.icons').live('mouseover', function()
        {
            if (showTimer)//if there is already such event this cancels the setTimeout()
                clearTimeout(showTimer);
            showTimer = setTimeout(function() //executes a code some time in the future
            {
                $('.iconText').text("But what do they mean, Basil?");
            }, showDelay);
        });

});
