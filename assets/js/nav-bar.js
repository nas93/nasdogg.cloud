var navBar = document.getElementById("nav-links-mobile");

console.log(navBar.style.right);

function showMenu()
{
    if (navBar.style.right === "0")
    {
        navBar.style.right = "-200px";
    } else
    {
        navBar.style.right = "0";
    }
}
function hideMenu()
{
    navBar.style.right = "-200px";
}