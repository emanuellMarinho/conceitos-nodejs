// Importação padrão
import connectToDatabase from './utils/database.mjs';

connectToDatabase("my-database");

// Importando tudo "All" para dentro do arquivo
import * as database from './utils/database.mjs'; // Não é a forma mais recomendada

database.connectToDatabase("my-database");

// Importação por desestruturação
import { connectToDatabase, databaseType } from './utils/database.mjs';

connectToDatabase("my-database");

import { key, getDataFromApi } from './utils/api.js';

getDataFromApi();


/**
 * Padrões de arquivos em projetos JS
 * CJS (CommonJS) -> indica que é um arquivo que usa o padrão do modulo antigo com require
 * MJS (Padrão EcmanScript) -> indica que é um arquivo que usa o padrão do modulo novo com import
*/