// loads Calendly after a few seconds, so It doesn't slow the page at the beginning

$(document).ready(function() {
  $.ajax({
      url: "https://assets.calendly.com/assets/external/widget.js",
      dataType: "script",
      cache: true
  });
});


    // Carousel for Genius Team
    let items = document.querySelectorAll('.carousel .genius-team-carousel')

items.forEach((el) => {
const minPerSlide = 3
let next = el.nextElementSibling
for (var i=1; i<minPerSlide; i++) {
   if (!next) {
// wrap carousel by using first child
next = items[0]
}
let cloneChild = next.cloneNode(true)
el.appendChild(cloneChild.children[0])
next = next.nextElementSibling
}
});
//       $('.carousel').carousel({
//   interval: false,
// });
 function animate(obj, initVal, lastVal, duration) {
   let startTime = null;

   //get the current timestamp and assign it to the currentTime variable
   let currentTime = Date.now();

   //pass the current timestamp to the step function
   const step = (currentTime) => {

     //if the start time is null, assign the current time to startTime
     if (!startTime) {
       startTime = currentTime;
     }

     //calculate the value to be used in calculating the number to be displayed
     const progress = Math.min((currentTime - startTime) / duration, 1);

     //calculate what to be displayed using the value gotten above
     obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

     //checking to make sure the counter does not exceed the last value (lastVal)
     if (progress < 1) {
       window.requestAnimationFrame(step);
     } else {
       window.cancelAnimationFrame(window.requestAnimationFrame(step));
     }
   };
   //start animating
   window.requestAnimationFrame(step);
 }
 let text1 = document.getElementById('0101');
 const load = () => {
   animate(text1, 0, 5, 2000);
 }

