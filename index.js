const form = document.querySelector('#formulario');

form.addEventListener('submit' , function(evento){
    evento.preventDefault();

    const pesoInput = document.querySelector('#peso');
    const alturaInput = document.querySelector('#altura');
    
    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    if(!peso){
       mensagem('Peso Invalido Digite Novamente' , false);
       return
    }
    if(!altura){
       mensagem('Altura Invalida Digite Novamente' , false);
       return
    }
    
    const imc = calculaImc(peso , altura);
    if(imc == 0.00){
        mensagem('Altura Invalida coloque um ponto exemplo: 1.72' , false)
        return
    }
    const msgNivel = nivelImc(imc);
    mensagem(`O seu imc é ${imc} ${msgNivel}`, true);
    
})

function nivelImc(imc){
    const nivelObesidade = ['Abaixo do peso', 'Peso normal' , 'Sobrepeso' , 'Obesidade grau 1' , 'Obesidade grau 2' , 'Obesidade grau 3'];

    if(imc <= 18.5){return nivelObesidade[0]};
    if(imc >= 18.5){return nivelObesidade[1]};
    if(imc >= 24.9){return nivelObesidade[2]};
    if(imc >= 30.0){return nivelObesidade[3]};
    if(imc >= 35.0){return nivelObesidade[4]};
    if(imc >= 40.0){return nivelObesidade[5]};
}

function calculaImc(peso,altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaElementoP(){
    const p = document.createElement('p');
    return p;
}

function mensagem(msg , validador){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaElementoP();
     
    if(validador){
        p.classList.add('verdadeiro');
    }else{
        p.classList.add('falso');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}