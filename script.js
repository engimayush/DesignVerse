window.addEventListener('DOMContentLoaded', function () {

  const btn = document.getElementById("mybtn");
  btn.addEventListener("click", function () {
    document.getElementById("head").textContent = "One Tap!";
    document.body.style.backgroundColor = "pink";
    alert("Error");
  });

  const btn2 = document.getElementById("dblbtn");
  btn2.addEventListener("dblclick", function () {
    document.getElementById("head").textContent = "Double Tap!";
    document.body.style.backgroundColor = "yellow";
  });

  const mousebtn = document.getElementById("mousebtn");
  mousebtn.addEventListener("mouseenter", function () {
    const name = document.getElementById("username").value;

    let display = document.getElementById("displayName");
    if (!display) {
      display = document.createElement("p");
      display.id = "displayName";
      display.style.fontSize = "18px";
      display.style.color = "blue";
      document.body.appendChild(display);
    }

    display.textContent = `You entered: ${name}`;
    document.body.style.backgroundColor = "skyblue";
  });

  const feedbackInput = document.getElementById("feedback"); 
feedbackInput.addEventListener("blur", function () {
  alert("You left the feedback box!");
});


  const resetBtn = document.getElementById("resetbtn");
  resetBtn.addEventListener("click", function () {
    document.getElementById("head").textContent = "JAVA-SCRIPT DOM";
    document.body.style.backgroundColor = "#f0f0f0";

    const display = document.getElementById("displayName");
    if (display) display.textContent = "";

    document.getElementById("live").value = "";
    document.getElementById("liveResult").textContent = "";
  });

  const liveInput = document.getElementById("live");
  const liveResult = document.getElementById("liveResult");
  liveInput.addEventListener("input", function (e) {
    liveResult.textContent = e.target.value;
  });

  const head = document.getElementById("head");
  head.addEventListener("mouseover", function () {
    head.style.color = "blue";
  });
  head.addEventListener("mouseout", function () {
    head.style.color = "#4CAF50";
  });

  const toggleBtn = document.getElementById("togglebtn");
  const toggleText = document.getElementById("toggleText");

  toggleBtn.addEventListener("click", function () {
    if (toggleText.style.display === "none") {
      toggleText.style.display = "block";
      toggleBtn.textContent = "Hide Details";
    } else {
      toggleText.style.display = "none";
      toggleBtn.textContent = "Show Details";
    }
  });

  const chart = document.getElementById('chart');
  const popBtn = document.getElementById('population');
  const langBtn = document.getElementById('languages');

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

  popBtn.addEventListener('click', () => {
    chart.innerHTML = '';
    const sorted = countries_data.sort((a, b) => b.population - a.population);
    const top10 = sorted.slice(0, 10);
    top10.forEach(country => {
      createBar(country.name, country.population);
    });
  });
const massInput = document.getElementById("mass");
const planetSelect = document.getElementById("planet");
const resultBox = document.getElementById("result");
const planetImg = document.getElementById("planet-image");

const gravities = {
  Mercury: 3.7,
  Venus: 8.87,
  Earth: 9.81,
  Mars: 3.7,
  Jupiter: 24.8,
  Saturn: 10.44,
  Uranus: 8.69,
  Neptune: 11.15
};

const planetImages = {
  Mercury: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg',
  Venus: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
  Earth: 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
  Mars: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
  Jupiter: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg',
  Saturn: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
  Uranus: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg',
  Neptune: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg'
};


document.querySelector("button").addEventListener("click", () => {
  const mass = parseFloat(massInput.value);
  const planet = planetSelect.value;

  if (isNaN(mass) || mass <= 0) {
    resultBox.textContent = "❌ Please enter a valid mass!";
    planetImg.style.display = "none";
    return;
  }

  if (!planet) {
    resultBox.textContent = "❌ Please select a planet!";
    planetImg.style.display = "none";
    return;
  }

  const gravity = gravities[planet];
  const weight = (mass * gravity).toFixed(2);

  resultBox.textContent = `✅ The weight of the object on ${planet} is ${weight} N`;

  
  planetImg.src = planetImages[planet];
  planetImg.alt = planet;
  planetImg.style.display = "block";
});



  langBtn.addEventListener('click', () => {
    chart.innerHTML = '';
    const languageCount = {};

    countries_data.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language]) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });

    const sortedLangs = Object.entries(languageCount).sort((a, b) => b[1] - a[1]);
    const top10Langs = sortedLangs.slice(0, 10);

    top10Langs.forEach(([language, count]) => {
      createBar(language, count);
    });
  });
});

 const countrySearchInput = document.getElementById("search");
const startsWithBtn = document.getElementById("startsWith");
const includesBtn = document.getElementById("includes");
const countriesGrid = document.getElementById("countries-container");
const countryInfoText = document.getElementById("info");

let searchMode = "startsWith";

function displayCountries(list) {
  countriesGrid.innerHTML = "";
  countryInfoText.textContent = `Total Countries: ${list.length}`;
  
  list.forEach(country => {
    const div = document.createElement("div");
    div.className = "card";

    const img = document.createElement("img");
    img.src = country.flag;
    img.alt = country.name;
    img.style.width = "80px";

    const name = document.createElement("p");
    name.textContent = country.name.toUpperCase();

    div.appendChild(img);
    div.appendChild(name);

    countriesGrid.appendChild(div);
  });
}

displayCountries(countries);  

countrySearchInput.addEventListener("input", () => {
  const query = countrySearchInput.value.toLowerCase();

  const filtered = countries.filter(c =>
    searchMode === "startsWith"
      ? c.name.toLowerCase().startsWith(query)
      : c.name.toLowerCase().includes(query)
  );

  displayCountries(filtered);
});

startsWithBtn.addEventListener("click", () => searchMode = "startsWith");
includesBt

