document.addEventListener("DOMContentLoaded", function() {
    // Atualize a data aqui
    const birthDate = new Date(2026, 4, 25); // Ano, Mês (0-11), Dia

    // Função para atualizar a contagem regressiva
    function updateCountdown() {
        const currentTime = new Date();
        let nextBirthday = new Date(currentTime.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (currentTime >= nextBirthday) {
            nextBirthday.setFullYear(currentTime.getFullYear() + 1);
        }

        const timeDiff = nextBirthday - currentTime;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    // Atualiza a contagem regressiva imediatamente e a cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
