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

