// window.onload = function(){
//   console.log(document.getElementsByTagName("li").className);
//   var li= document.getElementsByTagName("li");
//   for(var i=0: i<li.length: i++){
//     li.className="unactive";
//   }
// };

function mouseover(link){
  var linkId = link.getAttribute("id");
  var x;
  var y;

  // console.log(text);

  switch(linkId) {
    case "truelove":
      x = "truelovePic";
      textField = "This badge represents the forging of a vendor-stakeholder relationship.";
      break;
    case "together":
      x = "togetherPic";
      textField = "This badge represents when a vendor and stakeholder attend an event together.";
      break;
    case "thankyou":
      x = "thankyouPic";
      textField = "This badge is awarded to the team member as appreciation for their work.";
      break;
    case "expertsadvice":
      x = "expertsadvicePic";
      textField = "This badge is awarded when stakeholder requests industry expert's advice.";
      break;
    case "playmaker":
      x = "playmakerPic";
      textField = "This badge is awarded when team member introduces a new feature.";
      break;
    case "phasetwo":
      x = "phasetwoPic";
      textField = "This badge is awarded when a stakeholder chooses to embark on a new project.";
      break;
    case "magicmaker":
      x = "magicmakerPic";
      textField = "This badge is awarded when a stakeholder chooses to embark on a new project.";
      break;
    case "focus":
      x = "focusPic";
      textField = "This badge is awarded when a team member adheres to their sprint commitment.";
      break;
    case "docbrown":
      x = "docbrownPic";
      textField = "This badge is awarded when a team completes a sprint ahead of schedule.";
      break;
    case "discovery":
      x = "discoveryPic";
      textField = "This badge is awarded to the stakeholder at the beginning of project research.";
      break;
    case "demolove":
      x = "demolovePic";
      textField = "This badge is given when stakeholder and team share a product demo 10 times.";
      break;
    case "crib":
      x = "cribPic";
      textField = "This badge is awarded when a stakeholder visits vendor's office and viceversa.";
      break;
    case "coffeeonme":
      x = "coffeeonmePic";
      textField = "This badge is awarded when a stakeholder is extremely pleased with product.";
      break;
    case "cloudnine":
      x = "cloudninePic";
      textField = "This badge is awarded when a stakeholder is extremely pleased with product.";
      break;
    case "click":
      x = "clickPic";
      textField = "This badge is given to the team when product is first released to public.";
      break;
    case "bullseye":
      x = "bullseyePic";
      textField = "This badge is awarded when the team reads the stakeholder's mind.";
      break;
    case "bugsquisher":
      x = "bugsquisherPic";
      textField = "This badge is given to the team when product is first released to public.";
      break;
    case "oneyear":
      x = "oneyearPic";
      textField = "This badge is given when the project relationship reaches one year in length.";
      break;
    case "sixmonths":
      x = "sixmonthsPic";
      textField = "This badge is given when the project relationship reaches six months in length.";
      break;
    case "threemonths":
      x = "threemonthsPic";
      textField = "This badge is given when the project relationship reaches three months in length.";
      break;
  }

  document.getElementById(x).className+=" badgeIconClick";
  document.getElementById("dynamic").firstChild.nodeValue = textField;
  document.getElementById(linkId).className+=""
  document.getElementById(linkId).className="active";

}


function mouseout(link){
  var linkId = link.getAttribute("id");
  var img = document.getElementsByTagName("img");
  var t;

  switch(linkId) {
    case "truelove":
      x = "truelovePic";
      break;
    case "together":
      x = "togetherPic";
      break;
    case "thankyou":
      x = "thankyouPic";
      break;
    case "expertsadvice":
      x = "expertsadvicePic";
      break;
    case "playmaker":
      x = "playmakerPic";
      break;
    case "phasetwo":
      x = "phasetwoPic";
      break;
    case "magicmaker":
      x = "magicmakerPic";
      break;
    case "focus":
      x = "focusPic";
      break;
    case "docbrown":
      x = "docbrownPic";
      break;
    case "discovery":
      x = "discoveryPic";
      break;
    case "demolove":
      x = "demolovePic";
      break;
    case "crib":
      x = "cribPic";
      break;
    case "coffeeonme":
      x = "coffeeonmePic";
      break;
    case "cloudnine":
      x = "cloudninePic";
      break;
    case "click":
      x = "clickPic";
      break;
    case "bullseye":
      x = "bullseyePic";
      break;
    case "bugsquisher":
      x = "bugsquisherPic";
      break;
    case "oneyear":
      x = "oneyearPic";
      break;
    case "sixmonths":
      x = "sixmonthsPic";
      break;
    case "threemonths":
      x = "threemonthsPic";
      break;
  }

  document.getElementById(x).className="";
  document.getElementById(x).className="badgeIcon";
  // setTimeout("document.getElementById('dynamic').firstChild.nodeValue = 'Badges signify an achievement; a reward for the 12 year-old inside you.'",2000);
  document.getElementById('dynamic').firstChild.nodeValue = "Badges signify an achievement; a reward for the 12 year-old inside you.";
   document.getElementById(linkId).className="";
}

