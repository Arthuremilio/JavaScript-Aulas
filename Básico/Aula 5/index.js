const nome = 'Arthur Emilio';
const sobrenome = 'Lopes Fonseca'
const data = new Date();
const anoAtual = data.getFullYear();
let idade = 28;
let dtnascimento = anoAtual - idade;
let peso = 91;
let altura = 1.76;
let IMC = peso / (altura*altura);



console.log('Nome: '+ nome + ' ' + sobrenome + ' Idade: ' + idade  + ' Anos, data de nascimento: ' + dtnascimento);
console.log(`Peso: ${peso}  Kg, altura: ${altura} Mts`);
console.log(`O meu indice do IMC é: ${IMC}`);