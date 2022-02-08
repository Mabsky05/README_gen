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
            message: "Input short project description:",
        },
        {
            type: 'input',
            name: 'Tech',
            message: "Input languages, extensions used:",
        },
        {
            type: 'input',
            name: 'Installation',
            message: "Input installation instructions:",
        },
        {
            type: 'input',
            name: 'Usage',
            message: "Input usage instructions:",
        },
        {
            type: 'input',
            name: 'Contributing',
            message: "Input Contributors",
        },
        {
            type: 'input',
            name: 'Tests',
            message: "Input any tests",
        },
        {
            type: 'input',
            name: 'Contact',
            message: "Enter email / other contact info",
        },

    ])
}
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const generateMD = ({Title, Description, Tech, Installation, Usage, Contributing, Tests, Contact }) =>

"## " + `${Title}` + "\n\n" + 
"![Project Image](assets/sample.jpg)" + "\n" + 
"![Project GIF](assets/sample.gif)" + "\n" +
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" +
"## " + "Description" + "\n" + `${Description}`  + "\n\n" +
"## " + "Table of Contents" + "\n" + "[Tech](#Tech)" + "\n\n" +
"[Installation](#Installation)" + "\n\n" + "[Usage](#Usage)" + "\n\n" + "[Contributing](#Contributing)" + "\n\n" + 
"[Tests](#Tests)" + "\n\n" + "[Contact](#Contact)" + "\n\n" +
"## " + "Tech" + "\n" + `${Tech}` + "\n\n" +
"## " + "Installation" + "\n" + `${Installation}` + "\n\n" +
"## " + "Usage" + "\n" + `${Usage}` + "\n\n" +
"## " + "Contributing" + "\n" + `${Contributing}` + "\n\n" +
"## " + "Tests" + "\n" + `${Tests}` + "\n\n" +
"## " + "Questions / Contact" + "\n" + `${Contact}` + "\n\n" +
"## " + "Log"



const create = () => {
    promptUser()
    .then ((answers) => fs.writeFileSync("assets/README.md", generateMD(answers))) 
    .then ()
    .catch ()
    
};

create()


