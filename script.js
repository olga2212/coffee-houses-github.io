gsap.from(".logo", {y:-200, opacity:0, delay:0.5, duration:1})
gsap.from(".coffeeZone", {y:-200, opacity:0, delay:0.5, duration:1})
gsap.from(".fa-bars", {y:-200, opacity:0, delay:0.5, duration:1})
gsap.from(".mainHeader", {opacity:0, duration:4, delay:1, color:"#c0aa83"})
gsap.from(".paragraph", {opacity:0, duration:4, delay:1, color:"#c0aa83"})
gsap.from(".buttons", {y:-600, opacity:0, delay:1, duration:2})

let myIndex = 0;
const mySlides = ["https://cdn.glitch.global/d1b76f07-9de1-4406-8f04-278280b6ed97/one.jpg?v=1674459772258", "https://cdn.glitch.global/d1b76f07-9de1-4406-8f04-278280b6ed97/two.jpg?v=1674459334664", "https://cdn.glitch.global/d1b76f07-9de1-4406-8f04-278280b6ed97/three.jpg?v=1674459333697", "https://cdn.glitch.global/d1b76f07-9de1-4406-8f04-278280b6ed97/four.jpg?v=1674459403070", "https://cdn.glitch.global/d1b76f07-9de1-4406-8f04-278280b6ed97/five.jpg?v=1674459402331"]

carousel();

function carousel() {
  let i;
  for (i = 0; i < mySlides.length; i++) {
    document.querySelector('#slides').style.backgroundImage = "url(" + mySlides[i] + ")";
    document.querySelector('#slides').style.transition = "all 2s ease";
    gsap.fromTo(".background", {scale: 1.5, duration:0}, {scale:1, duration:5})
  }
  myIndex++;
  if (myIndex > mySlides.length) {myIndex = 1}
  document.querySelector('#slides').style.backgroundImage = "url(" + mySlides[myIndex-1] + ")";
  setTimeout(carousel, 5000); 
}

function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}

const menuImage = document.querySelector(".menuImage");
const drinks = document.querySelectorAll(".drink");

menuImage.addEventListener("mouseover", function () {
  gsap.to(".menuImage", {scale:1.1, duration:1})
})

menuImage.addEventListener("mouseout", function () {
  gsap.to(".menuImage", {scale:1, duration:1})
})

drinks.forEach(function (item) {
  item.addEventListener("mouseover", function() {
    gsap.to(item, {scale:1.08, duration:1})
  })
  item.addEventListener("mouseout", function() {
    gsap.to(item, {scale:1, duration:1})
  })
})

const next = document.querySelector("#next");
const back = document.querySelector("#back");
let slides = document.querySelectorAll(".frame");
let index = 0;

next.addEventListener("click", function() {
  slides[index].classList.remove("active");
  index++;
  if(index > slides.length-1) {
    index = 0;
  }
  slides[index].classList.add("active");
})

back.addEventListener("click", function() {
  slides[index].classList.remove("active");
  index--;
  if(index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add("active");
})


