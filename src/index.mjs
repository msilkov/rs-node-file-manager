import os from 'os';
import process from 'process';
import { startCLI } from './cli.js';

const homeDirectory = os.homedir();
process.chdir(homeDirectory);

const args = process.argv.slice(2);
const userNameArg = args.find((arg) => arg.startsWith('--username='));
const userName = userNameArg ? userNameArg.split('=')[1] : 'Guest';

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${process.cwd()}`);

process.on('SIGINT', () => {
	console.log(`\nThank you for using File Manager, ${userName}, goodbye!`);
	process.exit();
});

startCLI(userName);
