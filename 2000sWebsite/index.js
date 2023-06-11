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
document.getElementById("tableOfContents").setAttribute("visible", false)
document.getElementById("tableToggler").addEventListener("click", function () {
  if (document.getElementById("tableOfContents").getAttribute("visible") === "true") { 
    document.getElementById("tableOfContents").setAttribute("visible", false) 
    document.getElementById("tableToggler").children[0].classList.add("fa-rotate-270") 
    document.getElementById("tableToggler").children[0].classList.remove("fa-rotate-90")
  } else { 
    document.getElementById("tableOfContents").setAttribute("visible", true)  
    document.getElementById("tableToggler").children[0].classList.add("fa-rotate-90")
    document.getElementById("tableToggler").children[0].classList.remove("fa-rotate-270")
  }
});
