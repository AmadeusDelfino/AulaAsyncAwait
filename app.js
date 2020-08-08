const email = require('./email')

const main = async () => {
    email
        .enviarEmailBoasVindas(2000)
        .then(() => console.log('ok, terminei de enviar'))
}

main()