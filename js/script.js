// Data final do evento
const eventoFinal = new Date("2025-05-05T23:59:59").getTime();

function atualizarCountdown() {
    const agora = new Date().getTime();
    const tempoRestante = eventoFinal - agora;

    if (tempoRestante >= 0) {
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

        atualizarElemento("days-wrapper", dias);
        atualizarElemento("hours-wrapper", horas);
        atualizarElemento("minutes-wrapper", minutos);
        atualizarElemento("seconds-wrapper", segundos);
    }
}

function atualizarElemento(id, novoValor) {
    const wrapper = document.getElementById(id);
    const elementoAtual = wrapper.querySelector(".digit");

    if (elementoAtual.textContent !== String(novoValor).padStart(2, "0")) {
        // Cria o próximo elemento
        const novoElemento = document.createElement("span");
        novoElemento.classList.add("digit");
        novoElemento.textContent = String(novoValor).padStart(2, "0");

        // Desliza o elemento atual para cima
        wrapper.appendChild(novoElemento);
        wrapper.style.transform = "translateY(-100%)";

        setTimeout(() => {
            // Remove o elemento anterior e reseta a transição
            wrapper.style.transform = "translateY(0)";
            wrapper.removeChild(elementoAtual);
        }, 300);
    }
}

setInterval(atualizarCountdown, 1000);
