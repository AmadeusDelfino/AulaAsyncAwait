

// aqui vai ser a chamada de API para buscar os livros
const livros = [
    {
        nome: 'Livro 1',
        genero: 'Ação',
    },
    {
        nome: 'Livro 2',
        genero: 'Ação',
    },
    {
        nome: 'Livro 3',
        genero: 'Ação',
    },
    {
        nome: 'Livro 4',
        genero: 'Fantasia',
    },
]

module.exports = {
    buscarLivros: async (ms) => {
        await sleep(ms)
        return livros
    }
}