const drop_menu = document.querySelector(".drop_down_content");
const menu = document.querySelector(".drop")
const arrow = document.querySelector("span");

menu.onClick = function(){
    show_list();
}
function show_list(){
    drop_menu.classList.add("active");
    // drop_menu.style.display === "block";
}
console.log("apple")
console.log(menu)
console.log(drop_menu)
