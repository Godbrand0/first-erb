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
    let body = document.body;
    
    body.classList.toggle("white-theme");
    let button = document.getElementById('buttn');
    if (button.innerHTML == 'Darkmode') {
        button.innerHTML = 'whitemode';
    } else {
        button.innerHTML ='Darkmode';
    }
}