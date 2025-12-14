import connectToDatabase from './database/data.mjs';

async function main() {
    await connectToDatabase(
        process.env.USERDATABASE,
        process.env.PASSWORDDATABASE,
    );
}

main();