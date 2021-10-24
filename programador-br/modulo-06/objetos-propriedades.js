let aluno = {
  nome: "Igor",
  notas: [7.5, 5.0]
}

aluno.matricula = 40021;

let nova_prop = "last_name"

aluno[nova_prop] = "Oliveira";

//aluno["sobrenome"] = "Oliveira";

console.log(aluno.nome);
console.log(aluno.notas[0]);
console.log(aluno.matricula);
//console.log(aluno.sobrenome);
console.log(aluno.last_name);