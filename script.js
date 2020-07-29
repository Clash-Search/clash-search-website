function mode() {
 // Mode change
  let element = document.body;
  element.classList.toggle("dark-mode");
  let navBar = document.getElementById("myTopnav");
  navBar.classList.toggle("dark-nav");


  // Changing text of the button 
  let change = document.getElementById("modeBTN");
  if (change.innerHTML == "Light mode ☀️") {
    change.innerHTML = "Dark mode 🌑";
  } else {
    change.innerHTML = "Light mode ☀️";
  }
}

// Responsive navbar
function navBar() {
  let bar = document.getElementById("myTopnav");
  if (bar.className === "topnav") {
    bar.className += " responsive";
  } else {
    bar.className = "topnav";
  }
}
