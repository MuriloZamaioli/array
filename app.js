// console.dir(clientes)
// console.log(clientes[2]) //mostrar 1 valor
// clientes[3] = "tiagol" //alterar 1 valor
// console.dir(clientes)
// clientes.push("felipe") //adiciona um valor
// console.dir(clientes)

let clientesNome = new Array()
clientesNome.push("Luiz")
clientesNome.push("Enzo")
clientesNome.push("Felipe")
clientesNome.push("Gustagol")
clientesNome.push("Murilo")
console.dir(clientesNome)

document.getElementById("conteudo").innerHTML ="<ul>"
document.getElementById("conteudo").innerHTML +="<li>"+ clientesNome[0]+"</li>"
document.getElementById("conteudo").innerHTML +="<li>"+ clientesNome[1]+"</li>"
document.getElementById("conteudo").innerHTML +="<li>"+ clientesNome[2]+"</li>"
document.getElementById("conteudo").innerHTML +="<li>"+ clientesNome[3]+"</li>"
document.getElementById("conteudo").innerHTML +="<li>"+ clientesNome[4]+"</li>"
document.getElementById("conteudo").innerHTML += "</ul>"