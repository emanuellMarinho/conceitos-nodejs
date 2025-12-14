import chalk from 'chalk';
import logSymbols from 'log-symbols';


function start() {
    console.log(logSymbols.success, chalk.green.italic(" Server On"));

    setTimeout(() => {
        off();
    }, '5000');
}

function off() {
    console.log(logSymbols.error, chalk.red.italic(" Server Off"));
}

start();