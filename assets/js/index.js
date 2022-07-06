//lets start with linking the socials
function fb(){
    window.location.href = 'https://www.facebook.com/beingartifex/'
}

let btnFb = document.getElementById('fb');
btnFb.addEventListener('click', fb);

let btnFb2 = document.getElementById('fb2');
btnFb2.addEventListener('click', fb);





function insta(){
    window.location.href = 'https://www.instagram.com/beingartifex/'
}

let btnInsta = document.getElementById('insta');
btnInsta.addEventListener('click', insta);

let btnInsta2 = document.getElementById('insta2');
btnInsta2.addEventListener('click', insta);




function TwT(){
    window.location.href = 'https://twitter.com/beingartifex?lang=en'
}

let btnTwitter = document.getElementById('twitter');
btnTwitter.addEventListener('click', TwT);

let btnTwitter2 = document.getElementById('twitter2');
btnTwitter2.addEventListener('click', TwT);




// now the buttons in footer sections

let btnTwitter3 = document.getElementById('twitter3');
btnTwitter3.addEventListener('click', TwT);

let btnInsta3 = document.getElementById('insta3');
btnInsta3.addEventListener('click', insta);

let btnFb3 = document.getElementById('fb3');
btnFb3.addEventListener('click', fb);


function linkedIN(){
    window.location.href = 'https://www.linkedin.com/company/beingartifex/?originalSubdomain=in';
}

let btnLin = document.getElementById('lin');
btnLin.addEventListener('click', linkedIN);


function readMore(){
    window.location.href = 'http://bfxskillathon.live/';
}
// let btnReadMore = document.getElementById('read-more');
// btnReadMore.addEventListener('click', readMore);

document.getElementById('read-more').addEventListener('click', readMore);





//the customer review slider

let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    //this is to stop it at the edge
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})


//now we move on to the menu



//now we look at the side menu

//now lets deal with the forms