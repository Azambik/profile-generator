const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function PageGenerator() {
    this.engineerCount = 0;
    this.internCount = 0;
}

PageGenerator.prototype.startProjectBuild = function() {
    inquirer
     .prompt([
         {
          type: "test",
          name: "name",
          message:"What is this projects manager name?"
         },
         {
          type: "text",
          name: "idNumber",
          message: "What is this employee's ID number?"
         },
         {
          type: "text",
          name: "eMail",
          message: "What is this employee's E-mail address?"
         },
         {
             type: "text",
             name: "office",
             message: "What is this employee's office number"
         }
         
         
     ])
     .then(input => {
         console.log(input);
         this.manager = new Manager(input.name, input.idNumber, input.eMail);
         this.manager.setTitle("Manager");
         this.manager.setOfficeNumber(input.office);
         console.table(this.manager.getInfo());
         console.log("title: " + this.manager.title);
         console.log("office number: " +  this.manager.officeNumber);
     })
}

module.exports = PageGenerator;