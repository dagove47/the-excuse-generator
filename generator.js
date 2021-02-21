let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

let mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click", function () {
    let excuse = "";
    excuse += who[generatorRandom(who.length, 0)] + " ";
    excuse += action[generatorRandom(action.length, 0)] + " ";
    excuse += what[generatorRandom(what.length, 0)] + " ";
    excuse += when[generatorRandom(when.length, 0)];
    let p = document.getElementById("excuse");
    p.innerHTML = excuse;
});

function generatorRandom(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}