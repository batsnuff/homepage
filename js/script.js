{
  const welcome = () => {
  console.log("Witam wszystkich, którzy tutaj zaglądają 😁");
  }

  welcome()  

  let button = document.querySelector(".js-button");
  let body = document.querySelector(".body");
  let themeName = document.querySelector(".themeName");

  button.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      themeName.innerText = "jasny";
    } else {
      themeName.innerText = "ciemny";
    }
  });

  (function () {
    let cpr = document.getElementById("copyright");
    cpr.innerHTML =
      "&copy; 2022 - " +
      new Date().getFullYear() +
      " BATSNUFF - All Rights Reserved.";
  })();
}