//  This script is for revealing the mission in about us section
 function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
 reveals[i].classList.add("active");
} else {
 reveals[i].classList.remove("active");
}
}
}
window.addEventListener("scroll", reveal);


 // This script is for services section when images is clicked
 
 $(document).ready(function(){
  $("#services-slider-img1").click(function(){ 
    $("#card-title-services").text("Web Development");
    $("#webdevsum").text("Lorem ipsum dolor sit amet consectetur. Nunc sit fringilla suspendisse erat tempor rhoncus. Sed velit donec euismod nisl nisl. Fames magna bibendum nibh consequat.");
  });
  $("#services-slider-img2").click(function(){
    $("#card-title-services").text("Team Development");
    $("#webdevsum").text("Lorem ipsum dolor sit amet consectetur. Nunc sit fringilla suspendisse erat tempor rhoncus. Sed velit donec euismod nisl nisl. Fames magna bibendum nibh consequat.");
  });
  $("#services-slider-img3").click(function(){
    $("#card-title-services").text("Project Management");
    $("#webdevsum").text("Lorem ipsum dolor sit amet consectetur. Nunc sit fringilla suspendisse erat tempor rhoncus. Sed velit donec euismod nisl nisl. Fames magna bibendum nibh consequat.");
  });
  $("#services-slider-img4").click(function(){
    $("#card-title-services").text("Quality Assurance");
    $("#webdevsum").text("Lorem ipsum dolor sit amet consectetur. Nunc sit fringilla suspendisse erat tempor rhoncus. Sed velit donec euismod nisl nisl. Fames magna bibendum nibh consequat.");
  });
  $("#services-slider-img5").click(function(){
    $("#card-title-services").text("Mobile Development");
    $("#webdevsum").text("Lorem ipsum dolor sit amet consectetur. Nunc sit fringilla suspendisse erat tempor rhoncus. Sed velit donec euismod nisl nisl. Fames magna bibendum nibh consequat.");
  });
  $("#services-slider-img6").click(function(){
    $("#card-title-services").text("Backend Development");
    $("#webdevsum").text("Lorem ipsum dolor sit amet consectetur. Nunc sit fringilla suspendisse erat tempor rhoncus. Sed velit donec euismod nisl nisl. Fames magna bibendum nibh consequat.");
  });
  $("#services-slider-img7").click(function(){
    $("#card-title-services").text("UI/UX Design");
    $("#webdevsum").text("Lorem ipsum dolor sit amet consectetur. Nunc sit fringilla suspendisse erat tempor rhoncus. Sed velit donec euismod nisl nisl. Fames magna bibendum nibh consequat.");
  });
 
 
  // var selectedTrigger = false;

  $("#services-slider-img1").click(function(){
    $("#services-slider-img1").select();
    // $("#services-slider-img1").removeAttr("#services-slider-img1");
    $("#services-slider-img1").css("border", "1px solid white");
    // $("#services-slider-img1").css("padding-top", "none");
    $("#services-slider-img7").appendTo(".center-images");
    $("#services-slider-img2").select(false);
    $("#services-slider-img2").css("border", "0px solid white");

  });
  $("#services-slider-img2").click(function(){
    $("#services-slider-img2").select();
    $("#services-slider-img2").css("border", "1px solid white");
    $("#services-slider-img1").appendTo(".center-images");
            // $("#services-slider-img2").appendTo(".center-images");
    $("#services-slider-img3").select(false);
    $("#services-slider-img3").css("border", "0px solid white");
  });
  $("#services-slider-img3").click(function(){
    $("#services-slider-img3").select();
    $("#services-slider-img3").css("border", "1px solid white");
    $("#services-slider-img2").appendTo(".center-images");
    // $("#services-slider-img2").appendTo(".center-images");
    $("#services-slider-img4").select(false);
    $("#services-slider-img4").css("border", "0px solid white");
  });
  $("#services-slider-img4").click(function(){
    $("#services-slider-img4").select();
    $("#services-slider-img4").css("border", "1px solid white");
    $("#services-slider-img3").appendTo(".center-images");
            // $("#services-slider-img4").appendTo(".center-images");
    $("#services-slider-img5").select(false);
    $("#services-slider-img5").css("border", "0px solid white");
  });
  $("#services-slider-img5").click(function(){
    $("#services-slider-img5").select();
    $("#services-slider-img5").css("border", "1px solid white");
    $("#services-slider-img4").appendTo(".center-images");
            // $("#services-slider-img5").appendTo(".center-images");
    $("#services-slider-img6").select(false);
    $("#services-slider-img6").css("border", "0px solid white");
  });
  $("#services-slider-img6").click(function(){
    $("#services-slider-img6").select();
    $("#services-slider-img6").css("border", "1px solid white");
    $("#services-slider-img5").appendTo(".center-images");
            // $("#services-slider-img6").appendTo(".center-images");
    $("#services-slider-img7").select(false);
    $("#services-slider-img7").css("border", "0px solid white");
  });
  $("#services-slider-img7").click(function(){
    $("#services-slider-img7").select();
    $("#services-slider-img7").css("border", "1px solid white");
    $("#services-slider-img6").appendTo(".center-images");
    $("#services-slider-img1").select(false);
    $("#services-slider-img1").css("border", "0px solid white");
            // $("#services-slider-img7").appendTo(".center-images");
  });


                                                                    // Services page
// slide up animation


// var $elements = $('.services-it-consulting, .services-web-dev, .services-mobile-app-dev, .services-ui-ux-design, .services-team-dev, .services-software-testing');
// var $otherElements = $('.services-software-testing, .services-team-dev, .services-mobile-app-dev ');


// function anim_loop(index) {
//   $elements.eq(index).slideUp(1000, function() {
//       var $self = $(this);
//       setTimeout(function() {
//           $self.slideDown(1000);
//           anim_loop((index + 1) % $elements.length);
//       }, 1000);
//     //   setTimeout(function() {
//     //     $self.slideDown(1000);
//     //     anim_loop((index - 1) % $elements.length);
//     // }, 1000);
//       // $self.slideDown(1000);
//   });
// }

// anim_loop(0); // start with the first element



// this script is for navbar text-decoration underline
document.querySelectorAll('.nav-link').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})

                  // this code is for services page on the top, It slides up and down the services
