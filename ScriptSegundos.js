document.addEventListener("DOMContentLoaded", function() {
    // Defina a data do evento aqui
    const eventDate = new Date(2027, 7, 15); // Ano, Mês (0-11), Dia

    // Função para atualizar a contagem regressiva
    function updateCountdown() {
        const currentTime = new Date();
        let nextEvent = new Date(eventDate);

        // Se a data atual já passou do próximo evento, ajuste para o próximo ano
        if (currentTime >= nextEvent) {
            nextEvent.setFullYear(currentTime.getFullYear() + 1);
        }

        const timeDiff = nextEvent - currentTime;
        const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Total de dias até o próximo evento

        // Calcula o número de anos, dias, horas, minutos e segundos
        const years = nextEvent.getFullYear() - currentTime.getFullYear();
        const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)); // Calcula o número de dias restantes após subtrair os anos
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Atualiza o conteúdo dos elementos HTML
        document.getElementById("years").textContent = String(years).padStart(2, '0');
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    // Atualiza a contagem regressiva imediatamente e a cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
