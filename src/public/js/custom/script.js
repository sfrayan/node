/* Globals */
const url = document.location;

function has_class(element, cls){
    return element.classList.contains(cls);
}

/* Navbar */
const navbar = document.getElementById("nav");

function setActiveLink(){
    var target = url.toString();

    for(let i=0; i<navbar.children.length; i++){
        var element = navbar.children[i];

        if(has_class(element, "nav-link") && (element.href == target || element.href == "/" + target)){
            element.classList.add("active");
            element.removeAttribute("href");
            element.style["background-color"] = "rgb(250, 250, 250)";
            element.style.color = "black";
            break;
        }
    };
}

window.onload = () => {
    setActiveLink();
}

/* Custom Js */
