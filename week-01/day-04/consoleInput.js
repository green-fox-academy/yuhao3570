let readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('$hack>');
rl.prompt();

rl.on('line', ((line)=> {
    console.log("Echo: ", line);
})).on('close', () => {
    process.exit(0);
})