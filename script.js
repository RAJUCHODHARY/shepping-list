let di = document.querySelectorAll('.createlement1')
let Section = document.querySelector('.Sectionbox');
let Quantity = document.querySelector('.Quantity');
let names = document.querySelector('#names');
let Fruits11 = document.querySelectorAll('.Fruits p')
let btn = document.querySelector('#btn');
let btns = document.querySelector('#btns');
let cons;
let arr = [];
btn.addEventListener('click', coll)

function coll() {

    let dd = document.createElement('div');
    dd.classList.add('flexs')
    let pe = document.createElement('p');
    let pee = names.value;
    pe.innerText = pee;
    let pe1 = document.createElement('p');
    let pee1 = qua.value;
    pe1.innerText = pee1;
    let ii = document.createElement('i');
    ii.classList.add('fa-solid');
    ii.classList.add('fa-trash')
    ii.addEventListener("click", removeItem);
    dd.appendChild(ii);
    dd.appendChild(pe);
    dd.appendChild(pe1);
    cons = document.querySelector('#' + Section.value);
    cons.children[1].append(dd)


    if (cons.children[1] !== 0) {
        if (!arr.includes(cons.children[0].innerText)) {
            arr.push(cons.children[0].innerText)

        }

    }



}

function removeItem(event) {
    event.target.parentElement.remove();
}

btns.addEventListener('click', show);


function show() {

    alert(arr)
}







