const btns = document.querySelectorAll('.calculator .keys .btn');
const clear = document.querySelector('.calculator .keys .btn.cl');
const equal = document.querySelector('.calculator .keys .btn.eq');
const inp = document.querySelector('.calculator input[type="text"]');
let nanBool = false;
let dot = true;

btns.forEach((item) => {
    item.onclick = () => {
        if(!Number.isNaN(Number(item.innerText))) {
            inp.value += item.innerText;
            nanBool = true;
            dot === true;
        } else if(nanBool && item.innerText !== '.') {
            inp.value += item.innerText;
            nanBool = false;
            dot = true
        } else if(nanBool && item.innerText == '.' && dot) {
            inp.value += item.innerText;
            dot = false;
            nanBool = false;
        }
    }
})

equal.onclick = () => {
    const x = inp.value.slice(-1);
    if(inp.value) {
        if(!Number.isNaN(+x)) {
            inp.value = eval(inp.value);
        } else {
            inp.value = eval(inp.value.slice(0,-1));
        }
    }
}

clear.onclick = () => {
    inp.value = ''
    nanBool = false;
    dot = true;
}