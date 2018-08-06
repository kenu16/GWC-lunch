document.addEventListener('DOMcontentloaded', function (e) {
console.log("i'm loaded!!!!!")
//create a varible titled image. find the image in the html and ins
var image = document.getElementById('mondayimage');

//add evvent lister to image
image.addEventListener('click' , function (e) {
    console.log("ijust clicked on the saandwich image.")
    console.log(image.src)
}) 