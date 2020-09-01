const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer =  require('inquirer');
const fs = require('fs');
const { exec } = require('child_process')

clear(); // clear the actual terminal

console.log(
	chalk.blueBright(
		figlet.textSync('SchoolSyst', { font: "Small Slant", horizontalLayout: 'full' })
	)
);

console.log(
	chalk.grey(
	"--------------------------------------------------------------------------------"
  )
);

let moduleManager = {
	type: 'list',
	name: 'moduleManager',
	message: 'Select the module manager for node.js you wish want to use (will be used to install depandancy for submodule) : ',
	choices: ["npm", "yarn", "pnpm"],
	default: "npm"
};

inquirer
	.prompt([
		moduleManager
	 ])
	.then(answers => {
		console.log(chalk.green('>'), chalk.white(`Launching installation with :`), chalk.cyan(answers.moduleManager));		
		exec(`git pull --recurse-submodules && cd ${__dirname}/webapp && ${answers.moduleManager} install`, (error, stdout) => {
			if (error) {
			  console.error(chalk.redBright('x'), `error while setuping submodule, error: ${error}`);
			}
			console.log(chalk.green('>'), chalk.white(stdout));
		});
  	})
  	.catch(error => {
		if(error.isTtyError) {
		  console.error("Couldn't prompt setup because your environement couldn't render the prompt !")
		} else {
		  console.error("Error with the prompt : ", error)
		}
  	});
