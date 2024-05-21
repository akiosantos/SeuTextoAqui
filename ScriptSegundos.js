document.addEventListener("DOMContentLoaded", function() {
    // Defina a data do evento aqui
    const eventDate = new Date(2030, 4, 25); // Ano, Mês (0-11), Dia

    // Função para atualizar a contagem regressiva
    function updateCountdown() {
        const currentTime = new Date();
        const timeDiff = eventDate - currentTime;

        // Calcula o tempo restante em diferentes unidades
        const totalSeconds = Math.floor(timeDiff / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        const years = Math.floor(totalDays / 365);
        const months = Math.floor(totalDays / 30); // Aproximação para meses (30 dias por mês)
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24; // Calcula as horas restantes corretamente
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Atualiza o conteúdo dos elementos HTML
        document.getElementById("years").textContent = String(years).padStart(2, '0');
        document.getElementById("months").textContent = String(months).padStart(2, '0');
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(totalHours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    // Atualiza a contagem regressiva imediatamente e a cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
