
const mainDiv = document.createElement("div");
mainDiv.className = "main";

const mainHeading = document.createElement("h1");
mainHeading.id = "head";
mainHeading.textContent = "JAVA-SCRIPT DOM";
mainDiv.appendChild(mainHeading);

const subDiv = document.createElement("div");
subDiv.textContent = "DOCUMENT OBJECT MODEL";
mainDiv.appendChild(subDiv);

const introPara1 = document.createElement("p");
introPara1.className = "write";
introPara1.textContent =
  "It is a way for JavaScript to access and change HTML content, structure and style of a webpage. It turns your HTML page into a tree-like structure.";
mainDiv.appendChild(introPara1);

const introPara2 = document.createElement("p");
introPara2.className = "write";
introPara2.textContent =
  "When a web page is loaded the browser creates a document object model (DOM) of the page.";
mainDiv.appendChild(introPara2);

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Show Details";
toggleBtn.id = "togglebtn";
document.body.appendChild(toggleBtn);

const togglePara = document.createElement("p");
togglePara.textContent = "You are so special you are progressing everyday.";
togglePara.id = "toggleText";
togglePara.style.display = "none"; 
document.body.appendChild(togglePara);

toggleBtn.addEventListener("click", function () {
  if (togglePara.style.display === "none") {
    togglePara.style.display = "block";
    toggleBtn.textContent = "Hide Details";
  } else {
    togglePara.style.display = "none";
    toggleBtn.textContent = "Show Details";
  }
});


const clickBtn = document.createElement("button");
clickBtn.id = "mybtn";
clickBtn.textContent = "TAP HERE";
mainDiv.appendChild(clickBtn);

const eventHeading = document.createElement("h1");
eventHeading.id = "eve";
eventHeading.textContent = "Event Listeners";
mainDiv.appendChild(eventHeading);

const dblPara = document.createElement("p");
dblPara.className = "parg";
dblPara.textContent = "Double Click";
mainDiv.appendChild(dblPara);

const eventPara = document.createElement("p");
eventPara.className = "parg";
eventPara.textContent =
  "To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.";
mainDiv.appendChild(eventPara);

const dblBtn = document.createElement("button");
dblBtn.id = "dblbtn";
dblBtn.textContent = "DOUBLE CLICK";
mainDiv.appendChild(dblBtn);

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "username";
nameInput.placeholder = "Enter your Name";
nameInput.style.marginRight = "10px";
nameInput.style.padding = "10px";
mainDiv.appendChild(nameInput);

const mouseBtn = document.createElement("button");
mouseBtn.id = "mousebtn";
mouseBtn.textContent = "CLICK ME";
mouseBtn.style.padding = "10px 20px";
mouseBtn.style.backgroundColor = "#007bff";
mouseBtn.style.color = "#fff";
mouseBtn.style.border = "none";
mouseBtn.style.borderRadius = "5px";
mainDiv.appendChild(mouseBtn);

const feedbackHeading = document.createElement("h1");
feedbackHeading.textContent = "FEEDBACK USING BLUR EVENT";
mainDiv.appendChild(feedbackHeading);

const feedbackInput = document.createElement("input");
feedbackInput.id = "mass";
feedbackInput.placeholder = "Your feedback";
mainDiv.appendChild(feedbackInput);

const resetBtn = document.createElement("input");
resetBtn.type = "button";
resetBtn.value = "Reset";
resetBtn.id = "resetbtn";
mainDiv.appendChild(resetBtn);

const liveHeading = document.createElement("h1");
liveHeading.textContent = "LIVE TYPING DEMO";
mainDiv.appendChild(liveHeading);

const liveInput = document.createElement("input");
liveInput.id = "live";
liveInput.placeholder = "Type something live....";
mainDiv.appendChild(liveInput);

const liveResult = document.createElement("p");
liveResult.id = "liveResult";
liveResult.style.fontWeight = "bold";
mainDiv.appendChild(liveResult);

document.body.appendChild(mainDiv);


// const solarSystem = document.createElement('div');
// solarSystem.className = 'solar-system';
// document.body.appendChild(solarSystem);

// const sun = document.createElement('div');
// sun.className = 'sun';
// solarSystem.appendChild(sun);

// const planetsData = [
//    { name: 'Mercury', orbitClass: 'mercury-orbit', planetClass: 'mercury', orbitSize: 120, duration: '4s', color: 'grey' },
//    {name: 'venus', orbitClass: 'venus-orbit', planetClass: 'venus', orbitSize: 140, duration: '8s', color: 'yellow'},
//    {name: 'earth', orbitClass: 'earth-orbit', planetClass: 'earth', orbitSize: 160, duration: '10s', color: 'blue'},
//    {name: 'mars', orbitClass: 'mars-orbit', planetClass: 'mars', orbitClass: 180, duration: '12s', color: 'red'},
//    {name: 'jupiter', orbitClass: 'jupiter-orbit', planetClass: 'jupiter', orbitSize: 200, duration: '14s', color: 'orange'},
//    {name: 'saturn', orbitClass: 'saturn-orbit', planetClass: 'saturn', orbitSize: 220, duration: '16s', color: 'brown'},
//    {name: 'uranus', orbitClass: 'uranus-orbit', planetClass: 'uranus', orbitSize: 240, duration: '18s', color: 'green'},
//    {name: 'neptune', orbitClass: 'neptune-orbit', planetClass: 'neptune', orbitSize: 260, duration: '20s', color: 'blue'},
//     ];

//     planetsData.forEach(data => {
//   const orbit = document.createElement('div');
//   orbit.classList.add('orbit', data.orbitClass);
//   orbit.style.width = data.orbitSize + "px"
//   orbit.style.height = data.orbitSize + "px"
//   orbit.style.animationDuration = data.duration;
    
//   const planet = document.createElement('div');
//   planet.classList.add('planet', data.planetClass);
//   planet.setAttribute('data-name', data.name);

//   orbit.appendChild(planet);
//   solarSystem.appendChild(orbit);
//   });
  
//   const tooltip = document.createElement('div');
// tooltip.id = 'tooltip';
// document.body.appendChild(tooltip);