// The code crushes the animations when the user visit it back grom another page

loop();
function loop()
{
    let divs = [$(".services-it-consulting"), $(".services-web-dev"), $(".services-mobile-app-dev"),      $(".services-ui-ux-design"), $(".services-team-dev")];
    let counter = 0;
    for(let i = 0; i < divs.length; i++) {
      setTimeout(function(){ divs[i].slideUp('slow') }, 1000 * counter);
      counter++;
     
      
    }
    
    var down=1;
    for(let j = divs.length-1; j > 0; j--) {
      setTimeout(function(){ 
        divs[j].slideDown('slow');
        down++;
        // base case
        if (down == divs.length) {
            loop();
        }
      }, 1000 * counter);
      counter++; 
    }
    
    
}



// let divs = [$(".services-it-consulting"), $(".services-web-dev"), $(".services-mobile-app-dev"), $(".services-ui-ux-design"), $(".services-team-dev")];

// let counter = 0;
// for(let i = 0; i < divs.length; i++) {
//   setTimeout(function(){ divs[i].slideUp('slow') }, 1000 * counter);
//   counter++;
// }

// for(let j = divs.length-1; j >= 0; j--) {
//   setTimeout(function(){ divs[j].slideDown('slow') }, 1000 * counter);
//   counter++;
// }

// const loopTime = 5;

// for (let aa = 0; aa < loopTime; aa++) {
//     console.log(`Iteration is #${aa}`);
// }


                // this script is for Portfolio page in repitsocial video. When the user hover the video

   $("#carouselFeaturedProjects").mouseenter(function () {
     $(".repitsocial-featured-video-caption").css("opacity", "1");
   });
   $("#carouselFeaturedProjects").mouseleave(function () {
    $(".repitsocial-featured-video-caption").css("opacity", "0");
  });
  

});  



                                                                    // Projects page -  See More button (show and hide hidden projects)

                              // for hidden Featured projects

 var btnFeaturedProjectsText = document.getElementById("myBtn1"); 

function FeaturedProjectsShowHide(divId1)   
{
if(document.getElementById(divId1).style.display == 'none')
{
document.getElementById(divId1).style.display='block';
btnFeaturedProjectsText.innerHTML = "Show less"; 
}
else
{
document.getElementById(divId1).style.display = 'none';
btnFeaturedProjectsText.innerHTML = "See More"; 
}
}

                        // for hidden Team Development projects

var btnTeamDevelopmentProjectsText = document.getElementById("myBtn2"); 

function TeamDevelopmentProjectsShowHide(divId2)    
{
if(document.getElementById(divId2).style.display == 'none')
{
document.getElementById(divId2).style.display='block';
btnTeamDevelopmentProjectsText.innerHTML = "Show less"; 
}
else
{
document.getElementById(divId2).style.display = 'none';
btnTeamDevelopmentProjectsText.innerHTML = "See More"; 
}
}

                        // for hidden QA Portfolio projects

var btnQaPortfolioText = document.getElementById("myBtn3"); 

function QaPortfolioProjectsShowHide(divId3)    
{
if(document.getElementById(divId3).style.display == 'none')
{
document.getElementById(divId3).style.display='block';
btnQaPortfolioText.innerHTML = "Show less"; 
}
else
{
document.getElementById(divId3).style.display = 'none';
btnQaPortfolioText.innerHTML = "See More"; 
}
}


                                                                                        // Our Team page

// Appointment Form - To get the Day, Month, Year, Hours & Seconds

 // var time = new Date();
// console.log(
//   time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
// );

var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
var prnDt = 'Appointment on ' + new Date().toLocaleTimeString('en-us', options);

document.getElementById("appointment-date-time").textContent = new Date().toLocaleTimeString('en-us', options);
console.log(prnDt);     

