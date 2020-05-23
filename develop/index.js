const questions = [];

function writeToFile(fileName, data) {}

function init() {
	// get input from users
	// -- use inquirer
	const inquirer = require('inquirer');

	inquirer.prompt([{}]);
	// after we get input from users, make api call to github
	// -- use axios
	// -- the rest of this should inside the axios then block
	// collect additional data from github response
	// send all of the data to the generateData markdown function to collect the formatted markdown
	// user the generateMarkdown function
	// const markdown = generateMarkdown(data, response)
	// create the markdown file with the formatted markdown
	// use markdown
}

init();
