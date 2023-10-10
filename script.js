//Get all accordion items from the DOM
const items = document.querySelectorAll(".accordion-item");

//Loop through each accordion item
items.forEach((item) => {
  //Add click event to each item
  item.addEventListener("click", () => {
    //Loop through each accordion item again
    items.forEach(item => {
      //Remove active class from all items
      item.classList.remove("item-active");
    });
    //Add active class to clicked item
    item.classList.add("item-active");
  });
});

const cube = document.querySelector(".cube2");
let mouseX = 0;
let mouseY = 0;
const rotationValue = 200;

const handleMouseMove = (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
  rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
  rotateY = (mouseX / window.innerWidth - 0.5) * rotationValue;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);


      

document.addEventListener("DOMContentLoaded", function () {

    var configuration = {
        autoFlipMode: false,
        autoFlipDelay: 1500,
        pauseMouseOver: true,
        cardsShadow: true,
        buttonShadow: true,
        transitionDuration: 700,
        rotationMode: "sequential",
        sequentialDelay: 600,
        cardWidth: 150,
        cardHeight: 180,
        spacingHorizontal: 15,
        spacingVertical: 15,
        cardsToShow: 3,
        cardsPerRow: 3,
        startFromIndex: 1,
        buttonBackwardHtml: "&#9668;",
        buttonForwardHtml: "&#9658;"
    };

    flipping.init('flipping_cards', configuration);

});


let myDiv = document.getElementById("cube");
//Detect touch device
function isTouchDevice() {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
const move = (e) => {
  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  //set left and top of div based on mouse position
  myDiv.style.left = x - 800 + "px";
  myDiv.style.top = y - 150 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
  move(e);
});

/* Event fired on the drag target */
document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
  document.getElementById("demo").innerHTML = "Started to drag the p element.";
});

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("cube").innerHTML = "The p element was dropped";
});

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [

];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 8 + "px";
    circle.style.top = y - 8 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.1;
    y += (nextCircle.y - y) * 0.1;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


