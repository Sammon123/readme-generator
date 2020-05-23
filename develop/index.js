const questions = [];

function writeToFile(fileName, data) {}

function init() {
	// get input from users
	// -- use inquirer
	const inquirer = require('inquirer');

	inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'project title?',
		},
		{
			type: 'input',
			name: 'description',
			message: 'description?',
		},
		{
			type: 'input',
			name: 'table of contents',
			message: 'table of contents?',
		},
		{
			type: 'input',
			name: 'installation',
			message: 'installation?',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'usage?',
		},
		{
			type: 'input',
			name: 'license',
			message: 'license?',
		},
		{
			type: 'input',
			name: 'contributing',
			message: 'any contributions?',
		},
		{
			type: 'input',
			name: 'tests',
			message: 'tests?',
		},
		{
			type: 'input',
			name: 'question',
			message: 'github profile?',
		},
		{
			type: 'input',
			name: 'another question',
			message: 'github email address?',
		},
	]);
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
