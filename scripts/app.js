// remove active class from current image and set to next
function nextImage(){
  var images = document.getElementsByClassName('carousel')[0].getElementsByClassName('carousel-item');
  var nextActive = 1;
  for(var i = 0; i < images.length; i++){
    if(classExists(images[i],"active")){
      images[i].classList.toggle("active");
      if(i === images.length-1){
        nextActive = 0;
      }else{
        nextActive = i+1;
      }
    }
  }
  images[nextActive].classList.toggle("active");
}

setInterval(nextImage, 3000);


// Function checks if class exists in element
function classExists(elem, classname){
  return (' ' + elem.className + ' ').indexOf(' ' + classname + ' ') > -1;
}
