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

// accordion
const acc = document.getElementsByClassName("faq-accordion");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("faq-active");
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



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
