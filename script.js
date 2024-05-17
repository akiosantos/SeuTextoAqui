document.addEventListener("DOMContentLoaded", function() {
    // Informações fixas
    const name = "João Silva";
    const birthDate = new Date(1990, 6, 15); // Ano, Mês (0-11), Dia

    // Elementos do DOM
    document.getElementById("name").textContent = name;
    document.getElementById("birthdate").textContent = birthDate.toLocaleDateString("pt-BR");

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
    const daysUntilBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));
    document.getElementById("days-until-birthday").textContent = daysUntilBirthday;
});
