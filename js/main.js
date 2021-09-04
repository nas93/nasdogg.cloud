const parallax = document.getElementById("top");

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})