const feature_menu = document.querySelector("#feature-Dropdown");
const company_menu = document.getElementById("company-dropdown");



function myFunction() {
    feature_menu.classList.toggle("active");
    company_menu.classList.remove("active");
  }
function function2(){
    company_menu.classList.toggle("active");
    feature_menu.classList.remove("active");
}


const add = document.querySelector(".mobile-nav-icon-menu");
const mobile_nav = document.querySelector(".mobile-nav-menu")
const close = document.querySelector(".mobile-nav-icon-close")
const body = document.querySelector("body")
console.log(body);
const toogleNavbar = ()=>{
  mobile_nav.classList.add("show")
  body.classList.add("fixed-position");
}
const removeClass = ()=>{
  mobile_nav.classList.remove("show")
  body.classList.remove("fixed-position");
}
console.log(close);
add.addEventListener('click', ()=> toogleNavbar())
close.addEventListener('click', ()=> removeClass())
