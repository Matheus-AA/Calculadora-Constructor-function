function Calculadora(){

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () =>{
        this.display.addEventListener('keypress', e =>{
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-dell')) this.dell();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        })
    }

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);
            if(!conta){
                alert('Conta invalida')
                return
            } 

            this.display.value = conta

        } catch(e){
            alert('Conta invalida')
            return
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus()
    }  
    this.clear = () => this.display.value = ' ';
    this.dell = () => this.display.value = this.display.value.slice(0, -1);

};

const calculadora = new Calculadora();
calculadora.inicia();


