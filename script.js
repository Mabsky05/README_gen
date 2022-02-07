const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: "Input Project Title:",
        },
        {
            type: 'input',
            name: 'Description',
            message: "Short description of your project:",
        },
        {
            type: 'input',
            name: 'Tech',
            message: "Languages, extensions you used:",
        },
        {
            type: 'input',
            name: 'Installation',
            message: "How do you use your project:",
        },
        {
            type: 'input',
            name: 'Quest_Con',
            message: "Enter email / other contact info",
        },

    ])
}
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const generateMD = ({Title, Summary, Tech, Desc_Inst, Contact }) =>

"## " + `${Title}` + "\n\n" + 
"![Project Image](assets/sample.jpg)" + "\n" + 
"![Project GIF](assets/sample.gif)" + "\n" + 
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" +
"## " + "Description" + "\n" + `${Description}` + "\n\n" +
"## " + "Tech" + "\n" + `${Tech}` + "\n\n" +
"## " + "Installation" + "\n" + `${Installation}` + "\n\n" +
"## " + "Questions / Contact" + "\n" + `${Contact}` + "\n\n" +
"## " + "Log"



const create = () => {
    promptUser()
    .then ((answers) => fs.writeFileSync("README.md", generateMD(answers))) 
    .then ()
    .catch ()
    
};

create()


