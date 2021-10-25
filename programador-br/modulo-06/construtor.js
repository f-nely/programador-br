
/* function criar_aluno(nome, n1, n2) {
  return {
    nome: nome,
    nota1: n1,
    nota2: n2, 
    media: function() {
      return (this.nota1 + this.nota2) / 2;
    }
  }
} */

function Aluno(nome, n1, n2) {
  this.nome = nome;
  this.nota1 = n1;
  this.nota2 = n2;

  this.media = function() {
    return (this.nota1 + this.nota2) / 2;
  }
}


let a = new Aluno("Igor", 8, 7);
let a1 = new Aluno("Diana", 6, 7);

console.log(a);
console.log(a1);