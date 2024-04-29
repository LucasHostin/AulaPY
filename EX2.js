const idade1 = prompt("Qual a sua idade?")

if (idade1 >= 0, idade1 < 12) {
    console.log("Você é uma criança.")

} else if (idade1 >= 12, idade1 < 18) {
    console.log("Você é um adolescente.");
} else if (idade1 == 18) {
    console.log("Você tem 18 anos.");
} else if (idade1 > 18, idade1 < 60) {
    console.log("Você é um adulto.");
} else if (idade1 >= 60) {
    console.log("Você é um idoso.");
}  else{
    console.log("Idade inválida.");
}