import api from "./api.js";

const tabela = document.getElementById('tabelaClientes')

const ui = {

    async renderizarClientes() {
        tabela.innerHTML = ''

        try {
            const resposta = await api.buscarClientes();
            resposta.forEach(elemento => {
                ui.criarCliente(elemento)
            });

        } catch (error) {
            alert('Erro ao renderizar clientes')
        }
    },

    criarCliente(cliente) {

        const tr = document.createElement('tr');
        tr.classList.add('linhaTabela')

        const tdId = document.createElement('td')
        tdId.classList.add('colunaId')
        tdId.textContent = cliente.id

        const tdNome = document.createElement('td')
        tdNome.classList.add('colunaNome')
        tdNome.textContent = cliente.nome

        const tdIdade = document.createElement('td')
        tdIdade.classList.add('colunaIdade')
        tdIdade.textContent = cliente.idade

        const tdEmail = document.createElement('td')
        tdEmail.classList.add('colunaEmail')
        tdEmail.textContent = cliente.email

        const tdBotao = document.createElement('td')
        tdBotao.classList.add('acoes')

        const botaoEditar = document.createElement('button')
        botaoEditar.classList.add('btn-editar')
        botaoEditar.textContent = "🖊️"
        tdBotao.appendChild(botaoEditar)

        botaoEditar.addEventListener('click', async () => {

            await this.preencherFormulario(cliente.id);

        })


        const botaoExcluir = document.createElement('button')
        botaoExcluir.classList.add('btn-excluir')
        botaoExcluir.textContent = "🗑️"
        tdBotao.appendChild(botaoExcluir)

        botaoExcluir.addEventListener('click', async () => {
            await api.deletarCliente(cliente.id);
            this.renderizarClientes()
        })


        tr.append(tdId, tdNome, tdIdade, tdEmail, tdBotao)
        tabela.appendChild(tr)

    },

    async preencherFormulario(id) {
        const idCliente = document.querySelector('#id')
        const nome = document.querySelector('#nome')
        const idade = document.querySelector('#idade')
        const email = document.querySelector('#email')

        const resposta = await api.buscarPorId(id);

        idCliente.value = resposta.id
        nome.value = resposta.nome
        idade.value = resposta.idade
        email.value = resposta.email
    }

}

export default ui