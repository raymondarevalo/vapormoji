/* */

/* Global array of picture objects*/
var picArray = new Array;

function moveImage () {
	for(var i = 0; i < picArray.length; ++i ){
		$(function() {
			var combinedString = "#pictureId" + i.toString();
			console.log(combinedString);
			$( combinedString ).draggable({containment: "window"});
		});
	}
}

function addPicObj(currentPicture) {
	var currentIndex = picArray.length;	/* Current index of our object */


	/* adds image and returns the name of the <img> and <div> */
	var nameImgDiv = addImage(currentIndex, currentPicture);

	/* Creates a new pictureObject that stores the image name and the div name */
	var newPicture = new pictureObject(nameImgDiv[0], nameImgDiv[1]);

	picArray.push(newPicture);
	moveImage();

}

/* new pictureObject : stores image's name and div's name */
function pictureObject(imageName, divName) {
	this.imageName = imageName;
	this.divName = divName;



}


/* Creates a new div element. Then it creates a new div element.
 * adds the <img> onto the <div>. Returns the image's name and div's name */
function addImage(currIndex, currPicture) {

	/* Create a new <img> */
	var img = document.createElement("IMG");

	/* Set its source */
	img.src = setImageSrc(currPicture);


	var imageName = "pictureName" + currIndex.toString();	/* Id name for <img> */
	img.setAttribute("id", imageName);						/* Sets the id of the ne  <img> */


	/* Adds div onto the document and returns the name of the div */
	var divName = addDiv(currIndex);

	/* Places newly created image onto the newly created div */
	document.getElementById(divName).appendChild(img);

	/* Returns the image's id name and div's id name */

	var imgdivArray = new Array(2);
	imgdivArray[0] = imageName;
	imgdivArray[1] = divName;
	return imgdivArray;
}

/* Creates a new div element. Sets its id and appends it onto the document's body. Return div's name */
function addDiv(currIndex) {

	/* Creates a new <div> */
	var newDiv = document.createElement("DIV");

	/* Sets the id of the new <div> */
	var idName = "pictureId" + currIndex.toString();
	console.log("idName: " + "idName");
	newDiv.setAttribute("id", idName);

	/* Adds new div onto the document's body */
	document.getElementById("top").appendChild(newDiv);

	var d = document.getElementById(idName);
	d.style.position = "absolute";
	return idName;

}

/* Sets the src of the image */
function setImageSrc(currPicture) {
	switch(currPicture) {
		case "facebook":
			return "facebook.png";

		case "twitter":
			return "twitter.png";

		case "vapor1":
			return "vapor1.png";

		case "vapor2":
			return "vapor2.png";

		case "vapor3":
			return "vapor3.png";

		case "vapor4":
			return "vapor4.png";

		case "vapor5":
			return "vapor5.png";

		case "vapor6":
			return "vapor6.png";

		case "vapor7":
			return "vapor7.png";
			
		case "vapor8":
			return "vapor8.png";

	}
}




		function merging() {

			document.getElementById("myCanvas").width = document.getElementById("myImage").width;
			document.getElementById("myCanvas").height = document.getElementById("myImage").height;


			/* Makes the canvas */
			var c = document.getElementById("myCanvas");
    		var ctx = c.getContext("2d");


    		/* Main picture */
    		var img = document.getElementById("myImage");
    		var secondLeft = img.offsetLeft;
    		var secondTop = img.offsetTop;

    		/* Draws img onto the canvas */
    		ctx.drawImage(img, 0, 0, document.getElementById("myImage").width, document.getElementById("myImage").height);

    		for(var amt = 0; amt < picArray.length; ++amt) {

    			var dName = "pictureId" + amt.toString();
	    		var img2 = document.getElementById(dName);
	    		var offLeft = img2.offsetLeft;
	    		var offTop = img2.offsetTop; 

	    		var finalLeft = offLeft - secondLeft;
	    		var finalTop = offTop - secondTop;


	    		var sx = 0;
	    		var sy = 0;

	    		var picName = "pictureName" + amt.toString();
	    		var picture = document.getElementById(picName);

	    		var swidth = picture.width;
	    		var sheight = picture.height;

	    		var xx = finalLeft;
	    		var yy = finalTop;


	    		if(finalLeft<0){
	    			sx = Math.abs(finalLeft);
	    			xx = 0;
	    			swidth = swidth - sx;
	    		}

	    		if(finalTop < 0){
	    			sy = Math.abs(finalTop);
	    			yy = 0;
	    			sheight = sheight - sy;
	    		}

	    		ctx.drawImage(picture, sx, sy, swidth, sheight, xx, yy, swidth, sheight);

    		}
    		   		


		}