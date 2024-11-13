const profile = document.getElementsByClassName("profile");
const menuContainer = document.getElementsByClassName("menu-container");

let menuOpen = false;
document.body.addEventListener("click", (e) => {
  if (e.target.className == "floating-a") {
    menuContainer[0].style.display = "block";
  } else if (e.target === profile[0] && menuOpen == false) {
    menuContainer[0].style.display = "block";
    menuOpen = true;
  } else if (menuOpen == true) {
    menuContainer[0].style.display = "none";
    menuOpen = false;
  }
});
