
var body = document.querySelector('body');
var nav = document.querySelector('nav');
var links = document.querySelectorAll('.link');
var sections = document.querySelectorAll('section');
var reads = document.querySelectorAll('.bttn_done');
var btn = document.querySelector('.bttn');
var nvba = document.querySelector('#navba');



var btn_done = document.querySelector('.btn_done');
var modal_wrapper = document.querySelector('.modal_wrapper');
var shadow = document.querySelector('.shadow');
var close = document.querySelector('.material-symbols-sharp');
var texts_4 = document.querySelectorAll('.text-4');

btn_done.addEventListener("click", function(){
    modal_wrapper.classList.add("active");
    nvba.style.display = 'none';
});

close.addEventListener("click", function(){
    modal_wrapper.classList.remove("active");
    nvba.style.display = 'flex';
});


function darkmode() {
    btn.innerHTML = 'whitemode';
    body.style.background = 'black';
    body.style.color = 'white';
    btn.style.color = 'white';
    nav.style.background = 'black';
    links.forEach( link=> {
        link.style.opacity = '0.5';
      link.style.color = 'white';
    });
    texts_4.forEach(text_4 => {
        text_4.style.background = 'rgb(34, 33, 33)';
        text_4.style.color = 'whitesmoke';
        
    });
    reads.forEach(read => {
        read.style.background = 'black';
        read.style.color = 'whitesmoke';
        
    });
    
    sections.forEach(section => {
        section.style.background = 'rgb(34, 33, 33)';
    });
   
};

function lightmode() {
    body.style.background = 'white';
    body.style.color = 'black';
    btn.style.color = 'black';
    nav.style.background = 'white';
    links.forEach( link=> {
        link.style.opacity = '1';
      link.style.color = 'black';
    });
 
    texts_4.forEach(text_4 => {
        text_4.style.background = 'whitesmoke';
        text_4.style.color = 'rgb(34, 33, 33)';
        
    });
    reads.forEach(read => {
        read.style.background = 'whitesmoke';
        read.style.color = 'black';
        
    });
    
    btn.innerHTML = 'darkmode';
    sections.forEach(section => {
        section.style.background = 'whitesmoke';
    });
   
};

function changeMode(){
    if (btn.innerHTML === 'whitemode') {
        lightmode()
    } else {
        darkmode()
    };
};