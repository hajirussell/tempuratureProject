"use strict";

window.onload = function() {
    const fahrenheitBtn = document.getElementById("fahrenheitBtn");
    fahrenheitBtn.onclick = fahrenheitBtnClicked;
}

function fahrenheitBtnClicked() {
    const celsiusDegreesField = document.getElementById("celsiusDegrees");
    let celsiusDegrees = Number(celsiusDegreesField.value);

    let cToF = (celsiusDegrees * 9/5) + 32;

    const fahrenheitAnswerField = document.getElementById("fahrenheitAnswer");
    fahrenheitAnswerField.value = cToF.toFixed(0);
}