let regexAngka = document.getElementById("angka");
let validationAngka = document.getElementById("angka-validation");
let legendAngka = document.getElementById("legend-angka");

let regexHp = document.getElementById("hp");
let validationHp = document.getElementById("hp-validation");
let legendHp = document.getElementById("legend-hp");

let regexHxh = document.getElementById("hxh");
let validationHxh = document.getElementById("hxh-validation");
let legendHxh = document.getElementById("legend-hxh");

let regexNos = document.getElementById("nos");
let validationNos = document.getElementById("nos-validation");
let legendNos = document.getElementById("legend-nos");

let regexGform = document.getElementById("gform");
let validationGform = document.getElementById("gform-validation");
let legendGform = document.getElementById("legend-gform");

const REGEX_ANGKA = new RegExp("^\\d+$");
const REGEX_HP = new RegExp("^08\\d{10}$");
const REGEX_HXH = new RegExp("hxh\\s+mid");
const REGEX_NOS = new RegExp("^\\S+_\\S+$");
const REGEX_GFORM = new RegExp('^(?:https:\\/\\/docs\\.google\\.com\\/forms\\/d\\/e\\/[a-zA-Z0-9_-]+\\/viewform|https:\\/\\/forms\\.gle\\/[a-zA-Z0-9_-]+)$');

regexAngka.addEventListener("input", () => {
    validasi(regexAngka, validationAngka, REGEX_ANGKA, legendAngka);
});

regexHp.addEventListener("input", () => {
    validasi(regexHp, validationHp, REGEX_HP, legendHp);
});

regexNos.addEventListener("input", () => {
    validasi(regexNos, validationNos, REGEX_NOS, legendNos);
});

regexHxh.addEventListener("input", () => {
    validasi(regexHxh, validationHxh, REGEX_HXH, legendHxh);
});

regexGform.addEventListener("input", () => {
    validasi(regexGform, validationGform, REGEX_GFORM, legendGform);
});

function validasi(input, validation, regex, legend){
    if(input.value === ""){
        validation.innerHTML = "Validation message"
        validation.classList.add("text-slate-400");
        validation.classList.remove("text-red-500");
        validation.classList.remove("text-green-500");
        input.classList.remove("focus:border-red-500");
        legend.classList.remove("peer-focus:text-red-500");
        input.classList.remove("focus:border-green-500");
        legend.classList.remove("peer-focus:text-green-500");
        input.classList.add("focus:border-blue-500");
        legend.classList.add("peer-focus:text-blue-500");
    }else if(regex.test(input.value)){
        validation.classList.remove("text-slate-400");
        validation.classList.add("text-green-500");
        input.classList.add("focus:border-green-500");
        input.classList.remove("focus:border-blue-500");
        legend.classList.add("peer-focus:text-green-500");
        legend.classList.remove("peer-focus:text-blue-500");

        validation.classList.remove("text-red-500");        
        input.classList.remove("focus:border-red-500");
        legend.classList.remove("peer-focus:text-red-500");
        validation.innerHTML = "Valid";
    }else{
        validation.classList.remove("text-slate-400");
        validation.classList.add("text-red-500");
        input.classList.add("focus:border-red-500");
        input.classList.remove("focus:border-blue-500");
        legend.classList.add("peer-focus:text-red-500");
        legend.classList.remove("peer-focus:text-blue-500");

        legend.classList.remove("peer-focus:text-green-500");
        input.classList.remove("focus:border-green-500");
        validation.classList.remove("text-green-500");
        validation.innerHTML = "Invalid";
    }
}