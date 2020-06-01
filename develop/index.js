const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const writeFileAsync = util.promisify(fs.writeFile);
// get input from users
// -- use inquirer

function init() {
	return inquirer.prompt([
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
			name: 'tableOfContents',
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
			name: 'username',
			message: 'github profile?',
		},
		{
			type: 'input',
			name: 'email',
			message: 'github email address?',
		},
	]);
}
// function to return the input to the user
function generatedMarkdown(answers) {
	return `
	${answers.title}
	
	${answers.description}
	
	${answers.tableOfContents}
	
	${answers.installation}
	
	${answers.usage}
	
	${answers.license}
	
	${answers.contributing}
	
	${answers.tests}
	
	${answers.username}
	
	${answers.email}`;
}
// call for the init function
init()
	// have response inside a .then block
	.then(function (answers) {
		// set var for the generated markdown function
		const md = generatedMarkdown(answers);
		// returning data back to the file

		return writeFileAsync('generated.md', md);
	})
	// set a then function
	.then(function () {
		console.log('Successfully wrote to generated.md');
	})
	// and catch something if there are any errors
	.catch(function (err) {
		console.log(err);
	});
