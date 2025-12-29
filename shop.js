document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.close-btn').style.display = 'none';
    document.querySelector('.open-btn').style.display = 'inline';
});

/* =========================
   STICKY HEADER ON SCROLL
========================= */
const mainMenu = document.querySelector('.main-head');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainMenu.classList.add('slidedown'); // Add sticky class
    } else {
        mainMenu.classList.remove('slidedown'); // Remove sticky class
    }
});

/* =========================
   MOBILE MENU TOGGLE
========================= */
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navList = document.querySelector('.nav-list');

openBtn.addEventListener('click', () => {
    navList.classList.add('show');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline';
});

closeBtn.addEventListener('click', () => {
    navList.classList.remove('show');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline';
});



/* =========================
   OPTIONAL: Close menu when clicking outside
========================= */
document.addEventListener('click', (e) => {
    if (
        navList.classList.contains('show') && 
        !navList.contains(e.target) &&
        e.target !== openBtn
    ) {
        navList.classList.remove('show');
        closeBtn.style.display = 'none';
        openBtn.style.display = 'inline';
    }
});

/* =========================
 ===== Cards SECTION ===== 
========================= */

$('.buy').click(function(){
  $('.bottom').addClass("clicked");
});

$('.remove').click(function(){
  $('.bottom').removeClass("clicked");
});