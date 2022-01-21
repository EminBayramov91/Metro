// popup for footer
const modal = document.getElementsByClassName("footer-modal")[0]
const btn = document.getElementsByClassName("footer-popup__btn")[0]
const closeBtn = document.getElementsByClassName("footer-modal__close")[0]

btn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// header accordion
document.querySelectorAll('.headerAcc').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('header-active')) {
            parent.classList.remove('header-active');
        }else {
            document
                .querySelectorAll('.header-list')
                .forEach((child) => child.classList.remove('header-active'))
            parent.classList.toggle('header-active');
        }
    })
)

// header burger
const menuBtn = document.getElementsByClassName('header-menu')[0]
const menuContent = document.getElementsByClassName('header-items')[0]
const menuClose = document.getElementsByClassName('header-menu__close')[0]
menuBtn.onclick = function () {
    menuContent.style.display = "block"
}
menuClose.onclick = function () {
    menuContent.style.display = "none"
}

//faq accordion
document.querySelectorAll('.faq-accordion').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('faq-active')) {
            parent.classList.remove('faq-active');
        }else {
            document
                .querySelectorAll('.faq-item')
                .forEach((child) => child.classList.remove('header-active'))
            parent.classList.toggle('faq-active');
        }
    })
)

// home timer
var countDownDate = new Date("April 15, 2022 00:00:00").getTime()
var countDownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML =
        days + "  " ;
    document.getElementById("hours").innerHTML =
        hours + "  " ;
    document.getElementById("minutes").innerHTML =
        minutes + "  " ;
    document.getElementById("seconds").innerHTML =
        seconds + "  " ;
    if (distance <= 0) {
        clearInterval(countDownFunction);
        document.getElementById("days").innerHTML =
            0 + "  " ;
        document.getElementById("hours").innerHTML =
            0 + "  " ;
        document.getElementById("minutes").innerHTML =
            0 + "  " ;
        document.getElementById("seconds").innerHTML =
            0 + "  " ;
    }
})




filterSelection("all")
function filterSelection(c) {
    let x, i;
    x = document.querySelectorAll(".filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

let btnContainer = document.querySelector('.myBtnContainer');
let btns = [...btnContainer.children]
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        for (let c = 0; c < btns.length; c++) {
            btns[c].classList.remove("report-active")
        }
        this.classList.add("report-active")
    });
}

let swiper5 = new Swiper(".mySwiper5", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    activeElement: document.querySelector('.report-pic').id,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});


function openGallery() {
    document.querySelector('.report-gallery').classList.toggle('open-gallery')
}

function closeGallery() {
    document.querySelector('.report-gallery').classList.remove('open-gallery')
}
