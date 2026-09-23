//FUNÇÃO FACTORY É UMA FUNÇÃO QUE RETORNA 
// UM NOVO OBJETO SEM NECESSIDADE DE USAR CLASSES OU OPERADOR

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
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
        realizaConta() {
            try {
                this.display.value = eval(this.display.value);
            } catch (error) {
                this.display.value = 'Erro';
            }
        },
        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.key === 'Enter') {
                    this.realizaConta();
                }
            });
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
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
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