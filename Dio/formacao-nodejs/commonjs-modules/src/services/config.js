const devArea = {
    version: "01ab",
    production: true,
};

const client = {
    device: "web",
};

// conhecido como exportação default
module.exports = {
    devArea,
    client,
};

// quando estou exportando apenas 1 item posso passar o modules.exports sem a chave, mas no caso
// de exportar mais de uma constante é obrigatório o uso de chaves na exportação do objeto