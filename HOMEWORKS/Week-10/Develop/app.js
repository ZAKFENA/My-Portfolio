const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
console.log("test");

function promptUser() {
  const allEmployees = [];
  function promptManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter your name",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter your ID",
        },
        {
          type: "input",
          name: "email",
          message: "Please enter your Email",
        },
        {
          type: "input",
          name: "officenumber",
          message: "Please enter your officeNumber",
        },
      ])
      .then((answers) => {
        // create instance of manager class
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officenumber
        );
        allEmployees.push(manager);
        console.log(allEmployees);

        teamMember();
      });

    function teamMember() {
      inquirer
        .prompt([
          {
            type: "list",
            name: "employeecategory",
            message: "Please choose employee catagory",
            choices: ["Engineer", "Intern", "Done"],
          },
        ])
        .then((answers) => {
          if (answers.employeecategory === "Engineer") {
            addEngineer();
          }
          if (answers.employeecategory === "Intern") {
            addIntern();
          }
          if (answers.employeecategory === "Done") {
            buildTeam();
          }
        });
    }

    function addEngineer() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Please enter your name",
          },
          {
            type: "input",
            name: "id",
            message: "Please enter your ID",
          },
          {
            type: "input",
            name: "email",
            message: "Please enter your Email",
          },
          {
            type: "input",
            name: "github",
            message: "Please enter your github username",
          },
        ])
        .then((answers) => {
          // create instance of manager class
          const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          );
          allEmployees.push(engineer);
          console.log(allEmployees);

          teamMember();
        });
    }

    function addIntern() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "name",
            message: "Please enter your name",
          },
          {
            type: "input",
            name: "id",
            message: "Please enter your ID",
          },
          {
            type: "input",
            name: "email",
            message: "Please enter your Email",
          },
          {
            type: "input",
            name: "school",
            message: "Please enter your school name",
          },
        ])
        .then((answers) => {
          // create instance of manager class
          const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          allEmployees.push(intern);
          console.log(allEmployees);

          teamMember();
        });
    }

    function buildTeam() {
      //   fs.mkdirSync(OUTPUT_DIR);
      fs.writeFileSync(outputPath, render(allEmployees), "UTF-8");
    }
  }
  promptManager();

  // return inquirer.prompt([
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "Please enter your name",
  //     },
  //     {
  //       type: "input",
  //       name: "id",
  //       message: "Please enter your ID",
  //     },
  //     {
  //       type: "input",
  //       name: "email",
  //       message: "Please enter your Email",
  //     },

  // ]);

  //   if (getRole() === "Engineer") {
  //     return inquirer.prompt([
  //       {
  //         type: "input",
  //         name: "name",
  //         message: "Please enter your name",
  //       },
  //       {
  //         type: "input",
  //         name: "id",
  //         message: "Please enter your ID",
  //       },
  //       {
  //         type: "input",
  //         name: "email",
  //         message: "Please enter your Email",
  //       },
  //       {
  //         type: "input",
  //         name: "github",
  //         message: "Please enter your github username",
  //       },
  //     ]);
  //   }

  //   if (getRole() === "Intern") {
  //     return inquirer.prompt([
  //       {
  //         type: "input",
  //         name: "name",
  //         message: "Please enter your name",
  //       },
  //       {
  //         type: "input",
  //         name: "id",
  //         message: "Please enter your ID",
  //       },
  //       {
  //         type: "input",
  //         name: "email",
  //         message: "Please enter your Email",
  //       },
  //       {
  //         type: "input",
  //         name: "school",
  //         message: "Please enter your scool name",
  //       },
  //     ]);
  //   }
  //   if (getRole() === "Manager") {
  //     return inquirer.prompt([
  //       {
  //         type: "input",
  //         name: "name",
  //         message: "Please enter your name",
  //       },
  //       {
  //         type: "input",
  //         name: "id",
  //         message: "Please enter your ID",
  //       },
  //       {
  //         type: "input",
  //         name: "email",
  //         message: "Please enter your Email",
  //       },
  //       {
  //         type: "input",
  //         name: "email",
  //         message: "Please enter your Email",
  //       },
  //       {
  //         type: "input",
  //         name: "officenumber",
  //         message: "Please enter your officeNumber",
  //       },
  //     ]);
  //   }

  //   return inquirer.prompt([
  //     {
  //       type: "input",
  //       name: "name",
  //       message: "Please enter your name",
  //     },
  //     {
  //       type: "input",
  //       name: "id",
  //       message: "Please enter your ID",
  //     },
  //     {
  //       type: "input",
  //       name: "email",
  //       message: "Please enter your Email",
  //     },
  //     {
  //       type: "input",
  //       name: "officenumber",
  //       message: "please enter your office no.",
  //     },
  //     {
  //       type: "input",
  //       name: "github",
  //       message: "Please enter your github username",
  //     },
  //     {
  //       type: "input",
  //       name: "school",
  //       message: "school",
  //     },
  //   ]);
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

promptUser();
//   .then(function (answers) {
//     const readme = generateREADME(answers);

//     return writeFileAsync("README.md", readme);
//   })
//   .then(function () {
//     console.log("Successfully wrote to README.md");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
