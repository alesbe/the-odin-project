/*
  HTML elements
*/
let displaySmall = document.getElementById("result__small");
let displayBig = document.getElementById("result__big");

const btnClear = document.getElementById("btn__C");
const btnPow = document.getElementById("btn__pow");
const btnDel = document.getElementById("btn__del");
const btnDiv = document.getElementById("btn__/");

const btn7 = document.getElementById("btn__7");
const btn8 = document.getElementById("btn__8");
const btn9 = document.getElementById("btn__9");
const btnMult = document.getElementById("btn__x");

const btn4 = document.getElementById("btn__4");
const btn5 = document.getElementById("btn__5");
const btn6 = document.getElementById("btn__6");
const btnSub = document.getElementById("btn__-");

const btn1 = document.getElementById("btn__1");
const btn2 = document.getElementById("btn__2");
const btn3 = document.getElementById("btn__3");
const btnAdd = document.getElementById("btn__+");

const btn0 = document.getElementById("btn__0");
const btnDot = document.getElementById("btn__.");
const btnEqual = document.getElementById("btn__=");

/*
  Consts and vars
*/



/*
  Functions
*/

const displayResultSmall = (text) => { displaySmall.textContent = text }
const displayResultBig = (text) => { displayBig.textContent = text; }

/*
  Event listeners
*/
btn0.addEventListener('click', () => {console.log('a')});

btnClear.onclick = () => {console.log('b')}