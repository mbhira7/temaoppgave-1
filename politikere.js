const s1 = document.getElementById("s-1");
const s2 = document.getElementById("s-2");
const s3 = document.getElementById("s-3");
const s4 = document.getElementById("s-4");
const s5 = document.getElementById("s-5");
const s6 = document.getElementById("s-6");
const s7 = document.getElementById("s-7");

const slides = document.getElementById("slides");
const scrollContainer = document.getElementById("scroll-container");

const w = 991;

s1.onclick = function() {
    scrollContainer.scrollTo(0, 0);
}

s2.onclick = function() {
   
    scrollContainer.scrollTo(w, 0);
}

s3.onclick = function() {
    scrollContainer.scrollTo(w * 2, 0);
}

s4.onclick = function() {
    scrollContainer.scrollTo(w * 3, 0);
}

s5.onclick = function() {
    scrollContainer.scrollTo(w * 4, 0);
}

s6.onclick = function() {
    scrollContainer.scrollTo(w * 5, 0);
}

s7.onclick = function() {
    scrollContainer.scrollTo(w * 6 , 0);
}