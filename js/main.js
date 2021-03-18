var conteudo = document.getElementById("informacoes");
var paragrafo = document.createElement("h2");
var botao = document.createElement("button");
var contador = 0;

var parte = document.getElementById("parte2");

var tabom = document.getElementById("rel");
tabom.style.display = 'none';
function apresentartabom(){
    tabom.style.display = 'block';
    tabom.style.animation = 'aparecer 1s linear';
    tabom.innerHTML = "Tá bom! Quer mais o quê?";
    botao.disabled = true;
}
function noses(){
    //if(contador<6){
        var quadrado = document.createElement("div");
        contador++;
        quadrado.style.backgroundColor = 'red';
        quadrado.style.width = "50px";
        quadrado.style.height = '50px';
        quadrado.style.margin = "1px";
        quadrado.setAttribute("id", "quad"+contador);
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
function sorteaCor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function trocaCor(id){
    //var intervalo = setInterval(function(){
        id.style.backgroundColor = sorteaCor();
    //}, 500);
    
}
function creardivs(){
    
    
    for(j=0;j<5;j++){
        var coluna = document.getElementById("L"+(j+1));
        for(i=0;i<19;i++){
            var quad = document.createElement("div");
            //quad.style.backgroundColor = 'green';
            quad.style.width = '52px';
            quad.style.height = '52px';
            quad.style.margin = '1px';
            quad.setAttribute("class", "quadrado");
            quad.setAttribute("id", "mapa"+i+""+j);
            //quad.innerHTML = i+""+j;
            quad.style.textAlign = 'center';
            coluna.appendChild(quad);
        }

    }
    var gerados1 = document.getElementById("cliqueaqui");
    botao.innerHTML = "Não Clique!";
    botao.setAttribute('onclick', 'apresentartabom()');
    botao.setAttribute("id", "botao");
    gerados.appendChild(botao);
    

}
var mapadesenho = ['00', '01' ,'02', '03', '04', '14', '24','40','41','42','43','44', '54','64','63','62','61','60','80','90', '100', '81', '82', '83', '84', '94', '104', '124', '123', '122', '121', '120', '130', '140', '141', '142', '132', '143', '144', '180', '170', '160', '161', '162', '172', '182', '183', '184', '174', '164'];
var contquadrado = 0;
botao.disabled = true;
function desenharNome(){
    //for(i=0;i<mapadesenho.length;i++){
        
        
        
        var des = document.getElementById('mapa'+mapadesenho[contquadrado]);
        des.style.backgroundColor = 'lime';
        des.setAttribute("onmouseover", "trocaCor(this)");
        contquadrado++;
        if(contquadrado == 50){
            botao.disabled = false;
        }
        if(contquadrado > 50){
            botao.disabled = true;
        }
        console.log(contquadrado);
        

        
    //}
}

function LimparNome(){
        
        
        for(i=0;i<mapadesenho.length;i++){
            var des = document.getElementById('mapa'+mapadesenho[i]);
            des.style.backgroundColor = 'lemonchiffon';
            
        }
            
    

}
creardivs();
function besteira(){
    document.getElementById("gerados").style.display = 'block';
    document.getElementById("gerados").style.animation = 'aparecer 1s linear';
    var intervalo = setInterval(desenharNome, 50);
    setTimeout(function() {
        clearInterval(intervalo);
    }, 2500);
    
        
       
    
    
    contquadrado = 0;
}
function closeaba(){
        
        document.getElementById("gerados").style.animation = 'sumir 0.5s linear';
        setTimeout(function(){
            document.getElementById("gerados").style.display = 'none';
        }, 500);
        tabom.innerHTML = ' ';
        tabom.style.display = 'none';
        botao.disabled = true;
        LimparNome();

}


/*
70:FD:46:B6:45:02 papai
*/
