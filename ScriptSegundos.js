document.addEventListener("DOMContentLoaded", function() {
    // Defina a data do evento aqui
    const eventDate = new Date(2030, 4, 25); // Ano, Mês (0-11), Dia
    const yearsUntilEvent = 1; // Número de anos até o evento

    // Função para converter o tempo total em dias para horas, minutos e segundos
    function convertDaysToTime(totalDays) {
        const totalHours = totalDays * 24;
        const totalMinutes = totalHours * 60;
        const totalSeconds = totalMinutes * 60;

        return {
            hours: Math.floor(totalHours),
            minutes: Math.floor(totalMinutes),
            seconds: Math.floor(totalSeconds)
        };
    }

    // Função para atualizar a contagem regressiva
    function updateCountdown() {
        const currentTime = new Date();
        let nextEvent = new Date(eventDate);

        // Se a data atual já passou do próximo evento, ajuste para o próximo ano
        if (currentTime >= nextEvent) {
            nextEvent.setFullYear(currentTime.getFullYear() + yearsUntilEvent);
        }

        const timeDiff = nextEvent - currentTime;

        // Calcula o tempo total em dias
        const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Converte o tempo total em dias para horas, minutos e segundos
        const time = convertDaysToTime(totalDays);

        // Atualiza o conteúdo dos elementos HTML
        document.getElementById("years").textContent = String(yearsUntilEvent).padStart(2, '0');
        document.getElementById("days").textContent = String(time.hours).padStart(2, '0');
        document.getElementById("hours").textContent = String(time.minutes).padStart(2, '0');
        document.getElementById("minutes").textContent = String(time.seconds).padStart(2, '0');
    }

    // Atualiza a contagem regressiva imediatamente e a cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
