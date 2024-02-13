const plus = [...document.querySelectorAll('.plus')];
const minus = [...document.querySelectorAll('.minus')];
const para = [...document.querySelectorAll('.para')];

const tirarSelecao = () => {
    const swap = [...document.querySelectorAll('.plus, .minus, .para')];
    swap.map((el) => {
        if(el.classList.contains('plus') && el.classList.contains('hidden')){
            el.classList.remove('hidden');
        } else if(el.classList.contains('minus') && !el.classList.contains('hidden')){
            el.classList.add('hidden');
        } else if(el.classList.contains('para') && !el.classList.contains('hidden')){
            el.classList.add('hidden');
        }
    });
};

for(let i = 0; i < plus.length; i++){
    plus[i].addEventListener('click', () => {
        tirarSelecao()
        plus[i].classList.toggle('hidden');
        minus[i].classList.toggle('hidden');
        para[i].classList.toggle('hidden');
    });
}

for(let i = 0; i < minus.length; i++){
    minus[i].addEventListener('click', () => {
        tirarSelecao()
        plus[i].classList.toggle('hidden');
        minus[i].classList.toggle('hidden');
        para[i].classList.toggle('hidden');
    });
}

