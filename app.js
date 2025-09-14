let menuVisible = false;
const menu = document.getElementById("nav");
const navBar = document.querySelector(".nav-bar");

function mostrarOcultarMenu() {
    menu.classList.toggle("show");
    menuVisible = !menuVisible;
    navBar.setAttribute("aria-expanded", menuVisible);
    menu.setAttribute("aria-hidden", !menuVisible);
}

const links = document.querySelectorAll("nav a");
for (let link of links) {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
        menuVisible = false;
        navBar.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
    });
}

function crearBarra(id_barra, max) {
    for (let i = 0; i < max; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

const python = document.getElementById("python");
crearBarra(python, 20);
const cpp = document.getElementById("cpp");
crearBarra(cpp, 20);
const java = document.getElementById("java");
crearBarra(java, 20);
const php = document.getElementById("php");
crearBarra(php, 20);
const databases = document.getElementById("databases");
crearBarra(databases, 20);
const frameworks = document.getElementById("frameworks");
crearBarra(frameworks, 20);
const cloud = document.getElementById("cloud");
crearBarra(cloud, 20);
const analytics = document.getElementById("analytics");
crearBarra(analytics, 20);
const monitoring = document.getElementById("monitoring");
crearBarra(monitoring, 20);
const erp = document.getElementById("erp");
crearBarra(erp, 20);
const management = document.getElementById("management");
crearBarra(management, 20);
const tools = document.getElementById("tools");
crearBarra(tools, 20);
const shell = document.getElementById("shell");
crearBarra(shell, 20);

let contadores = Array(13).fill(-1);
let entro = false;

function efectoHabilidades() {
    const habilidades = document.getElementById("habilidades");
    const distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && !entro) {
        entro = true;
        const intervals = [
            setInterval(() => pintarBarra(python, 18, 0, intervals[0]), 100), // 90%
            setInterval(() => pintarBarra(cpp, 16, 1, intervals[1]), 100), // 80%
            setInterval(() => pintarBarra(java, 16, 2, intervals[2]), 100), // 80%
            setInterval(() => pintarBarra(php, 14, 3, intervals[3]), 100), // 70%
            setInterval(() => pintarBarra(databases, 17, 4, intervals[4]), 100), // 85%
            setInterval(() => pintarBarra(frameworks, 15, 5, intervals[5]), 100), // 75%
            setInterval(() => pintarBarra(cloud, 14, 6, intervals[6]), 100), // 70%
            setInterval(() => pintarBarra(analytics, 16, 7, intervals[7]), 100), // 80%
            setInterval(() => pintarBarra(monitoring, 13, 8, intervals[8]), 100), // 65%
            setInterval(() => pintarBarra(erp, 14, 9, intervals[9]), 100), // 70%
            setInterval(() => pintarBarra(management, 15, 10, intervals[10]), 100), // 75%
            setInterval(() => pintarBarra(tools, 17, 11, intervals[11]), 100), // 85%
            setInterval(() => pintarBarra(shell, 12, 12, intervals[12]), 100) // 60%
        ];
    }
}

function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    let x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval);
    }
}

window.addEventListener("scroll", efectoHabilidades);