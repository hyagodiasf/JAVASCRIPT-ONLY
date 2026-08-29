//FUNÇÃO LIMPAR
function limpar() {
    document.querySelector('.inpeso').value = '';
    document.querySelector('.inaltura').value = '';
    document.querySelector('.resultadoP').value = '';
}
//FUNÇÃO CALCULAR
function calcularImc(peso, altura) {
    return peso / altura ** 2;
}
//RESULTADO
function resultado(msg) {
    const resul = document.querySelector('.resul');
    resul.innerHTML = msg;
}


const form = document.querySelector('.form');
const imcP = document.querySelectorAll('.imc p');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inpeso = Number(e.target.querySelector('.inpeso').value);
    const inaltura = Number(e.target.querySelector('.inaltura').value);


    if (isNaN(inpeso) || inpeso <= 0) {
        resultado('Peso inválido!');
        return;
    }


    if (isNaN(inaltura) || inaltura <= 0) {
        resultado('Altura inválida!');
        return;
    }


    const imcRes = calcularImc(inpeso, inaltura);

    resultado(`Seu IMC é ${imcRes.toFixed(2)}`);


    // Limpa as cores
    for (let i = 0; i < imcP.length; i++) {
        imcP[i].classList.remove(
            'verde',
            'amarelo',
            'laranja',
            'vermelho'
        );

        resultadoP[i].classList.remove(
            'verde',
            'amarelo',
            'laranja',
            'vermelho'
        );
    }


    let indice;
    let cor;


    if (imcRes < 18.5) {
        indice = 0;
        cor = 'verde';

    } else if (imcRes >= 18.5 && imcRes <= 24.9) {
        indice = 1;
        cor = 'verde';

    } else if (imcRes > 24.9 && imcRes <= 29,9) {
        indice = 2;
        cor = 'amarelo';

    } else if (imcRes > 29,930 && imcRes <= 34,9) {
        indice = 3;
        cor = 'laranja';

    } else if (imcRes > 34,9 && imcRes <= 39,9) {
        indice = 4;
        cor = 'vermelho';

    } else {
        indice = 5;
        cor = 'vermelho';
    }


    imcP[indice].classList.add(cor);
    resultadoP[indice].classList.add(cor);

    limpar();
});