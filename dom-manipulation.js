
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
feedbackInput.id = "feedback"; 
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

const heading = document.createElement('h1');
heading.textContent = '🌍 World Countries List';
document.body.appendChild(heading);

const populationBtn = document.createElement('button');
populationBtn.textContent = 'Top 10 Populations';
document.body.appendChild(populationBtn);

const languageBtn = document.createElement('button');
languageBtn.textContent = 'Top 10 Languages';
document.body.appendChild(languageBtn);

const chart = document.createElement('div');
chart.id = 'chart';
document.body.appendChild(chart);

function createBar(name, value) {
  const bar = document.createElement('div');
  bar.className = 'bar';

  const label = document.createElement('span');
  label.textContent = name;

  const fill = document.createElement('div');
  fill.className = 'fill';
  fill.style.width = `${value * 0.01}px`;
  fill.textContent = value.toLocaleString();

  bar.appendChild(label);
  bar.appendChild(fill);
  chart.appendChild(bar);
}

populationBtn.addEventListener('click', () => {
  chart.innerHTML = '';
  const sorted = countries_data.sort((a, b) => b.population - a.population);
  const top10 = sorted.slice(0, 10);

  top10.forEach(country => {
    createBar(country.name, country.population);
  });
});

languageBtn.addEventListener('click', () => {
  chart.innerHTML = '';

  const langCount = {};
  countries_data.forEach(country => {
    country.languages.forEach(lang => {
      langCount[lang] = (langCount[lang] || 0) + 1;
    });
  });

  const sortedLang = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  sortedLang.forEach(([lang, count]) => {
    createBar(lang, count);
  });
});


const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

const title = document.createElement("h1");
title.id = "title";
title.textContent = "Calculate the Weight of an Object on a Planet";
container.appendChild(title);

const inputGroup = document.createElement("div");
inputGroup.className = "input-group";

const input = document.createElement("input");
input.type = "number";
input.id = "mass";
input.placeholder = "Mass in Kilograms";

const select = document.createElement("select");
select.id = "planet";
select.innerHTML = `
  <option value="">--select planet--</option>
  <option value="Mercury">Mercury</option>
  <option value="Venus">Venus</option>
  <option value="Earth">Earth</option>
  <option value="Mars">Mars</option>
  <option value="Jupiter">Jupiter</option>
  <option value="Saturn">Saturn</option>
  <option value="Uranus">Uranus</option>
  <option value="Neptune">Neptune</option>
`;

const button = document.createElement("button");
button.textContent = "Calculate Weight";

inputGroup.appendChild(input);
inputGroup.appendChild(select);
inputGroup.appendChild(button);
container.appendChild(inputGroup);

const result = document.createElement("div");
result.id = "result";
container.appendChild(result);

const planetImg = document.createElement("img");
planetImg.id = "planet-image";
container.appendChild(planetImg);


const countriesHeading = document.createElement('h1');
countriesHeading.textContent = '🌍 World Countries List';
countriesHeading.style.marginTop = "40px";
document.body.appendChild(countriesHeading);

const countryInfo = document.createElement("p");
countryInfo.id = "info";
countryInfo.textContent = "Total Countries: 0";
document.body.appendChild(countryInfo);

const countryControls = document.createElement("div");
countryControls.className = "controls";
countryControls.innerHTML = `
  <button id="startsWith">STARTING WORD</button>
  <button id="includes">SEARCH WITH ANY WORD</button>
  <input type="text" id="search" placeholder="Search Country..." />`;
document.body.appendChild(countryControls);

const countriesContainer = document.createElement("div");
countriesContainer.id = "countries-container";
countriesContainer.className = "countries-grid";
document.body.appendChild(countriesContainer);

