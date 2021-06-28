'use strict'
let flag = document.querySelectorAll('.flag');
let wrapper = document.getElementById('flags');

let hover_effect = function() {
    wrapper.classList.add('hovered');
}

let unhover_effect = function() {
    wrapper.classList.remove('hovered');
}

for(let k of flag) {
    k.addEventListener('mouseenter', hover_effect);
    k.addEventListener('mouseleave', unhover_effect);
}
