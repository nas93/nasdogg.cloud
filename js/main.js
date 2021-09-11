const parallax = document.getElementById("main");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

var nav_links_mobile = document.getElementById("nav-links-mobile");
    function showMenu() {
        nav_links_mobile.style.right = "0";
    }
    function hideMenu() {
        nav_links_mobile.style.right = "-200px";
    }