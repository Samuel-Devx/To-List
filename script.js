
let ip = document.getElementById(`ip`)
let valor =  ip.value
let ul = document.getElementById (`lista`)

function adicionar () {
    if  (ip.value === ``) {return}  
    var lista = document.createElement (`li`)
    lista.innerHTML = "➯" + ip.value
    ul.appendChild (lista)
    ip.value = ``
    


}   

function remover() {
    // Pega a lista UL
    let ul = document.getElementById("lista");

    // Verifica se há pelo menos um filho (li) para remover
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);
    }
}


