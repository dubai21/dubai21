var x1 = 1 , x2 = 1 , x3 = 1 , x4 = 1 , x5 = 1 , x6 = 1 ;
showSlides(x1);

function currentSlide1(n) {
  showSlides(x1 = n);
}function currentSlide2(n) {
  showSlides(x2 = n);
}function currentSlide3(n) {
  showSlides(x3 = n);
}function currentSlide4(n) {
  showSlides(x4 = n);
}function currentSlide5(n) {
  showSlides(x5 = n);
}function currentSlide6(n) {
  showSlides(x6 = n);
}

function showSlides(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var slides2 = document.getElementsByClassName("mySlides2");
  var slides3 = document.getElementsByClassName("mySlides3");
  var slides4 = document.getElementsByClassName("mySlides4");
  var slides5 = document.getElementsByClassName("mySlides5");
  var slides6 = document.getElementsByClassName("mySlides6");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
    slides2[i].style.display = "none";
    slides3[i].style.display = "none";
    slides4[i].style.display = "none";
    slides5[i].style.display = "none";
    slides6[i].style.display = "none";
  }
  slides1[x1-1].style.display = "block";
  slides2[x2-1].style.display = "block";
  slides3[x3-1].style.display = "block";
  slides4[x4-1].style.display = "block";
  slides5[x5-1].style.display = "block";
  slides6[x6-1].style.display = "block";
}