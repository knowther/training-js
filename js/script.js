function change(){
    var nome_p = prompt("Qual seu nome?");
    document.getElementById("texto").innerHTML = `Olá ${nome_p}, o que mais deseja fazer?`;
    document.getElementById("initext").innerText = `${nome_p}, essa são as opções que você tem para interagir:`;
}

function createbutton(){

let newbutton = document.createElement("button");
var pai_element = document.body;
var textbt = document.createTextNode("Exibir uma foto minha.")
newbutton.appendChild(textbt);
pai_element.appendChild(newbutton);
newbutton.onclick = function photo() {
    document.getElementById("imagem").src = "./image/johnny_img.jpg"
}

    
}
