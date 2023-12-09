
let nomeGuerreiro = "Ghaya"
let XP = 605

if (XP <= 1000) {
    console.log("O Herói - " +  nomeGuerreiro + " tem força de XP " + XP + "  e esta no nivel Ferro")
} else if ( XP > 1001 &&  XP <= 2000) {
    console.log("O Herói - " +  nomeGuerreiro + " tem força de XP " + XP + "  e esta no nivel Bronze ")
} 
else if ( XP > 2001 && XP <= 5000) {
    console.log("O Herói - " +  nomeGuerreiro + " tem força de XP " + XP + "  e esta no nivel Prata ")

} else if ( XP > 5001 && XP <= 7000) {
    console.log("O Herói - " +  nomeGuerreiro + " tem força de XP " + XP + "  e esta no nivel Ouro ")
}else if ( XP > 7001 && XP <= 8000) {
    console.log("O Herói - " +  nomeGuerreiro + " tem força de XP " + XP + "  e esta no nivel Platina ")
}else if ( XP > 8001 && XP <= 9000) {
    console.log("O Herói - " +  nomeGuerreiro + " tem força de XP " + XP + "  e esta no nivel Ascendente")
}else if ( XP > 9001 && XP <= 10000) {
    console.log("O Herói - " +  nomeGuerreiro + " tem força de XP " + XP + "  e esta no nivel Imortal")
}else if ( XP > 10001 && XP <= 20000) {
    console.log("O Herói - " +  nomeGuerreiro + " tem força de XP " + XP + "  e esta no nivel Radiante")
}else {
    console.log( "Guerreiro do nível ainda desconhecido")
}