function irParaResumos() {
    window.location.href = "pagina-resumos.html";
}

function voltarParaInicio() {
    window.location.href = "index.html";
}

function mostrarResumo(id) {
    document.querySelectorAll('.resumo').forEach(el => el.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function criarEmojiRain() {
    setInterval(() => {
        let emoji = document.createElement("div");
        emoji.innerHTML = "📖";
        emoji.style.position = "absolute";
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = "-50px";
        emoji.style.fontSize = Math.random() * 30 + 20 + "px";
        emoji.style.opacity = Math.random();
        emoji.style.transition = "transform 10s linear";
        document.getElementById("emoji-rain").appendChild(emoji);
        setTimeout(() => {
            emoji.style.transform = "translateY(100vh)";
            setTimeout(() => emoji.remove(), 10000);
        }, 100);
    }, 500);
}
criarEmojiRain();
