// Método splice() => Este método altera o conteúdo de um array 
//                    removendo ou substituindo elementos existentes e/ou adicionando novos elementos na ordem crescente...

const mes = ['janeiro', 'novembro', 'agosto', 'setembro'];
mes.splice (1, 0, 'dezembro');
console.log(mes);
//Resultado: 'dezembro', 'novembro', 'agosto', 'setembro']


//Método some() => Este método testa pelo menos um elemento do array passa no teste implementado pela função fornecida,
//                 Retorna o resultado com true se, no array, encontrar um elemento para o qual a função fornicida retorna true

const arr = [17, 22, 36, 41];
const somar = (elemento) => elemento % 2 === 0;

console.log(arr.some(somar));
//Resultado: true


//Método Reverse() => Este método intância um array e retorna a referência ao mesmo array, o primeiro elemento do array se torna o último
//                    e o último elemento se torna o primeiro...

const numeros = ['one', 'two', 'three'];
console.log('numeros:', numeros);
//Resultado: numeros: (3) ['one', 'two', 'three']

const reverso = numeros.reverse();
console.log('reservo:', reverso);
//Resultado: reservo: (3) ['three', 'two', 'one']

