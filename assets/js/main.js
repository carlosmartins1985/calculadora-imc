function meuEscopo() {
    const form = document.querySelector('form');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!peso || peso <= 25 || peso >= 600){
            setResultado('Peso invalido', false);
            return;
        }

        if(!altura || altura <= 0.60 || altura >= 2.5) {
            setResultado('Altura invalida', false);
            return;
        }

        const imc = getImc(peso, altura);
        const imcNivel = getNivelImc(imc);

        const msg = `Seu imc é ${imc.toFixed(2)} (${imcNivel})`;

        setResultado(msg, true);

    }
    form.addEventListener('submit', recebeEventoForm);

    function getImc(peso, altura) {
        const imc = peso / (altura * altura);
        return imc;
    }

    function getNivelImc(imc){
        const nivel = ['Abaixo do peso', 'Peso normal',
        'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
        'Obesidade grau 3'];

        if(imc >= 39.9) return nivel[5];
        if(imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    function criaP(){
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid){
        const resultado = document.querySelector('.resultado');

        resultado.innerHTML = '';

        const p = criaP();

        if(isValid){
            p.classList.add('resultadoOk');
        }else{
            p.classList.add('erro');
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }
}
meuEscopo();
