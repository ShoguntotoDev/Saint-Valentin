function clickfunc() {
    window.location.href = "page-yes.html"
}

function increaseSize() {
    const yesButton = document.querySelector(".yes");

    yesButton.style.width = (yesButton.offsetWidth + 70) + 'px';
    yesButton.style.height = (yesButton.offsetHeight + 70) + 'px';

    const currentFontSize = window.getComputedStyle(yesButton).fontSize;
    const newFontSize = parseInt(currentFontSize) + 20 + 'px';
    yesButton.style.fontSize = newFontSize
}