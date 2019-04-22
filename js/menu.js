
// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-item');

//Set initial State of Menu
let showMenu = false;
// var menuVisibility = document.getElementsByClassName(".menu-btn");

menuBtn.addEventListener('click', toggleMenu);
// if (menuVisibility.style.visibility === "visible" ){
    menuNav.addEventListener('click', toggleMenu);
// }

// Function to handle the menu
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));

        //set menu State
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'))

        //Set Menu State
        showMenu = false;
    }
    
}



