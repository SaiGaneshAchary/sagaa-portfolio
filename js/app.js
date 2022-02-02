let menu = document.querySelector(".nav");
let nav = document.querySelector("nav");
let logo = document.querySelector(".logo");
let opt = document.querySelectorAll("click");
let loader = document.querySelector(".loader");
let cursor = document.querySelector(".cursor");
let scrollBar = document.querySelector(".scrollbar");
let msg = document.getElementById("message");
//loader funcion
function hide() {
    loader.style.display = "none";
}
window.addEventListener("load", function () {
    setTimeout(hide, 4000);
})
// scrollbar width
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progress = (window.pageYOffset/totalHeight)*100;
    scrollBar.style.height = progress+"%";
}
//cursor
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = "left:" + e.clientX + "px; top:" + e.clientY + "px;";
})
//nav bar function
menu.onclick = function () {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    logo.classList.toggle("active");
}
document.addEventListener("scroll", function () {
    menu.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
})
//imaage1 hover
let interval;
let img = document.querySelector(".dp");
let changed = document.querySelector("#change");
let bg;
function changeImage() {
    let images =
        [
            "images/img1.jpeg",
            "images/img2.jpeg",
            "images/img3.jpeg",
            "images/img4.jpeg",
            "images/img5.jpeg",
            "images/img7.jpeg",
            "images/img15.jpeg",
            "images/img16.jpeg",
        ];
    bg = images[Math.floor(Math.random() * images.length)];
    changed.setAttribute("src", bg);
}
img.addEventListener("mouseover", function () {
    interval = setInterval(changeImage, 200);
})
img.addEventListener("mouseout", function () {
    clearInterval(interval);
    changed.setAttribute("src", bg);
})
window.addEventListener("DOMContentLoaded", changeImage);
// image2 hover 
let interval2;
let img2 = document.querySelector(".dp2");
let changed2 = document.getElementById("change2");
let bg2;
function changeImage2() {
    let images2 =
        [
            "images/img8.jpeg",
            "images/img9.jpeg",
            "images/img10.jpeg",
            "images/img11.jpeg",
            "images/img12.jpeg",
            "images/img13.jpeg",
            "images/img14.jpeg",
            "images/img17.jpeg",
            "images/img18.jpeg",
            "images/img19.jpeg",
            "images/img20.jpeg",
            "images/img21.jpeg",
            "images/img22.jpeg",
            "images/img23.jpeg",
        ];
    bg2 = images2[Math.floor(Math.random() * images2.length)];
    changed2.setAttribute("src", bg2);
}
img2.addEventListener("mouseover", function () {
    interval2 = setInterval(changeImage2, 200);
})
img2.addEventListener("mouseout", function () {
    clearInterval(interval2);
    changed2.setAttribute("src", bg2);
})
window.addEventListener("DOMContentLoaded", changeImage2);
// mousemove event
// function parallax(e) {
//     this.querySelectorAll(".layer").forEach(function (layer) {
//         let speed = layer.getAttribute("data-speed");
//         let x = (window.innerWidth - e.pageX * speed) / 100;
//         let y = (window.innerHeight - e.pageY * speed) / 100;
//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`
//     })
// }
// document.addEventListener("mousemove", parallax);
