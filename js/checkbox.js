// checkbox
let labelContainer = document.querySelectorAll('.event-select-checkbox');
let labels = [...labelContainer.children]
for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function() {
        // btns.forEach(btn => {
        //     btn.removeClass("active")
        // })
        for (let c = 0; c < labels.length; c++) {
            labels[c].classList.remove("active-content")
        }
        // let current = document.getElementsByClassName("active");
        // current[0].className = current[0].className.replace(" active", "");\
        this.classList.add("active-content")
        // this.className += " active";
    });
}

function openData() {
    document.querySelector('.event-select-content').classList.toggle('active-content')
    document.querySelector('.event-select-img').classList.toggle('active-vector')
}