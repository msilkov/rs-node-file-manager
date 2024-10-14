export const getUserInput = () => {
	const args = process.argv.slice(2);
	const commandArg = args.find((arg) => !arg.startsWith('--'));
	const commandPath =
		commandArg && commandArg.startsWith('cd ')
			? commandArg.split(' ')[1]
			: null;
};
