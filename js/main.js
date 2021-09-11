const parallax = document.getElementById("main-page");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

var navBar = document.getElementById("nav-links-mobile");
    function showMenu() {
        navBar.style.right = "0";
    }
    function hideMenu() {
        navBar.style.right = "-200px";
    }