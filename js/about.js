!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WEBPACK_GLOBAL=t():e.WEBPACK_GLOBAL=t()}(this,function(){"use strict";var e,t={};return e=t,"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0}),document.addEventListener("DOMContentLoaded",e=>{{const t=document.body,o=t.querySelector("[data-menu]"),n=t.querySelectorAll("[data-menu-toggle]");o&&n.length&&n.forEach(e=>{e.addEventListener("click",()=>{t.classList.toggle("no-scroll"),o.classList.toggle("active")})})}}),t});