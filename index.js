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

function changeMode()
{
   let body = document.querySelector ('body');
   let link = document.querySelector ('.link');
    if (link.style.color== '#fff') {
        body.style.background = '#fff'
        link.style.color = '#191919'
    } else {
        body.style.background = '#191919'
        link.style.color = '#fff';
    }
}