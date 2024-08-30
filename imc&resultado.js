const imc = document.querySelector('.imc');
const resultado = document.querySelector('.resultado');


imc.innerHTML += `<p>Menos do que 18,5</p>`;
imc.innerHTML += `<p>Entre 18,5 e 24,9</p>`;
imc.innerHTML += `<p>Entre 25 e 29,9</p>`;
imc.innerHTML += `<p>Entre 30 e 34,9</p>`;
imc.innerHTML += `<p>Entre 35 e 39,9</p>`;
imc.innerHTML += `<p>Mais do que 40</p>`;

resultado.innerHTML += `<p>Abaixo do peso</p>`;
resultado.innerHTML += `<p>Peso normal</p>`;
resultado.innerHTML += `<p>Sobrepeso</p>`;
resultado.innerHTML += `<p>Obesidade grau 1</p>`;
resultado.innerHTML += `<p>Obesidade grau 2</p>`;
resultado.innerHTML += `<p>Obesidade grau 3</p>`;

const nivelObesidade = ['Abaixo do peso', 'Peso normal' , 'Sobrepeso' , 'Obesidade grau 1' , 'Obesidade grau 2' , 'Obesidade grau 3'];

console.log(imc)