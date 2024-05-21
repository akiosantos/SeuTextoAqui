document.addEventListener("DOMContentLoaded", function() {
    // Defina a data do evento aqui
    const eventDate = new Date(2027, 7, 15); // Ano, Mês (0-11), Dia
    const yearsUntilEvent = 1; // Número de anos até o evento

    // Função para atualizar a contagem regressiva
    function updateCountdown() {
        const currentTime = new Date();
        let nextEvent = new Date(eventDate);

        // Se a data atual já passou do próximo evento, ajuste para o próximo ano
        if (currentTime >= nextEvent) {
            nextEvent.setFullYear(currentTime.getFullYear() + yearsUntilEvent);
        }

        const timeDiff = nextEvent - currentTime;

        // Calcula o total de dias, minutos e segundos a partir do número de anos
        const totalDays = yearsUntilEvent * 365;
        const totalMinutes = totalDays * 24 * 60;
        const totalSeconds = totalMinutes * 60;

        // Calcula o tempo restante em dias, horas, minutos e segundos
        const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % totalDays);
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Atualiza o conteúdo dos elementos HTML
        document.getElementById("years").textContent = String(yearsUntilEvent).padStart(2, '0');
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    // Atualiza a contagem regressiva imediatamente e a cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
