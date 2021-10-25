function calc_media(n1, n2) {
  return (n1 + n2) / 2;
}

let aluno = {
  nome: "Igor",
  notas: [7, 8],

  media: function() {
    return (this.notas[0] + this.notas[1]) / 2;
  }
}

console.log(aluno.nome);
console.log(aluno.media());

let aluno1 = {
  nome: "Taylor",
  notas: [9, 8],

  media: function() {
    return (this.notas[0] + this.notas[1]) / 2;
  }
}

console.log(aluno1.nome);
console.log(aluno1.media());