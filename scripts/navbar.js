var dirs = ["/", "/projects/", "/about/"];
var names = ["Home", "My Projects", "About Me"];
var navbar = document.getElementById("navbar");
var navbarHTML = navbar.innerHTML;
for(var i = 0; i < dirs.length; i++)
{
    navbarHTML += "<a class=\"";
    navbarHTML += window.location.pathname === dirs[i] ? "active" : "inactive";
    navbarHTML += "\" href=\"";
    navbarHTML += dirs[i];
    navbarHTML += "\">";
    navbarHTML += names[i];
    navbarHTML += "<\/a>";
}
navbar.innerHTML = navbarHTML;