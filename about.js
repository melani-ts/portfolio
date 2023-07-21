const nav = document.querySelector("#menu_burger");
const open = document.querySelector("#open_menu");
const close = document.querySelector("#close_menu");
const menuList = document.querySelector(".menu_burger_ul");
const closeAll = document.querySelector(".main");

open.addEventListener("click", () => {
   nav.classList.add("visible");
})

close.addEventListener("click", () => {
   nav.classList.remove("visible");
})

menuList.addEventListener("click", () => {
   nav.classList.remove("visible");
});

closeAll.addEventListener("click", () => {
   nav.classList.remove("visible");
});


function toggleModeAbout(){

   const bodyDark = document.querySelector(".body");
   bodyDark.classList.toggle("body_dark");

   const logoDark = document.querySelector(".logo");
   logoDark.classList.toggle("logo_dark");

   const openMenuDark = document.querySelector(".open_menu");
   openMenuDark.classList.toggle("open_menu_dark");

   const menuBurgerDark = document.querySelector(".menu_burger");
   menuBurgerDark.classList.toggle("menu_dark");

   const iconMoon = document.querySelector(".menu_moon");
   iconMoon.classList.toggle("moon_dark");

   const paragraph = document.querySelectorAll(".paragraph");
   paragraph.forEach((text) => {
      text.classList.toggle("paragraph_dark")
   });   

   const infoSapans = document.querySelectorAll(".about_span");
   infoSapans.forEach((spans) => {
      spans.classList.toggle("about_span_dark");
   })

   const titles = document.querySelectorAll(".about_titles");
      titles.forEach((title) =>{
         title.classList.toggle("about_titles_dark");
   })

   const redes = document.querySelector(".footer_redes_cv");
   redes.classList.toggle("footer_redes_cv_dark");

   const footerGithub = document.querySelector(".footer_redes_github");
   footerGithub.classList.toggle("footer_redes_github_dark");

   const footerLinkedin = document.querySelector(".footer_redes_linkedin");
   footerLinkedin.classList.toggle("footer_redes_linkedin_dark");

   const footerBy = document.querySelector(".footer_developed_by");
   footerBy.classList.toggle("footer_developed_by_dark");


   const menuDarkA = document.querySelectorAll(".menu_burger_a");
menuDarkA.forEach((menu) => {
   menu.classList.toggle("menu_dark_a");
 })
 
}


let openModeDark = document.getElementById("moon_dark");
openModeDark.addEventListener("click", toggleModeAbout);