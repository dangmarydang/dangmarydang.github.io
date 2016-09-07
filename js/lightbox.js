//LightBox//

var $overlay = $("<div id='overlay'><div>");
var $image = $("<img id='overlay-image'>");
var $caption = $("<p></p>");
var $exit = $('<div id="exit"><img src="img/icons/exit.png" alt="exit"><div>');


var $index = 0;
//Add overlay to body of index.html
$("body").append($overlay);

//When a preview/thumbnail is clicked..
$(".lightbox a").click(function(event) {

  //stop click from opening img url
  event.preventDefault();

  //get image href value
  var imageLocation = $(this).attr("href");

  //get image's alt text to use as caption
  var imageCaption = $(this).children("img").attr("alt");

  //add exit button
  $overlay.append($exit);

  //call function to capture info for the clicked image
  updateImage(imageLocation, imageCaption);

  //add image to overlay
  $overlay.append($image);

  //get index for current image
  $index = $(this).parent().index();

  //add text captions to the images when viewed in the lightbox
  $overlay.append($caption);

  //show the overlay
  $overlay.fadeIn(0);
});

//Hide overlay when exit button is clicked
$exit.on("click", function() {
  $overlay.fadeOut(0).hide();
});

//Hide overlay when esc button is clicked
$("body").keydown(function(event) {
  if (event.which == 27) {
    $overlay.fadeOut(0).hide();
  }
});

//FUNCTIONS

function updateImage(imageLocation, imageCaption) {
  //update image source
  $image.attr("src", imageLocation);
  //set caption text
  $caption.text(imageCaption);
}
