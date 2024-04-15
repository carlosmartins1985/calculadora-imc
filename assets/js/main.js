/**
    Calculadora de IMC

    * Receber o peso e altura do usuário;
    * Validar number;
    * Calcular o IMC do usuário;
    * Exibir o resultado logo abaixo do botão calcular
 */
function meuEscopo() {
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        const pesoUsuario = Number(peso.value);
        const alturaUsuario = Number(altura.value);
        const imc = Number(pesoUsuario / (alturaUsuario * alturaUsuario));

        if (isNaN(pesoUsuario) || isNaN(alturaUsuario)) {
            console.log('Somente números são aceitos.');
            alert('Somente números são aceitos.')
            // resultado.classList.add('estilo');
            // resultado.innerHTML = `Somente números são aceitos.`
        } else if ((pesoUsuario >= 600 || pesoUsuario <= 25) || (alturaUsuario >= 2.5 || alturaUsuario <= 0.62)) {
            alert('Peso ou altura inválidos.');
        } else {
            if (imc <= 18.5) {
                console.log(`IMC = ${imc}, abaixo do peso.`);
                resultado.classList.add('estilo');
                resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Abaixo do peso.</p>`
            } else if (imc > 18.5 && imc <= 24.9) {
                console.log(`${imc} Peso normal`);
                resultado.classList.add('estilo');
                resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Peso normal.</p>`
            } else if (imc >= 25 && imc <= 29.9) {
                console.log(`${imc} Sobrepeso`);
                resultado.classList.add('estilo');
                resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Sobrepeso.</p>`
            } else if (imc >= 30 && imc <= 34.9) {
                console.log(`${imc} Obesidade grau 1`);
                resultado.classList.add('estilo');
                resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Obesidade grau 1.</p>`
            } else if (imc >= 35 && imc <= 39.9) {
                console.log(`${imc} Obesidade grau 2`);
                resultado.classList.add('estilo');
                resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Obesidade grau 2.</p>`
            } else if (imc >= 40) {
                console.log(`${imc} Obesidade grau 3`);
                resultado.classList.add('estilo');
                resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Obesidade grau 3.</p>`
            }
        }
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();







// if (pesoUsuario && alturaUsuario) {
//     if (imc <= 18.5) {
//         console.log(`IMC = ${imc}, abaixo do peso.`);
//         resultado.classList.add('estilo');
//         resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Abaixo do peso.</p>`
//     } else if (imc > 18.5 && imc <= 24.9) {
//         console.log(`${imc} Peso normal`);
//         resultado.classList.add('estilo');
//         resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Peso normal.</p>`
//     } else if (imc >= 25 && imc <= 29.9) {
//         console.log(`${imc} Sobrepeso`);
//         resultado.classList.add('estilo');
//         resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Sobrepeso.</p>`
//     } else if (imc >= 30 && imc <= 34.9) {
//         console.log(`${imc} Obesidade grau 1`);
//         resultado.classList.add('estilo');
//         resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Obesidade grau 1.</p>`
//     } else if (imc >= 35 && imc <= 39.9) {
//         console.log(`${imc} Obesidade grau 2`);
//         resultado.classList.add('estilo');
//         resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Obesidade grau 2.</p>`
//     } else if (imc >= 40) {
//         console.log(`${imc} Obesidade grau 3`);
//         resultado.classList.add('estilo');
//         resultado.innerHTML = `<p>IMC = ${imc.toFixed(2)} Obesidade grau 3.</p>`
//     }
// } else {
//     console.log('Somente números são aceitos.');
//     resultado.classList.add('estilo');
//     resultado.innerHTML = `Somente números são aceitos.`
// }
// }