const inquirer = require('inquirer');
const axios = require('axios');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = [];

function writeToFile(response, data) {}

function init() {
	// get input from users
	// -- use inquirer

	inquirer
		.prompt([
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
		])
		// after we get input from users, make api call to github
		.then(({ username }) => {
			const url = `https://api.github.com/users/${username}/`;
			// -- use axios
			axios
				.get(url)
				// -- the rest of this should be inside the axios then block
				.then((response) => {
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		});

	// collect additional data from github response
	// send all of the data to the generateData markdown function to collect the formatted markdown
	// use the generateMarkdown function
	// const markdown = generateMarkdown(data, response)
	// create the markdown file with the formatted markdown
	// use markdown
}

init();
