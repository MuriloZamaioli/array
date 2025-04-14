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

document.getElementById("conteudo").innerHTML += clientesNome[0]+" - "
document.getElementById("conteudo").innerHTML += clientesNome[1]+" - "
document.getElementById("conteudo").innerHTML += clientesNome[2]+" - "
document.getElementById("conteudo").innerHTML += clientesNome[3]+" - "
document.getElementById("conteudo").innerHTML += clientesNome[4]