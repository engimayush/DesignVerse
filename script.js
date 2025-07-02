
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

  const mousebtn = document.querySelector("#mousebtn");
  mousebtn.addEventListener("mouseenter", function () {
    const name = document.querySelector("#username").value;

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

  
  document.body.addEventListener("keypress", e => {
    alert(e.keyCode);
  });

  
  const resetBtn = document.getElementById("resetbtn");
  resetBtn.addEventListener("click", function () {
    document.getElementById("head").textContent = "JAVA-SCRIPT DOM";
    document.body.style.backgroundColor = "#f0f0f0";
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
});





