timerId = setTimeout('nn()', [0], 2000)
txt = document.getElementById('cont')
url3 = document.getElementById('url2')
let p = 6,
    id = 1;
to = new Array(p);
to[1] = "https://www.tut.by ";
to[2] = "https://www.onliner.by ";
to[3] = "https://www.google.by ";
to[4] = "https://www.yandex.by ";
to[5] = "https://www.wht.by ";
to[6] = "https://www.mail.ru ";

let t = 6;
tx = new Array(t);
tx[1] = "Текст описание к картинке";
tx[2] = "Текст описание к картинке ";
tx[3] = "Текст описание к картинке";
tx[4] = "Текст описание к картинке";
tx[5] = "Текст описание к картинке";
tx[6] = "Текст описание к картинке";

let t1 = 6;
tx1 = new Array(t1);
tx1[1] = "Заголовок";
tx1[2] = "Заголовок";
tx1[3] = "Заголовок";
tx1[4] = "Заголовок";
tx1[5] = "Заголовок";
tx1[6] = "Заголовок";

function gg() {
    window.location.href = to[id]

}

function nn() {
    if (++id > p) id = 1;
    p1.src = `images/img${id}b.jpg`;
    txt.innerHTML = `<h3>${tx1[id]} ${id}</h3><a href="#"><span>${tx[id]} ${id}</span></a>`;
    url3.innerHTML = `${to[id].slice(12,)}`
    timerId = setTimeout('nn()', 2000);

}


function stop() {
    clearTimeout(timerId);
}

function prv() {

    // if (--id > p) id = 1;
    if (id > 1) {
        id--
    } else {
        id = p
    }
    p1.src = `images/img${id}b.jpg`;
    txt.innerHTML = `<h3>${tx1[id]} ${id}</h3><a href="#"><span>${tx[id]} ${id}</span></a>`;
    url3.innerHTML = `${to[id].slice(12,)}`
}

function nxt() {

    if (++id > p) id = 1;
    p1.src = `images/img${id}b.jpg`;
    txt.innerHTML = `<h3>${tx1[id]} ${id}</h3><a href="#"><span>${tx[id]} ${id}</span></a>`;
    url3.innerHTML = `${to[id].slice(12,)}`


}