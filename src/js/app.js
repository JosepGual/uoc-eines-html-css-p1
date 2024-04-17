import '@fortawesome/fontawesome-free/css/all.css'
import {toggleMenu }  from './toggle-menu.js';

function toggleMenu(){
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('d-none')
}

export {toggleMenu}