function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function comingSoonFun(sts) {
    if (sts == 'project'){
       window.alert("This project is expected to be hosted soon.");
    } else if(sts == 'contactForm') {
        window.alert("This feature is under maintanance. Please feel free to contact me via social media.");
    } else {
        window.alert("Oops... Something went wrong..!");
    }
}