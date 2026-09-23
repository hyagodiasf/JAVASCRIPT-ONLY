function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
        },
        
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        btnDelUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                    return;
                }
                if (el.classList.contains('btn-dell')) {
                    this.btnDelUm();
                    return;
                }
                if (el.classList.contains('botao')) {
                    this.btnParaDisplay(el.innerText);
                    return;
                }
            });
        },

    }

}

const calculadora = criaCalculadora();
calculadora.inicia();