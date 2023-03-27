function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav_container_link_mobile") {
        x.className += " responsive";
    } else {
        x.className = "nav_container_link_mobile";
    }
}