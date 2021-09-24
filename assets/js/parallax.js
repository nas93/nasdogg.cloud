const parallaxMain = document.getElementById("main-page");
const parallaxC = document.getElementById("contact");


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    console.log(offset);
    parallaxMain.style.backgroundPositionY = offset * 0.7 + "px";
    parallaxC.style.backgroundPositionY = offset * 0.7 + 2720 + "px";
});
