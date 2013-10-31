// JavaScript Document 
window.addEventListener('load',makeOpaque,false)

function makeOpaque() {
	
	for (var j=1; j<=5; j++){
		var dropList = document.getElementById('dropList'+j);
		//This is getting all of the ID's that have the name dropList + number.
		var numofDropList = dropList.getElementsByTagName('img');
		//This is getting all of the images that are housed inside of droplist(1,2,3,4,5)
		//alert(numofDropList1.length);
		for (var i=0; i < numofDropList.length; i++) {
			numofDropList[i].addEventListener("click", doOpaque, false);
			//For every <img> tag, add an Event Listener that starts doOpaque when clicked on.
			numofDropList[i].style.cursor= 'pointer';
			//For every <img> tag, add a cursor style of pointer since the <img> tags do not have an <a> tag.
			//alert(numofDropList1[i].src);	
		}
		
	}

	function doOpaque() {
		this.setAttribute("class", "opaque");
		//"this" refers to the <img> tag being clicked on. The <img> tag being clicked on will be set with an class
		//attribute of "opaque" already defined in main.css.	
		//alert(this.previousSiblings());
		var i = 0;
		var child = this;
		while( (child = child.previousSibling) != null ){ 
			//this while statement checks to see if the <img> being clicked on has a sibling or not.
			//This allows the whole row to be made opaque, not just the image being clicked on.
			i++;
			if(i%2 == 0){	
				child.setAttribute("class", "opaque");
			//Because child.previousSibling counts every <img> and /> tag, it effectively doubles the count of the images.
			//By using modulus, this if statement targets every <img> tag and skips over the /> tag.
			}
		}
		
	}
	
}

function resetDrops() {
		for (var k=1; k<=5; k++){
		var dropList = document.getElementById('dropList'+k);
		var numofDropList = dropList.getElementsByTagName('img');
		
		for (var i=0; i < numofDropList.length; i++) {
			numofDropList[i].setAttribute("class", "transparent");
			}
		}	
}

function doSomething(parameter) {
	
	function toggle() {
		var twitter = document.getElementById('twitter');
		if ( twitter.style.display != 'none' ) {
			twitter.style.display = 'none'; 
	 }
	}
	
	switch (parameter) {
	case "ecological":
		var paragraph = document.getElementById('factsP');
		paragraph.innerHTML = "In part due to poisoned waterways, one-fifth of the world\'s freshwater fishes is either endangered or extinct, according to the World Resources Institute.To modify such seasonal and geographical variations, humans have built more than 36,000 dams over 15 meters in height around the world."; 
		toggle();
		break;	
		
	case "consumption":
		var paragraph = document.getElementById('factsP');
		paragraph.innerHTML = "In many countries, the availability of water is seasonal. In Australia, for example, 65 per cent of runoff occurs in January, February and March.In many countries, the availability of water is seasonal. In Australia, for example, 65% of runoff occurs in January, February and March.";
		toggle();
		break;
		
	case "awareness":
		var paragraph = document.getElementById('factsP');
		paragraph.innerHTML = "Freshwater is a scarce resource. Freshwater is a scarce resource. Only 0.008% of the planet\'s water is available for human consumption, and is found in lakes, rivers and underground aquifers. Humans need at least 15 litres per capita per day in order to survive.";
		toggle();
		break;
		
	case "pledge":
		var paragraph = document.getElementById('factsP');
		paragraph.innerHTML = "You can do something about it. Waste less water by reminding yourself that this resource is precious to mankind. Take a maximum of 15 minutes showers using aerators in your faucets. Most importantly, don't wash your boat, silly! Pledge to the cause:";
		var twitter = document.getElementById('twitter');
		twitter.style.display = 'block';
		//alert("There is a Twitter Button at the bottom of the text. The webpage needs to be hosted in a server locally in order for the user to properly see and use the Twitter Button and Counter. If you are viewing this page in Chrome, that is the reason why the webpage seemed to take forever to load.");
		break;
	}
}
  
 
  

