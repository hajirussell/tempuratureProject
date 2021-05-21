"use strict";

window.onload = function() {
    const celsiusBtn = document.getElementById("celsiusBtn");
    celsiusBtn.onclick = celsiusBtnClicked;
}

function celsiusBtnClicked() {
    const fahrenheitDegreesFeild = document.getElementById("fahrenheitDegrees");
    let fahrenheitDegrees = Number(fahrenheitDegreesFeild.value);

    let fToC = (fahrenheitDegrees - 32) * 5/9;

    const celsiusAnswerFeild = document.getElementById("celsiusAnswer");
    celsiusAnswerFeild.value = fToC.toFixed(0);

}
