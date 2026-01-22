const URL_BASE = 'https://crud-clientes-rosy.vercel.app'

const api = {
    async buscarClientes() {
        try {
            const resposta = await axios.get(`${URL_BASE}/clientes`)
            return resposta.data

        } catch (error) {
            alert("Erro ao buscar clientes")
        }

    },

    async buscarPorId(id){
        try {
            const resposta = await axios.get(`${URL_BASE}/clientes/${id}`)
            return resposta.data
        } catch (error) {
            alert('Erro ao buscar cliente')
        }
    },

    async cadastrarClientes(cliente) {
        try {
            await axios.post(`${URL_BASE}/clientes`, cliente);
        }

        catch (error) {
            alert('Erro ao cadastrar cliente')
        }
    },

    async atualizarCliente(cliente) {
        try {
            await axios.put(`${URL_BASE}/clientes/${cliente.id}`, cliente)
        } catch (error) {
            alert('Erro ao atualizar cliente')
        }
    },

    async deletarCliente(id){
        try {
            await axios.delete(`${URL_BASE}/clientes/${id}`)
        } catch (error) {
            alert('Erro ao deletar cliente')
        }
    }

}


export default api
