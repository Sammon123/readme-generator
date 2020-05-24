const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');

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
				name: 'username',
				message: 'github profile?',
			},
			{
				type: 'input',
				name: 'email',
				message: 'github email address?',
			},
		])
		// after we get input from users, make api call to github
		.then(({ username, email }) => {
			const url = `https://api.github.com/users/${username}/repos?per_page=100`;
			// -- use axios
			axios
				.get(url)
				// -- the rest of this should be inside the axios then block
				.then((response) => {
					console.log(response.data);
					// collect additional data from github response
					const repoNames = response.data.map((repo) => {
						return { username, email };
					});
				})
				.catch((err) => {
					console.log(err);
				});
		});

	// send all of the data to the generateData markdown function to collect the formatted markdown
	// use the generateMarkdown function
	// const markdown = generateMarkdown(data, response)
	// create the markdown file with the formatted markdown
	// use markdown
}

init();
