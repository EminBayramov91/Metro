// speaker accordion
var acc = document.getElementsByClassName("speakers-popup-btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panelTwo = this.nextElementSibling;
        if (panelTwo.style.display === "block") {
            panelTwo.style.display = "none";
        } else {
            panelTwo.style.display = "block";
        }
    });
}