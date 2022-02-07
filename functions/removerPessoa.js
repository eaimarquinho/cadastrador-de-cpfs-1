const pessoas = require('./pessoas.json');
const fs = require('fs');
// passo 1: Capturar o número digitado pelo usuário
const remove = process.argv[2];
// Passo 2: Importar array de pessoas
//const pessoas = require('./pessoas.json'); faz oarte do passo 2
// Passo 3: Remover a pessoa da posição desejada
pessoas.splice(remove,1); // esse 1 apos o remove é a quantidade que vai ser excluida
//console.log ('-'.repeat(103)) quantas vezes o traço vai repetir ou o caracter desejado
// Passo 4: Salvar o array modificado (sem a pessoa) no arquivo

//pessoas.splice(remove)
fs.writeFileSync('./pessoas.json', JSON.stringify(pessoas,null,4))
// esse nul é como se fosse um nao para um parametro do stringify   e o 4 é a quantidade de linhas que deve ser formatada


//node no terminal abvre o terminal node// consegue executar comandos// .exit sai
// vs code extenção beautify arruma os codigos 