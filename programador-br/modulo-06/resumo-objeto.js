
/* let a = {
  nome: "Igor",
  sobrenome: "Oliveira"
}

console.log(a); */

/* function obj(n, s) {
  return {nome: n, sobrenome: s}
}

let a = obj("Igor", "Oliveira");
console.log(a); */

function obj(n, s) {
  this.nome = n;
  this.sobrenome = s;
}

let a = new obj("Igor", "Oliveira");
console.log(a);