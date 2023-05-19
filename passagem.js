var readline=require("readline-sync");
console.log("")
console.log("+----------- Passagens Aereas ----------+ ")//41 digitos no texto
console.log("|                                       |")
console.log("| 1- Comprar Passagem                   |")
console.log("| 2- Consultar Voos                     |")
console.log("| 3- Mapa De Assentos                   |")
console.log("| 4- Emitir Ticket                      |")
console.log("| 0- Encerrar Programa                  |")
console.log("|                                       |")
console.log("+---------------------------------------+ ")
var escolha=readline.question("Escolha uma opcao acima:")
if(escolha==1){
    var Nome=readline.question("Nome:")
    var SobreNome=readline.question("Sobrenome:")
    var Idade=readline.question("Idade:")
    var Origem=readline.question("Origem:")
    var Destino=readline.question("Destinatario:")
    console.log("")
    console.log("+----------- Passagens Aereas ----------+ ")//41 digitos no texto
    console.log("")
    console.log("Voce esta em ---> Comprar passagem")
    console.log(" *Resumo da compra*")
    console.log("")
    console.log("Cliente: "+Nome+" "+SobreNome)
    console.log("Idade: "+Idade)
    console.log("Assento: A1")
    console.log("Voo: "+Origem+" X "+Destino)
    console.log("")
    console.log("Valor: R$:Gratis!")
    

}
else if(escolha==2){
    var Origem=readline.question("Origem:")
    console.log("+----------- Passagens Aereas ----------+ ")//41 digitos no texto
    console.log("")
    console.log("Voce esta em ---> consulta de Voos")
    console.log("")
    console.log("Origem          X      Destino")
    console.log("  ------------------------------------")
    console.log("")
    console.log(Origem+"                  Dublin")
    console.log(Origem+"                  Ceara")
    console.log(Origem+"                  Sao Paulo")
    console.log(Origem+"                  New York")
}
else if(escolha==3){
    console.log("+----------- Passagens Aereas ----------+ ")//41 digitos no texto
    console.log("")
    console.log("Voce esta em ---> Mapa De Assentos")
    console.log("")
    console.log("----------------------------------------- ")
    console.log("A1 A2 A3 X  A5 A6 A7 A8 A9 X  A11 A12")
    console.log("B1 B2 B3 B4 B5 B6 B7 B8 X  B9 B10 B12")
    console.log("----------------------------------------- ")
}
else if(escolha==4){
    var Nome=readline.question("Nome:")
    var SobreNome=readline.question("Sobrenome:")
    var Idade=readline.question("Idade:")
    var Origem=readline.question("Origem:")
    var Destino=readline.question("Destinatario:")
    console.log("+----------- Passagens Aereas ----------+ ")//41 digitos no texto
    console.log("")
    console.log("**********************************************")
    console.log("*      OBRIGADO POR VIAJAR CONOSCO           *")
    console.log("*                                            *")
    console.log("* Cliente: "+Nome+" "+SobreNome+"            *")
    console.log("* idade: "+Idade+"    Assento:A1             *")
    console.log("* Origem/Destino: "+Origem+" > "+ Destino+"  *")
    console.log("* Status do Voo: confirmado                  *")
    console.log("*                                            *")
    console.log("**********************************************")

}
else if(escolha==0){
    console.log()
}