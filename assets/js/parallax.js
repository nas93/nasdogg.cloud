const parallaxMain = document.getElementById("main-page");
const parallaxC = document.getElementById("contact");


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallaxMain.style.backgroundPositionY = offset * 0.7 + "px";
    parallaxC.style.backgroundPositionY = offset * 0.7 + 800+ "px";
});
