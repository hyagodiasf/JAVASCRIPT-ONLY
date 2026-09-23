//é um molde usado para criar e inicializar novos objetos com propriedades e métodos repetidos.
function Calculadora() {
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) {
                this.addNumDisplay(el);
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }
            if (el.classList.contains('btn-dell')) {
                this.dellUmDisplay();
            }
            if (el.classList.contains('btn-eq')) {
                this.eqCalculo();
            }
            
        });
    };

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', event => {
            if (event.key === 'Enter') {
                this.eqCalculo();
            }
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.dellUmDisplay = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.eqCalculo = () => {
        try {
            this.display.value = eval(this.display.value);
        } catch (e) {
            this.display.value = 'Erro';
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();