let regexInput031 = document.querySelector("#rifqi")
let validationText031 = document.querySelector("#rifqi-validation-text")

const REGULAR_EXPRESSION031 = new RegExp("/^\d+$/");

regexInput031.addEventListener("input", function() {
    validationText031.innerHTML = REGULAR_EXPRESSION031.test(regexInput031.value) ? "Valid" : "Invalid"
})