
const toggledarkmodebtn = document.querySelector('#moon'); 
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");

// Check if the user has previously selected the dark mode
const darkMode = localStorage.getItem("darkMode");
if (darkMode === "enabled") {
  document.body.classList.add("dark-mode");
}

// Add event listener to the button
toggleDarkModeButton.addEventListener("click", () => {

   toggledarkmodebtn.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});


