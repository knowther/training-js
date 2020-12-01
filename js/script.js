function change(){
    var nome_p = prompt("Qual seu nome?");
    document.getElementById("texto").innerHTML = `Olá ${nome_p}, o que mais deseja fazer?`;
    document.getElementById("initext").innerText = `${nome_p}, essa são as opções que você tem para interagir:`;
}

function createbutton(){

var newbutton = document.createElement("button");
var pai_element = document.getElementById("main");
var textbt = document.createTextNode("Exibir uma foto minha.")
var trocar_N = document.createElement("button")
var paielementN = document.getElementById("main")
var texTrocar = document.createTextNode("Trocar nome")

newbutton.appendChild(textbt);
trocar_N.appendChild(texTrocar);
paielementN.appendChild(trocar_N);

pai_element.appendChild(newbutton);

trocar_N.onclick = function trocarN(){
    var nome_p = prompt("Qual seu nome?");
    document.getElementById("texto").innerHTML = `Olá ${nome_p}, o que mais deseja fazer?`;
    document.getElementById("initext").innerText = `${nome_p}, essa são as opções que você tem para interagir:`;
}

var oneclick = false;
newbutton.onclick = function photo() {
    
    if(!oneclick){
        var newbutton2 = document.createElement("button");
    var pai_element2 = document.getElementById("main");
    var textbt2 = document.createTextNode("Deixar foto em preto e branco")
    newbutton2.appendChild(textbt2);
    pai_element2.appendChild(newbutton2);
    document.getElementById("imagem").src = "./image/johnny_img.jpg"
    newbutton2.onclick = function backgroungchange() {
        document.getElementById("imagem").style.filter = "grayscale(100%)"
        
    } 
    oneclick = true;
    } else{
        alert("Isso já foi feito campeão, não tente novamente.")
    }
    }
    
    
}

    
function trocarNome(){
var node = document.getElementById("botao").remove();
var trocarbt = document.createElement("button");
var textbt = document.createTextNode("Trocar de nome");
var element_pai = document.body;
}

  