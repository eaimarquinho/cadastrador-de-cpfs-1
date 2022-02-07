const pessoas = require('./pessoas.json');
const fs = require('fs');
const pessoasCasados = pessoas.filter((pessoa)=>pessoa.casado === true)
console.table(pessoasCasados)