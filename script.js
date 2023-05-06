const dropDown1 = document.querySelector(".dropdownbtn1");
const dropDown2 = document.querySelector(".dropdownbtn2");
const dropDown_menu1 = document.querySelector(".dropdown1");
const dropDown_menu2 = document.querySelector(".dropdown2");

dropDown1.addEventListener("click",function(){
    dropDown_menu1.classList.toggle("hide");
});


dropDown2.addEventListener("click",function(){
    dropDown_menu2.classList.toggle("hide");
});
