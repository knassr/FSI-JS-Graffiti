
// Select some elements...
let header = document.querySelector('#page-header');
header.style.textAlign = "left";

let dogImages = document.querySelectorAll(".dog-image");
let dogName = document.querySelectorAll(".dog-name");
let footer = document.querySelector(".footer");

for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px';
}

for (let i = 0; i < dogImages.length; i++) {
    dogName[i].style.textAlign = 'left';
}

footer.style.color = "green";
footer.style.borderStyle = 'solid';




