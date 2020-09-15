let b = prompt('Введите число');

let p = '';
let w = 0;
colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'f'];
c = 0;
s = `#`;

for (j = 0; j < 6; j++) {
    c = Math.floor(Math.random() * colors.length);
    s += colors[c];

}

for (i = 1; i <= b; i++) {
    p += `<div id="b${i}" style="position: relative; top: -${w}px; left: ${w}px; background:${s}"></div>`
    w += 50;
}

console.log(s);

console.log(p)

box.innerHTML += p;