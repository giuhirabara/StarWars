const carousel = document.querySelector(".shows__list"),
firstImg = carousel.querySelectorAll("img") [0],
arrowButtons = document.querySelectorAll(".shows__tabs button");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth =firstImg.clientWidth + 14; 

arrowButtons.forEach(button => {
    button.addEventListener("click", () => {
       if (button.id == "left") {
            carousel.scrollLeft -= firstImgWidth;
       } else {
        carousel.scrollLeft += firstImgWidth;
       }
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

document.addEventListener('DOMContentLoaded', function() {
    const resumes = document.querySelectorAll('[data-resume-question]');

    for (let i = 0; i < resumes.length; i++) {
        resumes[i].addEventListener('click', abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'resumos__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);