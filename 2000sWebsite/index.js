let navToggler = document.getElementById("navToggler");
let nav = document.getElementById("nav");
nav.setAttribute("visible", false);
navToggler.addEventListener("click", function () {
  if (navToggler.children[0].classList.contains("fa-rotate-180")) {
    navToggler.children[0].classList.remove("fa-rotate-180");
    nav.setAttribute("visible", false);
  } else {
    nav.setAttribute("visible", true);
    navToggler.children[0].classList.add("fa-rotate-180");
  }
});
document.getElementById("tableOfContents").setAttribute("visible", false);
document.getElementById("tableToggler").addEventListener("click", function () {
  if (document.getElementById("tableOfContents").getAttribute("visible") === "true") {
    document.getElementById("tableOfContents").setAttribute("visible", false);
    document.getElementById("tableToggler").children[0].classList.add("fa-rotate-270");
    document.getElementById("tableToggler").children[0].classList.remove("fa-rotate-90");
  } else {
    document.getElementById("tableOfContents").setAttribute("visible", true);
    document.getElementById("tableToggler").children[0].classList.add("fa-rotate-90");
    document.getElementById("tableToggler").children[0].classList.remove("fa-rotate-270");
  }
});
//sorry was in a rush
document.getElementById("htmlContentToggler").addEventListener("click", function () {
  document.getElementById("htmlContent").style.display = "block"; 
  document.getElementById("htmlContentToggler").innerText = "HTML"
});
document.getElementById("cssContentToggler").addEventListener("click", function () {
  document.getElementById("cssContent").style.display = "block"; 
  document.getElementById("cssContentToggler").innerText = "CSS"
});
document.getElementById("jsContentToggler").addEventListener("click", function () {
  document.getElementById("jsContent").style.display = "block"; 
  document.getElementById("jsContentToggler").innerText = "JS"
});
