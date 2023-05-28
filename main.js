// Navbar transparent navbar ve white navbar değişikliklerini sağlayan code
const navEl = document.querySelector(".navbar");
const navTexts = document.querySelectorAll(".text");
const navbarBrand = document.querySelector(".navbar-brand");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 75) {
    navEl.classList.add("navbar-scrolled");
    navTexts.forEach((navText) => {
      navText.classList.remove("text-white");
      navText.classList.remove("cool-link-white");
      navText.classList.add("cool-link");
    });
    navbarBrand.classList.remove("text-white");
  } else if (window.scrollY < 75) {
    navEl.classList.remove("navbar-scrolled");
    navTexts.forEach((navText) => {
      navText.classList.add("text-white");
      navText.classList.add("cool-link-white");
      navText.classList.remove("cool-link");
    });
    navbarBrand.classList.add("text-white");
  }
});



// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
    };
