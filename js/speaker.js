// checkbox
let labelContainer = document.querySelectorAll('.speakers-select-checkbox');
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

function openDataOne() {
    document.querySelector('.checkbox-content-one').classList.toggle('active-content')
    document.querySelector('.checkbox-img__one').classList.toggle('active-vector')
}
function openDataTwo() {
    document.querySelector('.checkbox-content-two').classList.toggle('active-content')
    document.querySelector('.checkbox-img__two').classList.toggle('active-vector')
}
function openDataThree() {
    document.querySelector('.checkbox-content-three').classList.toggle('active-content')
    document.querySelector('.checkbox-img__three').classList.toggle('active-vector')
}


