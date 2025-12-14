async function connectToDatabase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log('conexão estabelecida');
    } else {
        console.log('não foi possível realizar uma conexão com o banco de dados');
    }
}

export default connectToDatabase;