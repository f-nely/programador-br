let nomes = ["Igor", "Diana", "Nikita"];
let notasA = [7.0, 6.5, 9.5];
let notasB = [8.0, 7.0, 8.5];

function calculo_media(n1, n2) {
    return (n1 + n2) / 2;
}

function passou(media) {

    if(media > 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }

}

for(let index in nomes) {
    //console.log(nomes[index] + " - " + notasA[index] + " - " + notasB[index] + " - " + calculo_media(notasA[index], notasB[index]));
    let nota1 = notasA[index];
    let nota2 = notasB[index];
    let media = calculo_media(notasA[index], notasB[index]);
    console.log(`${nomes[index]} - ${nota1} - ${nota2} - ${media} - ${passou(media)}`);
}
