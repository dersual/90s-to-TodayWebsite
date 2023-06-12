window.onscroll = function () {
  var currentScrollPos = window.scrollY;

  if (currentScrollPos > 100) {
    document.querySelector("header").setAttribute("scrolledFrom", true);
  } else {
    document.querySelector("header").setAttribute("scrolledFrom", false);
  }
};

let mobileNavButton = document.getElementById("toggler_mobileNav");
mobileNavButton.addEventListener("click", function () {
  let el = this.querySelector("i");
  if (el.classList.contains("fa-x")) {
    el.classList.remove("fa-x");
    el.classList.add("fa-bars");
    document.querySelector("aside").setAttribute("visible", false);
    document.getElementById("overlay_mobileNav").setAttribute("visible", false);
    document.querySelector("body").style.overflow = "auto";
  } else {
    el.classList.add("fa-x");
    el.classList.remove("fa-bars");
    document.getElementById("overlay_mobileNav").setAttribute("visible", true);
    document.querySelector("aside").setAttribute("visible", true);
    document.querySelector("body").style.overflow = "hidden";
  }
});
Array(...document.getElementsByClassName("tableOfContents")).forEach((element) => {
  let arrow = element.children[0].querySelector("i");
  element.addEventListener("mouseover", function () {
    arrow.classList.add("fa-rotate-180");
  });
  element.addEventListener("mouseleave", function () {
    arrow.classList.remove("fa-rotate-180");
  });
});
Array(...document.getElementsByClassName("dropDownContent")).forEach((element) => {
  Array(...element.children).forEach((link) => {
    link.addEventListener("click", function () {
      mobileNavButton.querySelector("i").classList.remove("fa-x");
      mobileNavButton.querySelector("i").classList.add("fa-bars");
      document.querySelector("aside").setAttribute("visible", false);
      document.getElementById("overlay_mobileNav").setAttribute("visible", false);
      document.querySelector("body").style.overflow = "auto";
    });
  });querySelector("i")
});
