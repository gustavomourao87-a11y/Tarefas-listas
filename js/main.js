const form = document.querySelector("#formTarefa");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function mostrarTarefas() {
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const item = document.createElement("li");

        item.innerHTML = `
            ${tarefa}
            <button onclick="removerTarefa(${index})">Excluir</button>
        `;

        lista.appendChild(item);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = input.value.trim();

    if (texto === "") {
        mensagem.textContent = "Digite uma tarefa.";
        return;
    }

    tarefas.push(texto);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    input.value = "";
    mensagem.textContent = "Tarefa adicionada!";
    mostrarTarefas();
});

function removerTarefa(index) {
    tarefas.splice(index, 1);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    mostrarTarefas();
}

mostrarTarefas();