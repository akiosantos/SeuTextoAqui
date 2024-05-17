document.addEventListener("DOMContentLoaded", function() {
    // Informações fixas
    const birthDate = new Date(1978, 4, 25); // Ano, Mês (0-11), Dia (Maio é 4, pois é indexado a partir de 0)

    // Elementos do DOM
    document.getElementById("birthdate").textContent = birthDate.toLocaleDateString("pt-BR", { day: 'numeric', month: 'long' });

    // Data atual
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Ajusta a idade se ainda não passou o aniversário este ano
    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("age").textContent = age + " anos";

    // Calcula dias até o próximo aniversário
    let nextBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (currentDate > nextBirthday) {
        nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    // Calcular a diferença de dias
    const oneDay = 24 * 60 * 60 * 1000; // Horas * Minutos * Segundos * Milissegundos
    const daysUntilBirthday = Math.ceil((nextBirthday - currentDate) / oneDay);
    document.getElementById("days-until-birthday").textContent = daysUntilBirthday + " dias";
});
