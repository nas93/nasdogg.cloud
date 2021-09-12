const parallax = document.getElementById("main-page");
const cloud_parallax = document.getElementById("cloud-parallax");


window.addEventListener("scroll", function()
{

    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
    cloud_parallax.style.right = offset * 1 + "%";

});
