const nav = document.querySelector("#menu_burger");
const open = document.querySelector("#open_menu");
const close = document.querySelector("#close_menu");
const menuList = document.querySelector(".menu_burger_ul");
const closeAll = document.querySelector(".main");
const clickIcon = document.querySelector(".projects_icon_question");
const clickIconDos = document.querySelector(".projects_icon_question_2");
const openDescription = document.getElementById("open_description");
const openDescriptionDos = document.getElementById("open_description_2");


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

clickIcon.addEventListener("click", () => {
   if (openDescription.style.display == 'flex') {
      openDescription.style.display = 'none';

   } else {
      openDescription.style.display = 'flex';
   }
})

clickIconDos.addEventListener("click", () => {
   if (openDescriptionDos.style.display == 'flex') {
      openDescriptionDos.style.display = 'none';

   } else {
      openDescriptionDos.style.display = 'flex';
   }
})

/* mode dark*/

function toggleMode(){

const bodyDark = document.querySelector(".body");
bodyDark.classList.toggle("body_dark");

const logoDark = document.querySelector(".logo");
logoDark.classList.toggle("logo_dark");

const openMenuDark = document.querySelector(".open_menu");
openMenuDark.classList.toggle("open_menu_dark");

const menuBurgerDark = document.querySelector(".menu_burger");
menuBurgerDark.classList.toggle("menu_dark");

const presentationDark = document.querySelector(".presentation_info_1");
presentationDark.classList.toggle("presentation_info_1_dark");

const presetationDarkTwo = document.querySelector(".presentation_info_2");
presetationDarkTwo.classList.toggle("presentation_info_2_dark");

const lastestProjects = document.querySelector(".projects_lastest_projects");
lastestProjects.classList.toggle("projects_lastest_projects_dark");

const projectsTitles = document.querySelectorAll(".projects_titles");
projectsTitles.forEach((title) => {
  title.classList.toggle("projects_titles_dark");
});

const projectsDescription = document.querySelectorAll(".projects_description");
projectsDescription.forEach((description) => {
  description.classList.toggle("projects_description_dark");
});

const contactLabels = document.querySelectorAll(".contact_form_label");
contactLabels.forEach((label) => {
  label.classList.toggle("contact_form_label_dark");
});

const projectsOne = document.querySelectorAll(".projects_box");
projectsOne.forEach((pOne)=>{
   pOne.classList.toggle("projects_box_dark");
})

const projectsPhoto= document.querySelectorAll(".projects_photo");
projectsPhoto.forEach((pPhoto)=>{
   pPhoto.classList.toggle("projects_photo_dark");
})

const contactMassage = document.querySelector(".contact_message_info_2");
contactMassage.classList.toggle("contact_message_info_2_dark");

const contactInput = document.querySelectorAll(".contact_form_input");
contactInput.forEach((input) => {
   input.classList.toggle("contact_form_input_dark");
 });

const contactTextarea = document.querySelector(".contact_form_textarea");
contactTextarea.classList.toggle("contact_form_textarea_dark");

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
 });

const iconMoon = document.querySelector(".menu_moon");
iconMoon.classList.toggle("moon_dark");

}

let openModeDark = document.getElementById("moon_dark");
openModeDark.addEventListener("click", toggleMode);

/*Form submission.*/

const submission= document.querySelector(".contact_button_1");

submission.addEventListener("click", ()=>{

   const name = document.querySelector("#text").value.trim();
   const email = document.querySelector("#email").value.trim();

   if(name !=="" && email !==""){
      Swal.fire({
         text: 'Message sent successfully.',
         icon: 'success',
         iconColor: '#33272a',
         color: '#33272a',
         background:'#faeee7',
         confirmButtonColor: '#fa709a',
       });
   }else{
      Swal.fire({
         text: 'Complete the form to continue.',
         icon: 'error',
         iconColor: '#33272a',
         color: '#33272a',
         background:'#faeee7',
         confirmButtonColor: '#fa709a',
      });
   }
});