const boldBtn = document.getElementById('bold-btn')
const itaBtn = document.getElementById('italic-btn')
const underBtn = document.getElementById('under-btn')
const leftBtn = document.getElementById('align-left-btn')
const centerBtn = document.getElementById('align-center-btn')
const justifyBtn = document.getElementById('align-justify-btn')
const rightBtn = document.getElementById('align-right-btn')
const inpNumBtn = document.getElementById('inp-num')
const lowerCaseBtn = document.getElementById('case')
const colorBtn = document.getElementById('color-btn')
const textArea = document.getElementById('text-area')


let original;
let original2;
let isFont = false;
let isBg = false;


boldBtn.addEventListener('click', function () {
    if (!original || !original2) {
        original = window.getComputedStyle(textArea).fontWeight;
        original2 = window.getComputedStyle(boldBtn).backgroundColor;
    }
    if (isFont || isBg) {
        textArea.style.fontWeight = original;
        boldBtn.style.backgroundColor = original2
    } else {
        textArea.style.fontWeight = 'bold';
        boldBtn.style.backgroundColor = 'skyblue'
    }
    isBg = !isBg
    isFont = !isFont;

})
let original3;
let original4;
let isFont2 = false;
let isBg2 = false;
itaBtn.addEventListener('click', function () {

    if (!original3 || !original4) {
        original3 = window.getComputedStyle(textArea).fontStyle;
        original4 = window.getComputedStyle(itaBtn).backgroundColor;
    }
    if (isFont2 || isBg2) {
        textArea.style.fontStyle = original3;
        itaBtn.style.backgroundColor = original4;
    } else {
        textArea.style.fontStyle = 'italic';
        itaBtn.style.backgroundColor = 'skyblue'
    }
    isBg2 = !isBg2
    isFont2 = !isFont2;


})
let original5;
let original6;
let isFont3 = false;
let isBg3 = false;
underBtn.addEventListener('click', function () {
    if (!original5 || !original6) {
        original5 = window.getComputedStyle(textArea).textDecoration;
        original6 = window.getComputedStyle(underBtn).backgroundColor;
    }
    if (isFont3 || isBg3) {
        textArea.style.textDecoration = original5;
        underBtn.style.backgroundColor = original6;
    } else {
        textArea.style.textDecoration = 'underline';
        underBtn.style.backgroundColor = 'skyblue'
    }
    isBg3 = !isBg3
    isFont3 = !isFont3;

})

let original7;
let original8;
let isFont4 = false;
let isBg4 = false;

leftBtn.addEventListener('click', function () {
    if (!original7 || !original8) {
        original7 = window.getComputedStyle(textArea).textAlign;
        original8 = window.getComputedStyle(leftBtn).backgroundColor;
    }
    if (isFont4 || isBg4) {
        textArea.style.textAlign = original7;
        leftBtn.style.backgroundColor = original8;
    } else {
        textArea.style.textAlign = 'left';
        leftBtn.style.backgroundColor = 'skyblue'
    }

    isBg4 = !isBg4
    isFont4 = !isFont4;

})

let original9;
let original10;
let isFont5 = false;
let isBg5 = false;

centerBtn.addEventListener('click', function () {
    if (!original9 || !original10) {
        original9 = window.getComputedStyle(textArea).textAlign;
        original10 = window.getComputedStyle(centerBtn).backgroundColor;
    }
    if (isFont5 || isBg5) {
        textArea.style.textAlign = original9;
        centerBtn.style.backgroundColor = original10;
    } else {
        textArea.style.textAlign = 'center';
        centerBtn.style.backgroundColor = 'skyblue'
    }

    isBg5 = !isBg5
    isFont5 = !isFont5;
})
let original11;
let original12;
let isFont6 = false;
let isBg6 = false;

justifyBtn.addEventListener('click', function () {
    if (!original11 || !original12) {
        original11 = window.getComputedStyle(textArea).textAlign;
        original12 = window.getComputedStyle(justifyBtn).backgroundColor;
    }
    if (isFont6 || isBg6) {
        textArea.style.textAlign = original11;
        justifyBtn.style.backgroundColor = original12;
    } else {
        textArea.style.textAlign = 'justify';
        justifyBtn.style.backgroundColor = 'skyblue'
    }
    isBg6 = !isBg6
    isFont6 = !isFont6;

})

let original13;
let original14;
let isFont7 = false;
let isBg7 = false;
rightBtn.addEventListener('click', function () {
    if (!original13 || !original14) {
        original13 = window.getComputedStyle(textArea).textAlign;
        original14 = window.getComputedStyle(rightBtn).backgroundColor;
    }
    if (isFont7 || isBg7) {
        textArea.style.textAlign = original13;
        rightBtn.style.backgroundColor = original14;
    } else {
        textArea.style.textAlign = 'right';
        rightBtn.style.backgroundColor = 'skyblue'
    }
    isBg7 = !isBg7
    isFont7 = !isFont7;

})
inpNumBtn.addEventListener('click', function () {
    let fontSize = inpNumBtn.value + 'px';
    textArea.style.fontSize = fontSize;
})
lowerCaseBtn.addEventListener('click', function () {
    const originalText = textArea.value;
    const uppercaseText = originalText.toUpperCase();
    textArea.value = uppercaseText;
})
colorBtn.addEventListener('click', function () {
    let color = colorBtn.value;
    textArea.style.color = color;
})
