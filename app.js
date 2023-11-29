//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=19;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);

let javascript = document.getElementById("javascript");
crearBarra(javascript);
let sql = document.getElementById("sql");
crearBarra(sql);

let redes = document.getElementById("redes");
crearBarra(redes);
let c = document.getElementById("c");
crearBarra(c);
let cmas = document.getElementById("cmas");
crearBarra(cmas);

let phyton = document.getElementById("phyton");
crearBarra(phyton);

let sap = document.getElementById("sap");
crearBarra(sap);

let excel = document.getElementById("excel");
crearBarra(excel);

let ux = document.getElementById("ux");
crearBarra(ux);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 18, 0, intervalHtml);
        }, 100);
        
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 12, 1, intervalJavascript);
        }, 100);
        
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 18, 2, intervalSql);
        }, 100);
        
        const intervalRedes= setInterval(function(){
            pintarBarra(redes, 10, 3, intervalRedes);
        },100);
        const intervalC = setInterval(function(){
            pintarBarra(c, 10, 4, intervalC);
        },100);
        const intervalCmas = setInterval(function(){
            pintarBarra(cmas, 10, 5, intervalCmas);
        }, 100);
          const intervalPhyton = setInterval(function(){
            pintarBarra(phyton, 06, 6, intervalPhyton);
          }, 100);
        
        const intervalSap = setInterval(function(){
            pintarBarra(sap, 06, 7, intervalSap);
        }, 100);
         const intervalExcel = setInterval(function(){
            pintarBarra(excel, 16, 8, intervalExcel);
          }, 100);
        
        const intervalUx = setInterval(function(){
            pintarBarra(ux, 14, 9, intervalUx);
        }, 100);
        
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}