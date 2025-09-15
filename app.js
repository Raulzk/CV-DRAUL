let menuVisible = false;

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
            setInterval(() => pintarBarra(python, 18, 0, intervals[0]), 100),
            setInterval(() => pintarBarra(cpp, 16, 1, intervals[1]), 100),
            setInterval(() => pintarBarra(java, 16, 2, intervals[2]), 100),
            setInterval(() => pintarBarra(php, 14, 3, intervals[3]), 100),
            setInterval(() => pintarBarra(databases, 17, 4, intervals[4]), 100),
            setInterval(() => pintarBarra(frameworks, 15, 5, intervals[5]), 100),
            setInterval(() => pintarBarra(cloud, 14, 6, intervals[6]), 100),
            setInterval(() => pintarBarra(analytics, 16, 7, intervals[7]), 100),
            setInterval(() => pintarBarra(monitoring, 13, 8, intervals[8]), 100),
            setInterval(() => pintarBarra(erp, 14, 9, intervals[9]), 100),
            setInterval(() => pintarBarra(management, 15, 10, intervals[10]), 100),
            setInterval(() => pintarBarra(tools, 17, 11, intervals[11]), 100),
            setInterval(() => pintarBarra(shell, 12, 12, intervals[12]), 100)
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

// Animación de fragmentos de código emergiendo de laptops
const snippets = document.querySelectorAll('.code-snippet');
const laptopPositions = [20, 50, 80]; // Posiciones de los laptops (%)
snippets.forEach(snippet => {
    const pos = laptopPositions[Math.floor(Math.random() * laptopPositions.length)];
    snippet.style.left = `${pos + (Math.random() - 0.5) * 10}%`;
    snippet.style.animationDelay = `${Math.random() * 3}s`;
    snippet.style.animationDuration = `${5 + Math.random() * 3}s`;
});

// Animación de estrellas
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 100;

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
        ctx.fill();
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;
    });
    requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animateStars();