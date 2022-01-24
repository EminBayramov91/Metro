const modal = document.getElementsByClassName("footer-modal")[0],
    btn = document.getElementsByClassName("footer-popup__btn")[0],
    closeBtn = document.getElementsByClassName("footer-modal__close")[0];
null !== btn && (btn.onclick = function () {
    modal.style.display = "block"
}), null !== closeBtn && (closeBtn.onclick = function () {
    modal.style.display = "none"
}), null !== modal && (window.onclick = function (e) {
    e.target == modal && (modal.style.display = "none")
}), document.querySelectorAll(".headerAcc").forEach((e => e.addEventListener("click", (() => {
    const t = e.parentNode;
    t.classList.contains("header-active") ? t.classList.remove("header-active") : (document.querySelectorAll(".header-list").forEach((e => e.classList.remove("header-active"))), t.classList.toggle("header-active"))
}))));
const menuBtn = document.getElementsByClassName("header-menu")[0],
    menuContent = document.getElementsByClassName("header-items")[0],
    menuClose = document.getElementsByClassName("header-menu__close")[0];
null !== menuBtn && (menuBtn.onclick = function () {
    menuContent.style.display = "block"
}), null !== menuClose && (menuClose.onclick = function () {
    menuContent.style.display = "none"
}), document.querySelectorAll(".faq-accordion").forEach((e => e.addEventListener("click", (() => {
    const t = e.parentNode;
    t.classList.contains("faq-active") ? t.classList.remove("faq-active") : (document.querySelectorAll(".faq-item").forEach((e => e.classList.remove("header-active"))), t.classList.toggle("faq-active"))
}))));
let countDownDate = new Date("April 15, 2022 00:00:00").getTime(), countDownFunction = setInterval((function () {
    let e = (new Date).getTime(), t = countDownDate - e, n = Math.floor(t / 864e5), l = Math.floor(t % 864e5 / 36e5),
        o = Math.floor(t % 36e5 / 6e4), c = Math.floor(t % 6e4 / 1e3);
    null !== document.getElementById("days") && (document.getElementById("days").innerHTML = n + "  ", null !== document.getElementById("hours") && (document.getElementById("hours").innerHTML = l + "  "), null !== document.getElementById("minutes") && (document.getElementById("minutes").innerHTML = o + "  "), null !== document.getElementById("seconds") && (document.getElementById("seconds").innerHTML = c + "  "), t <= 0 && (clearInterval(countDownFunction), null !== document.getElementById("days") && (document.getElementById("days").innerHTML = "0  "), null !== document.getElementById("hours") && (document.getElementById("hours").innerHTML = "0  "), null !== document.getElementById("minutes") && (document.getElementById("minutes").innerHTML = "0  "), null !== document.getElementById("seconds") && (document.getElementById("seconds").innerHTML = "0  ")))
}));

function filterSelection(e) {
    let t, n;
    for (t = document.querySelectorAll(".filterDiv"), "all" == e && (e = ""), n = 0; n < t.length; n++) removeClass(t[n], "show"), t[n].className.indexOf(e) > -1 && addClass(t[n], "show")
}

function addClass(e, t) {
    let n, l, o;
    for (l = e.className.split(" "), o = t.split(" "), n = 0; n < o.length; n++) -1 == l.indexOf(o[n]) && (e.className += " " + o[n])
}

function removeClass(e, t) {
    let n, l, o;
    for (l = e.className.split(" "), o = t.split(" "), n = 0; n < o.length; n++) for (; l.indexOf(o[n]) > -1;) l.splice(l.indexOf(o[n]), 1);
    e.className = l.join(" ")
}

if (filterSelection("all"), null !== document.querySelector(".myBtnContainer")) {
    let e = [...document.querySelector(".myBtnContainer").children];
    for (let t = 0; t < e.length; t++) e[t].addEventListener("click", (function () {
        for (let t = 0; t < e.length; t++) e[t].classList.remove("report-active");
        this.classList.add("report-active")
    }))
}
let labelContainer = document.querySelectorAll(".event-select-checkbox"), labels = [...labelContainer];
for (let e = 0; e < labels.length; e++) labels[e].addEventListener("click", (function () {
    for (let e = 0; e < labels.length; e++) labels[e].classList.remove("active-content");
    this.classList.add("active-content")
}));
if (null !== document.querySelector(".report-gallery")) {
    function openGallery() {
        document.querySelector(".report-gallery").classList.toggle("open-gallery")
    }

    function closeGallery() {
        document.querySelector(".report-gallery").classList.remove("open-gallery")
    }
}
let q, platformsAccordion = document.getElementsByClassName("platforms-accordion");
for (q = 0; q < platformsAccordion.length; q++) platformsAccordion[q].addEventListener("click", (function () {
    this.classList.toggle("platforms-block__item__name-active");
    const e = this.nextElementSibling;
    "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
}));
if (document.querySelector(".checkbox-content-one") && null !== document.querySelector(".checkbox-img__one"))function openDataOne() {
    document.querySelector(".checkbox-content-one").classList.toggle("active-content"), document.querySelector(".checkbox-img__one").classList.toggle("active-vector")
}
if (document.querySelector(".checkbox-content-two") && null !== document.querySelector(".checkbox-img__two"))function openDataTwo() {
    document.querySelector(".checkbox-content-two").classList.toggle("active-content"), document.querySelector(".checkbox-img__two").classList.toggle("active-vector")
}
if (document.querySelector(".checkbox-content-three") && null !== document.querySelector(".checkbox-img__three"))function openDataThree() {
    document.querySelector(".checkbox-content-three").classList.toggle("active-content"), document.querySelector(".checkbox-img__three").classList.toggle("active-vector")
}
if (document.querySelector(".checkbox-content-four") && null !== document.querySelector(".checkbox-img__four"))function openDataFour() {
    document.querySelector(".checkbox-content-four").classList.toggle("active-content"), document.querySelector(".checkbox-img__four").classList.toggle("active-vector")
}
let p, speakersPopup = document.getElementsByClassName("speakers-popup-btn");
for (p = 0; p < speakersPopup.length; p++) speakersPopup[p].addEventListener("click", (function () {
    this.classList.toggle("active");
    let e = this.nextElementSibling;
    "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
}));

function activeEventFilter() {
    null !== document.querySelector(".event-select") && document.querySelector(".event-select").classList.toggle("event-active"), null !== document.querySelector(".speakers-select") && document.querySelector(".speakers-select").classList.toggle("speakers-active")
}

let elementRotation = 0;
const element = document.querySelector(".philosophy-swiper-next-img"), rotateElement = () => {
    elementRotation += 360, element.style.transform = `rotate(${elementRotation}deg)`
}, mobileAccordion = document.getElementsByClassName("platforms-block__head");
let j;
for (j = 0; j < mobileAccordion.length; j++) mobileAccordion[j].addEventListener("click", (function () {
    this.classList.toggle("platforms-block__item__name-active");
    const e = this.nextElementSibling;
    "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
}));
//# sourceMappingURL=script.js.map

const menuDot = document.getElementsByClassName('header-items__btn')[0]
const dotOpen = document.getElementsByClassName('header-list__accord-two')[0]
const menuDotClose = document.getElementsByClassName('hederItemBtn')[0]

menuDot.onclick = function () {
    dotOpen.style.display = 'block'
    menuDot.style.display = 'none'
    menuDotClose.style.display = 'block'
}
menuDotClose.onclick = function () {
    dotOpen.style.display = 'none'
    menuDotClose.style.display = 'none'
    menuDot.style.display = 'block'
}

