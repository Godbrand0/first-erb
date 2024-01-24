//let body = document.body;
//const button = document.querySelector('.bttn')

//changemode (()=> {
//button.addEventListener('click',() =>{
//    body.classList.toggle("white-theme");
//    if (button.innerHTML == 'Darkmode') {
//        button.innerHTML = 'whitemode';
//    } else {
//        button.innerHTML = 'Darkmode';
//    }
//}
//)});



var body = document.querySelector('body');
var btn = document.querySelector('.bttn');
var img = document.querySelector('.home-img');
var about = document.querySelector('.about-info');
var nav = document.querySelector('.navbar');
var links = document.querySelectorAll('.link');
var text = document.querySelector('.text');
var icons = document.querySelectorAll('.icon');
var version = document.querySelector('.version');
var icon_8 = document.querySelector('.icons-8');

function darkmode() {
    btn.innerHTML = 'whitemode';
    body.style.background = 'black';
    body.style.color = 'white';
    btn.style.color = 'white';
    img.style.opacity = '0.2';
    about.style.opacity = '0.6';
    nav.style.background = 'black';
    links.forEach( link=> {
        link.style.opacity = '0.5';
      link.style.color = 'white';
    }); 
    text.style.opacity = '0.6';
    icons.forEach(icon => {
        icon.style.color = 'white';
    });
    version.style.opacity = '0.6';
    icon_8.style.fill = 'white';
}

function lightmode() {
    body.style.background = 'white';
    body.style.color = 'black';
    btn.style.color = 'black';
    img.style.opacity = '1';
    about.style.opacity = '1';
    nav.style.background = 'white';
    links.forEach( link=> {
        link.style.opacity = '1';
      link.style.color = 'black';
    }); 
    text.style.opacity = '1';
    btn.innerHTML = 'darkmode';
    icons.forEach(icon => {
        icon.style.color = 'black';
    });
    version.style.opacity = '1';
    icon_8.style.fill = '';
}

function changeMode(){
    if (btn.innerHTML === 'whitemode') {
        lightmode()
    } else {
        darkmode()
    };
};