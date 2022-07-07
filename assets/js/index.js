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
let btnBfst = document.getElementById('breakfast');
let btnBrunch = document.getElementById('brunch');
let btnDnr = document.getElementById('dinner');

let name1 = document.getElementById('dishName1');
let dishImg1 = document.getElementById('dishImage1');
let dishDesc1 = document.getElementById('dishDesc1');
let dishPrice1 = document.getElementById('dishPrice1');

let name2 = document.getElementById('dishName2');
let dishImg2 = document.getElementById('dishImage2');
let dishDesc2 = document.getElementById('dishDesc2');
let dishPrice2 = document.getElementById('dishPrice2');

let name3 = document.getElementById('dishName3');
let dishImg3 = document.getElementById('dishImage3');
let dishDesc3 = document.getElementById('dishDesc3');
let dishPrice3 = document.getElementById('dishPrice3');

let name4 = document.getElementById('dishName4');
let dishImg4 = document.getElementById('dishImage4');
let dishDesc4 = document.getElementById('dishDesc4');
let dishPrice4 = document.getElementById('dishPrice4');

function brunch(){
    name1.innerText = 'Jumbo Lump Crab Stack';
    dishDesc1.innerText = 'Jumbo lump crab meat is prized for its impressive size, bright white color, and exquisite taste.';
    dishPrice1.innerText = '$12.49';
    dishImg1.innerHTML = ' <img src="assets/images/brunch1.jpg" class=".dish-img">'

    name2.innerText = 'Jamaican Chicken Wings';
    dishDesc2.innerText = 'These amazing jerk chicken wings are a perfect balance of sweet, sour, salty, and spicy.';
    dishPrice2.innerText = '$15.99';
    dishImg2.innerHTML = ' <img src="assets/images/brunch2.jpg" class=".dish-img">'

    name3.innerText = 'Bahamian Seafood Chowder';
    dishDesc3.innerText = 'In a very large soup pot or Dutch oven, cook the bacon with olive oil over medium heat. When bacon is...';
    dishPrice3.innerText = '$10.99';
    dishImg3.innerHTML = ' <img src="assets/images/brunch3.jpg" class=".dish-img">'

    name4.innerText = 'Grilled Chicken & Tropical Fruit on Mixed Greens';
    dishDesc4.innerText = 'Delicious grilled chicken and tropical fruit on mixed greens salad from Bahama ... The Famous Columbia 1905 Salad Recipe';
    dishPrice4.innerText = '$12.99';
    dishImg4.innerHTML = ' <img src="assets/images/brunch4.jpg" class=".dish-img">'


    document.getElementById('brunch').style.color = 'red';
    document.getElementById('brunch').style.borderColor = 'red';
    document.getElementById('breakfast').style.color = 'gray';
    document.getElementById('breakfast').style.borderColor = '#c8c0c0';
    document.getElementById('dinner').style.color = 'gray';
    document.getElementById('dinner').style.borderColor = '#c8c0c0';
}



function dinner(){
    name1.innerText = 'Grilled Top Sirlion Steak';
    dishDesc1.innerText = 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.';
    dishPrice1.innerText = '$18.99';
    dishImg1.innerHTML = ' <img src="assets/images/dinner1.jpg" class=".dish-img">'

    name2.innerText = 'Steak Oscar';
    dishDesc2.innerText = 'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.';
    dishPrice2.innerText = '$23.99';
    dishImg2.innerHTML = ' <img src="assets/images/dinner2.jpg" class=".dish-img">'

    name3.innerText = 'Skirt Steak Churrasco';
    dishDesc3.innerText = 'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.';
    dishPrice3.innerText = '$20.99';
    dishImg3.innerHTML = ' <img src="assets/images/dinner3.jpg" class=".dish-img">'

    name4.innerText = 'Grilled Beef Steak';
    dishDesc4.innerText = 'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.';
    dishPrice4.innerText = '$25.99';
    dishImg4.innerHTML = ' <img src="assets/images/dinner4.jpg" class=".dish-img">'


    document.getElementById('brunch').style.color = 'gray';
    document.getElementById('brunch').style.borderColor = '#c8c0c0';
    document.getElementById('breakfast').style.color = 'gray';
    document.getElementById('breakfast').style.borderColor = '#c8c0c0';
    document.getElementById('dinner').style.color = 'red';
    document.getElementById('dinner').style.borderColor = 'red';
}



function breakfast(){
    name1.innerText = 'Warm Spinach Dip & Chips';
    dishDesc1.innerText = 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.';
    dishPrice1.innerText = '$10.a9';
    dishImg1.innerHTML = ' <img src="assets/images/breakfast1.webp" class=".dish-img">'

    name2.innerText = 'Key Wast Machos';
    dishDesc2.innerText = 'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.';
    dishPrice2.innerText = '$11.99';
    dishImg2.innerHTML = ' <img src="assets/images/breakfast2.webp" class=".dish-img">'

    name3.innerText = 'Crispy Onions Rings';
    dishDesc3.innerText = 'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.';
    dishPrice3.innerText = '$11.99';
    dishImg3.innerHTML = ' <img src="assets/images/breakfast3.webp" class=".dish-img">'

    name4.innerText = 'GLobster & Shrimp Quesadilla';
    dishDesc4.innerText = 'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.';
    dishPrice4.innerText = '$13.99';
    dishImg4.innerHTML = ' <img src="assets/images/breakfast4.webp" class=".dish-img">'


    document.getElementById('brunch').style.color = 'gray';
    document.getElementById('brunch').style.borderColor = '#c8c0c0';
    document.getElementById('breakfast').style.color = 'red';
    document.getElementById('breakfast').style.borderColor = 'red';
    document.getElementById('dinner').style.color = 'gray';
    document.getElementById('dinner').style.borderColor = '#c8c0c0';
}


btnBfst.addEventListener('click', breakfast);
btnBrunch.addEventListener('click', brunch);
btnDnr.addEventListener('click', dinner);


//now we look at the side menu

//now lets deal with the forms