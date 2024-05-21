document.addEventListener("DOMContentLoaded", function() {
    // Defina a data do evento aqui
    const eventDate = new Date(2030, 4, 25); // Ano, Mês (0-11), Dia

    // Função para atualizar a contagem regressiva
    function updateCountdown() {
        const currentTime = new Date();
        const timeDiff = eventDate - currentTime;

        const years = eventDate.getFullYear() - currentTime.getFullYear();
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 365;
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Calcula o tempo total em segundos
        const totalSeconds = Math.floor(timeDiff / 1000);

        // Atualiza o conteúdo dos elementos HTML
        document.getElementById("years").textContent = String(years).padStart(2, '0');
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
        document.getElementById("totalSeconds").textContent = String(totalSeconds).padStart(2, '0');
    }

    // Atualiza a contagem regressiva imediatamente e a cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
