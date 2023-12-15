function togglemenu() {
  const icon = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function seeMoreFunction() {
  var moreSection = document.getElementById("more");
  var seeMoreButton = document.getElementById("myBtn");
  var newSection = document.getElementById("contact");

  if (
    moreSection.style.display === "none" ||
    moreSection.style.display === ""
  ) {
    moreSection.style.display = "block";
    seeMoreButton.innerHTML = "See Less";
    location.href = "./#more";
    newSection.style.marginTop = "550px";
  } else {
    moreSection.style.display = "none";
    seeMoreButton.innerHTML = "See More";
    location.href = "./#project";
  }
}
