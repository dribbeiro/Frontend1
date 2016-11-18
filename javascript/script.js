document.getElementById('demo').innerHTML +=
	typeof '4Linux' + '<br />' +
	typeof 30 + '<br />' +
	typeof 15.50 + '<br />' +
	typeof true + '<br />' +
	typeof [1,2,3,4] + '<br />' +
	typeof {name:'4linux',curso:'HTML5&CSS'};

var a = 10;
var b = 15;

var adicao = a + b;
console.log(adicao);

var subtracao = a - b;
console.log(subtracao);

var multiplacao = a * b;
console.log(multiplacao);

var divisao = a / b;
console.log(divisao);

var mod = b % a;
console.log(mod);

if(a == b){
	console.log('A igual B');
}else if(a != b){
	console.log('A diferente B');
}

if(a < b){
	console.log('A menor B');
}else if(a > b){
	console.log('A maior B');
}

if(a <= b){
	console.log('A menor ou igual B');
}else if(a >= b){
	console.log('A maior ou igual B');
}

if(a < b && a == 10){
	console.log('A menor B e A = 10');
}else{
	console.log('A maior B ou A != 10');
}

if(a < b || a == 15){
	console.log('A menor B ou A = 10');
}else{
	console.log('A maior B e A != 10');
}

if(!(a == null)){
	console.log('A not null');
}

var c;
(a < b) ? c = 'A Menor B, Ternario' : c = ('A Maior B, Ternario');
console.log(c);

console.log((a += b) + 'String');
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

//var nome = prompt('Digite um nome');
var nome = 'Batman';

switch(nome){

	case 'Batman':
		console.log('I\'m Batman');
	break;
	case 'Superman':
		console.log('Eh um aviao?');
	break;
	case 'Spiderman':
		console.log('Uncle Ben');
	break;
	default:
		console.log('Nao eh um heroi');
	break;

}

// Array 0,1,2,3,4,5...
var cont = [5,2];


do{

	console.log(cont[0] + cont[1]);
	cont[0] += 1;
	cont[1] += 2;

	document.write('Indice 0 = ' + cont[0] + ' Indice 1 = ' + cont[1] + '<br />');

}while((cont[0] + cont[1]) < 15)

while((cont[0] + cont[1]) < 15){

	console.log(cont[0] + cont[1]);
	cont[0] += 1;
	cont[1] += 2;

	document.write('Indice 0 = ' + cont[0] + ' Indice 1 = ' + cont[1] + '<br />');

}

var forArr = [12,43,2,24,1,2,46,78,8,0];

for(var i = 0;  i < forArr.length; i++){
	console.log('Array Indice' + i + ' Valor: ' + forArr[i]);
}

for(i in forArr){
	console.log(forArr[i]);
}

function somar(num1, num2 = 0){
	var soma = num1 + num2;
	return soma;
}

var resultado = somar(a,b);
console.log(resultado);