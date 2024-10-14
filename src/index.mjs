const args = process.argv.slice(2)
const userNameArg = args.find(arg => arg.startsWith('--username='))
const userName = userNameArg ? userNameArg.split('=')[1] : 'Guest';

if (userName) {
  console.log(`Welcome to the File Manager, ${userName}`);
} else {
  console.log('Welcome to the File Manager!');
}