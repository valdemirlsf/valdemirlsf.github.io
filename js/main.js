var conteudo = document.getElementById("informacoes");
var paragrafo = document.createElement("h2");
var botao = document.createElement("button");
var contador = 0;

var parte = document.getElementById("parte2");

var el = document.getElementById("menu");

el.addEventListener("click", () => {
    var link = document.getElementById("primeiroLink");
    if (!el.classList.contains("entrando")) {
        el.classList.add("entrando");
        return
    }
    link.disabled = true
    el.classList.remove("entrando");
    el.classList.add("saindo");
    setTimeout(() => {
        el.classList.remove("saindo");
    }, 1000);
});

function noses() {
    //if(contador<6){
    var quadrado = document.createElement("div");
    contador++;
    quadrado.style.backgroundColor = 'red';
    quadrado.style.width = "5em";
    quadrado.style.height = '5em';
    quadrado.style.margin = "1px";
    quadrado.setAttribute("id", "quad" + contador);
    quadrado.setAttribute("class", "quad");
    quadrado.setAttribute("onmouseover", "trocaCor(this)");
    var tela = document.getElementById("gerados");
    tela.appendChild(quadrado);

    /*}else{
        var tabom = document.createElement("h1");
        tabom.innerHTML = "Tá bom né!";
        conteudo.appendChild(tabom);
        botao.disabled = "true";
    }*/

}
function sorteaCor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function trocaCor(id) {
    //var intervalo = setInterval(function(){
    id.style.backgroundColor = sorteaCor();
    //}, 500);

}


function closeaba() {

    document.getElementById("gerados").style.animation = 'sumir 0.5s linear';
    setTimeout(function () {
        document.getElementById("gerados").style.display = 'none';
    }, 500);
    tabom.innerHTML = ' ';
    tabom.style.display = 'none';
    botao.disabled = true;
    LimparNome();

}

function abrirModal(numero) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.querySelector('.conteudo')

    var tituloModal = document.querySelector('#tituloModal')
    var textoModal = document.querySelector('#contato')
    var botaoModal = document.querySelector('#link')
    var textoBotao = document.querySelector('#textoLink')
    document.body.style.overflow = "hidden";
    document.querySelector('body').classList.add('backgroundNone');

    console.log(body)
    body.classList.add('blur')
    if (numero == 1) {
        tituloModal.innerHTML = "Email"
        textoModal.innerHTML = "valdemirlsf@gmail.com"
        botaoModal.href = "mailto:valdemirlsf@gmail.com"
        textoBotao.innerHTML = 'Enviar Email'
    }

    if (numero == 2) {
        tituloModal.innerHTML = "Telefone"
        textoModal.innerHTML = "(81) 99539-4297)"
        botaoModal.href = "https://wa.me/5581995394296"
        textoBotao.innerHTML = 'Enviar Mensagem'
    }

    modal.style.animation = "surgir .3s normal"
    modal.style.display = "flex";
    span.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        document.querySelector('body').classList.remove('backgroundNone');
        body.classList.remove('blur')
    }
}

function mudarFoto(elemento){
    var foto = elemento.getAttribute('src')
    if(foto.includes('3')){
        elemento.setAttribute('src', 'css/fotovaldemir.jpg')
    }else{
        elemento.setAttribute('src', 'css/fotovaldemir3.png')
    }
    
}

// Get the modal


// Get the button that opens the modal


// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it


