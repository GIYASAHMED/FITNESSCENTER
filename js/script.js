// ================= classes section ===============


const class_btns = document.querySelector(".class-btns"); 
const class_btn = document.querySelectorAll(".class-btn");
const class_img_elem = document.querySelectorAll(".img-overlay");

class_btns.addEventListener("click", (e) => {
    const class_btn_clicked = e.target;
    //console.log(class_btn_clicked);
    class_btn.forEach((curElem) => curElem.classList.remove("p-data-active"));
    class_btn_clicked.classList.add("p-data-active");

    //==============to find the number in data attr

    const class_num = class_btn_clicked.dataset.classNum;
    console.log(class_num);

    const img_active = document.querySelectorAll(`.class-btn--${class_num}`);
    //console.log(img_active);
    class_img_elem.forEach((curElem) => curElem.classList.add("time-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove("time-not-active"));
});




//========================Time table secton Start====================

const p_btns = document.querySelector(".schedule-day"); 
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    //console.log(p_btn_clicked);
    p_btn.forEach((curElem) => curElem.classList.add("p-btn-active"));
    p_btn_clicked.classList.remove("p-btn-active");

    //==============to find the number in data attr

    const btn_num = p_btn_clicked.dataset.btnNum;
    //console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    //console.log(img_active);
    p_img_elem.forEach((curElem) => curElem.classList.add("time-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove("time-not-active"));
});





// ========================smooth scrolling by JS ===================

const hero_section = document.querySelector(".hero");
const about_section = document.querySelector(".about-section");
const classes_section = document.querySelector(".classes-section");
const schedules_section = document.querySelector(".schedule-section");
const trainer_section = document.querySelector(".trainer-section");
const contact_section = document.querySelector(".contact-section");

document.querySelector(".home-link").addEventListener("click", () =>{
    hero_section.scrollIntoView({behavior: "smooth"});
});
document.querySelector(".about-link").addEventListener("click", () =>{
    about_section.scrollIntoView ({behavior:"smooth"});
});
document.querySelector(".classes-link").addEventListener("click", () =>{
    classes_section.scrollIntoView ({behavior:"smooth"});
});
document.querySelector(".schedule-link").addEventListener("click", () =>{
    schedules_section.scrollIntoView ({behavior:"smooth"});
});
document.querySelector(".trainer-link").addEventListener("click", () =>{
    trainer_section.scrollIntoView ({behavior:"smooth"});
});
document.querySelector(".contact-link").addEventListener("click", () =>{
    contact_section.scrollIntoView ({behavior:"smooth"});
});


// ====================== Open close navbar ===================

const mobile_nav = document.querySelector(".mobile-navbar-btn");
//console.log(mobile_nav);
const nav_header = document.querySelector(".container");

const nav_list = document.querySelector(".navbar-list");

const toggleNavbar = () =>{
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());

const hide = () =>{
    nav_header.classList.toggle("active");
};
nav_list.addEventListener("click", () => hide());










// ===========Intersection Observer =======================

//const section_hero = document.querySelector(".hero");

//const observer = new IntersectionObserver(
    //(entries) => {
    //const ent = entries[0];
    //ent.isIntersecting == false
    //?document.body.classList.add("sticky")
    //:document.body.classList.remove("sticky");
//},
//{
    //root: null,
    //rootMargin: "-80px",
    //threshold: 0,   
//});
//observer.observe(section_hero);
//............ after adding this got some problem----------



