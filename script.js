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

  const mass = document.getElementById("mass");
  mass.addEventListener("blur", function () {
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
const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
  planet.addEventListener('mouseenter', e => {
    tooltip.textContent = e.target.getAttribute('data-name');
    tooltip.style.display = 'block';
  });

  planet.addEventListener('mousemove', e => {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  });

  planet.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
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

 