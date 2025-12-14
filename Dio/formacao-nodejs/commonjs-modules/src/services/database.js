// export default -> já nasce sendo exportada

exports.connectToDatabase = async (dataName) => { // export default async
    console.log("se conectando ao banco:" + dataName);
}

exports.disconnectDatabase = () => {
    // lógica
    console.log("desconectando");
}