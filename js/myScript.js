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

		case "vapor1":
			return "emojis/vapor1.png";
		case "vapor2":
			return "emojis/vapor2.png";
		case "vapor3":
			return "emojis/vapor3.png";		
		case "vapor4":
			return "emojis/vapor4.png";
		case "vapor5":
			return "emojis/vapor5.png";
		case "vapor6":
			return "emojis/vapor6.png";
		case "vapor7":
			return "emojis/vapor7.png";
		case "vapor8":
			return "emojis/vapor8.png";
		case "vapor9":
			return "emojis/vapor9.png";
		case "vapor10":
			return "emojis/vapor10.png";
		case "vapor11":
			return "emojis/vapor11.png";		
		case "vapor12":
			return "emojis/vapor12.png";
		case "vapor13":
			return "emojis/vapor13.png";
		case "vapor14":
			return "emojis/vapor14.png";
		case "vapor15":
			return "emojis/vapor15.png";
		case "vapor16":
			return "emojis/vapor16.png";
		case "vapor17":
			return "emojis/vapor17.png";
		case "vapor18":
			return "emojis/vapor18.png";
		case "vapor19":
			return "emojis/vapor19.png";
		case "vapor20":
			return "emojis/vapor20.png";		
		case "vapor21":
			return "emojis/vapor21.png";
		case "vapor22":
			return "emojis/vapor22.png";
		case "vapor23":
			return "emojis/vapor23.png";
		case "vapor24":
			return "emojis/vapor24.png";
		case "vapor25":
			return "emojis/vapor25.png";
		case "vapor26":
			return "emojis/vapor26.png";
		case "vapor27":
			return "emojis/vapor27.png";
		case "vapor28":
			return "emojis/vapor28.png";
		case "vapor29":
			return "emojis/vapor29.png";		
		case "vapor30":
			return "emojis/vapor30.png";
		case "vapor31":
			return "emojis/vapor31.png";
		case "vapor32":
			return "emojis/vapor32.png";
		case "vapor33":
			return "emojis/vapor33.png";
		case "vapor34":
			return "emojis/vapor34.png";
		case "vapor35":
			return "emojis/vapor35.png";
		case "vapor36":
			return "emojis/vapor36.png";

	}
}




		function merging() {
			console.log("Enters merging()");

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

	    		/*
	    		var canvass = document.getElementById("myCanvas");
				var dataURL = canvas.toDataURL('image/png');
    			canvass.href = dataURL;
    			*/


    		}
    	}

			function downloadCanvas(link, canvasId, filename) {
				console.log("Enters downloadCanvas");
			    link.href = document.getElementById(canvasId).toDataURL();
			    link.download = filename;
			}

			
    		document.getElementById('download').addEventListener('click', function() {
    			console.log("Enter here");
    			merging();
			    downloadCanvas(this, 'myCanvas', 'test.png');
			}, false);

			
			/*
			function hh() {
				console.log("Enters downloadThis");
				merging();
				downloadCanvas(this, 'myCanvas', 'test.png');
			}
			*/
			    		   		


		