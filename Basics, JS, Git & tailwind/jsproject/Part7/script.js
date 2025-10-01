// BOM it's just the browser window information (Browser object model)

// DOM
/* Basic two part of it 
1- Get the element
2- Listen to event */

document.getElementById("nav-about").addEventListener("click", () => {
  let paragraph = document.querySelector("#about p");
  paragraph.textContent = "We don't seem to offer much value";
});

document.getElementById("nav-service").addEventListener("click", function () {
  let service = document.getElementById("service");
  service.getElementsByTagName("p")[0].classList.toggle("highlight");
  for (let h2 of service.getElementsByTagName("h2")) {
    h2.classList.toggle("highlight");
  }
});

document.getElementById("readPortfolio").addEventListener("click", function () {
  let hiddenClass = document
    .getElementById("portfolio")
    .getElementsByClassName("moreContent");
  for (let moreContent of hiddenClass) {
    moreContent.classList.toggle("hidden");
  }
  this.textContent =
    this.textContent === "Read more" ? "Read less" : "Read more";
});

document.getElementById("addProject").addEventListener("click", function () {
  let newItem = document.createElement("p");
  newItem.textContent = "Leroem added by it";
  document.getElementById("portfolio").appendChild(newItem);
});

document.getElementById("removeProject").addEventListener("click", function () {
  document.getElementById("portfolio").lastElementChild.remove();
});

document.getElementById("nav-call").addEventListener("mouseover", function () {
  alert("098474878745");
});

document
  .getElementById("portfolio")
  .addEventListener("click", function (event) {
    if (event.target && event.target.matches("p")) {
      alert(event.target.textContent);
    }
  });

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  document.getElementById(
    "formData"
  ).textContent = `Your form Data is Name: ${name}, Email: ${email} and Message:${message}`;
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "Fully Loaded";
});
