const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = {
    enviarEmailBoasVindas: async (ms) => {
        await sleep(ms)
        console.log('Enviei o e-mail de boas vindas para o usuário')
    }
}