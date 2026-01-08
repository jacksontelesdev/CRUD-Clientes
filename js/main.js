import api from "./api.js";
import ui from "./ui.js";

const clienteForm = document.querySelector("#clienteForm")
const botaoCancelar = document.querySelector("#cancelar")

ui.renderizarClientes();

clienteForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.querySelector('#id').value
    const nome = document.querySelector('#nome').value
    const idade = document.querySelector('#idade').value
    const email = document.querySelector('#email').value

    if (id) {
        await api.atualizarCliente({ id, nome, idade, email })
    } else {
        await api.cadastrarClientes({ nome, email, idade })
    }

})

botaoCancelar.addEventListener('click', () => {
    document.querySelector('#id').value = ''
    document.querySelector('#nome').value = ''
    document.querySelector('#idade').value = ''
    document.querySelector('#email').value = ''
})
