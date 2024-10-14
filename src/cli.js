import { getUserInput } from './getUserInput.js';

export const startCLI = (userName) => {
	console.log('run from cli js and user -->', userName);
	const promtUser = () => {
		const userInput = getUserInput();
		if (!userInput.command) {
			console.log('Invalid input. Please enter a command.');
			return promptUser();
		}
		console.log(`You are currently in ${process.cwd()}`);
	};
};
