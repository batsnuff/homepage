
  const welcome = () => {
    console.log("Witam wszystkich, którzy zaglądają do terminalu 😁");
  };

  welcome();

  //Function to toggle theme in page
  const toggleTheme = () => {
    let body = document.querySelector(".body");
    let themeName = document.querySelector(".themeName");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      themeName.innerText = "jasny";
    } else {
      themeName.innerText = "ciemny";
    }
  };

  // Add an event listener to the button
  let button = document.querySelector(".js-button");
  button.addEventListener("click", toggleTheme);

  // Function to toggle the visibility of the photo
  const disablePhoto = () => {
    let photoElement = document.querySelector(".pic");

    if (photoElement) {
      photoElement.style.display =
        photoElement.style.display === "none" ? "" : "none";
    } else {
      console.log("Nie znaleziono elementu o klasie 'pic'.");
    }
  };

  // Add an event listener to the button
  let toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", disablePhoto);
  // Change buttonText after click
toggleButton.addEventListener("click", function() {
  toggleButton.innerText = toggleButton.innerText === "Przywróć avatar" ? "Ukryj avatar" : "Przywróć avatar";
});

  (function () {
    let cpr = document.getElementById("copyright");
    cpr.innerHTML =
      "&copy; 2022 - " +
      new Date().getFullYear() +
      " BATSNUFF - All Rights Reserved.";
  })();

