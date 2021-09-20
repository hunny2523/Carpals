let slideIndex=1;
showSlide(slideIndex);
auto();
 function plusSlides(n)
 {
     showSlide(slideIndex+=n);
 }
function showSlide(n)
{
    var i;
    var slides=document.getElementsByClassName("mainSlides");
    if(n>slides.length)
    {
        slideIndex=1;
    }
    if(n<1)
    {
        slideIndex=slides.length;
    }
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";  
}
function auto() {
    var i;
    var slides = document.getElementsByClassName("mainSlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(auto, 5000); // Change image every 2 seconds
  }