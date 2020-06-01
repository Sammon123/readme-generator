const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
// const axios = require('axios');
const writeFileAsync = util.promisify(fs.writeFile);

// const generateMarkdown = require('./utils/generateMarkdown');
// const questions = [];

// function writeToFile(response, data) {}

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
init()
	.then(function (answers) {
		const md = generatedMarkdown(answers);

		return writeFileAsync('generated.md', md);
	})
	.then(function () {
		console.log('Successfully wrote to index.html');
	})
	.catch(function (err) {
		console.log(err);
	});
// after we get input from users, make api call to github
// 			.then(({ username }) => {
// 				const url = `https://api.github.com/users/${data.username}/repos?per_page=100`;
// 				// -- use axios
// 				axios
// 					.get(url)
// 					// -- the rest of this should be inside the axios then block
// 					.then((response) => {
// 						// console.log(response.data);
// 						let repoNames = response.data.map((repo) => {
// 							return repo.name;
// 							// return response.email;
// 						});
// 						// create the markdown file with the formatted markdown
// 						let repoNamesString = repoNames.join('\n');
// 						fs.writeFile('generated.md', repoNamesString, (err) => {
// 							if (err) {
// 								throw err;
// 							}
// 							console.log(`Saved ${repoNames.length} repos`);
// 						});
// 					})
// 					.catch((err) => {
// 						console.log(err);
// 					});
// 			})
// 	);

// // send all of the data to the generateData markdown function to collect the formatted markdown
// // use the generateMarkdown function
// // const markdown = generateMarkdown(data, response)
// // use markdown

// init();
