const parallaxMain = document.getElementById("main-page");


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallaxMain.style.backgroundPositionY = offset * 0.7 + "px";
});
