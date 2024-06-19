import "@fortawesome/fontawesome-free/css/all.css";



document.getElementById("demo").addEventListener("click", toogleMenu);
var menu = document.getElementById('mobile-menu')

function toogleMenu(){
    menu.classList.toggle('d-none')
}