window.onload()

// function restoreOpacity(){
//   document.getElementById(x).className="";
//   document.getElementById(x).className="badgeIcon";
// }

// function restoreDefaultText(){
//   document.getElementsById('dynamic').firstChild.nodeValue = "Badges signify an achievement; a reward for the 12 year-old inside you:"
// }

// function showText(link){
//   var source = link.getAttribute("id");
//   var text = document.getElementById("dynamic");
//   var img = document.getElementsByTagName("img");
//   // console.log(img);
//   console.log(source);

//   if(source === "truelove"){
//     text.firstChild.nodeValue = "This badge represents the forging of a vendor-stakeholder relationship.";

//     // console.log(document.getElementById('truelovePic'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('truelovePic').className+=" badgeIconClick";

//   } else if(source==="together"){
//     text.firstChild.nodeValue = "This badge represents when a vendor and stakeholder attend an event together.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('togetherPic').className+=" badgeIconClick";

//   } else if(source === "thankyou"){
//     text.firstChild.nodeValue = "This badge is awarded to the team member as appreciation for their work.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('thankyouPic').className+=" badgeIconClick";

//   } else if(source==="expertsadvice"){
//     text.firstChild.nodeValue = "This badge is awarded when stakeholder requests industry expert's advice.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('expertsadvicePic').className+=" badgeIconClick";

//   } else if(source==="playmaker"){
//     text.firstChild.nodeValue = "This badge is awarded when team member introduces a new feature.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++){
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('playmakerPic').className+=" badgeIconClick";

//   } else if(source==="phasetwo"){
//     text.firstChild.nodeValue = "This badge is awarded when a stakeholder chooses to embark on a new project.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('phasetwoPic').className+=" badgeIconClick";

//   } else if(source==="magicmaker"){
//     text.firstChild.nodeValue = "This badge is awarded when a stakeholder chooses our company to lead a new project.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('magicmakerPic').className+=" badgeIconClick";

//   } else if(source==="focus"){
//     text.firstChild.nodeValue = "This badge is awarded when a team member adheres to their sprint commitment.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('focusPic').className+=" badgeIconClick";

//   } else if(source==="docbrown"){
//     text.firstChild.nodeValue = "This badge is awarded when a team completes a sprint ahead of schedule.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('docbrownPic').className+=" badgeIconClick";

//   } else if(source==="discovery"){
//     text.firstChild.nodeValue = "This badge is awarded to the stakeholder at the beginning of project research.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }

//     document.getElementById('discoveryPic').className+=" badgeIconClick";

//   } else if(source==="demolove"){
//     text.firstChild.nodeValue = "This badge is given when stakeholder and team share a product demo 10 times.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }

//     document.getElementById('demolovePic').className+=" badgeIconClick";

//   } else if(source==="crib"){
//     text.firstChild.nodeValue = "This badge is awarded when a stakeholder visits vendor's office and viceversa.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }

//     document.getElementById('cribPic').className+=" badgeIconClick";

//   } else if(source==="coffeeonme"){
//     text.firstChild.nodeValue = "This badge is given to team member on behalf of the stakeholder's appreciation.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }

//     document.getElementById('coffeeonmePic').className+=" badgeIconClick";

//   } else if(source==="cloudnine"){
//     text.firstChild.nodeValue = "This badge is awarded when a stakeholder is extremely pleased with product.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }

//     document.getElementById('cloudninePic').className+=" badgeIconClick";

//   } else if(source==="click"){
//     text.firstChild.nodeValue = "This badge is given to the team when product is first released to public.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('clickPic').className+=" badgeIconClick";

//   } else if(source==="bullseye"){
//     text.firstChild.nodeValue = "This badge is awarded when the team reads the stakeholder's mind.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('bullseyePic').className+=" badgeIconClick";

//   } else if(source==="bugsquisher"){
//     text.firstChild.nodeValue = "This badge is awarded to a team member when they resolve code inefficiency.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('bugsquisherPic').className+=" badgeIconClick";

//   } else if(source==="oneyear"){
//     text.firstChild.nodeValue = "This badge is given when the project relationship reaches one year in length.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('oneyearPic').className+=" badgeIconClick";

//   } else if(source==="sixmonths"){
//     text.firstChild.nodeValue = "This badge is given when the project relationship reaches six months in length.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('sixmonthsPic').className+=" badgeIconClick";

//   } else if(source==="threemonths"){
//     text.firstChild.nodeValue = "This badge is given when the project relationship reaches three months in length.";
//     // console.log(source);
//     // console.log(document.getElementById('together'));

//     for(var i=0; i<20; i++) {
//       img[i].className="";
//       img[i].className="badgeIcon";
//     }
//     document.getElementById('threemonthsPic').className+=" badgeIconClick";
//   }

// }





