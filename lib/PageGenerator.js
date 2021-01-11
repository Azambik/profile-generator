const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const FileManager = require("../lib/FileManager");
const writeFile = require("../lib/Save");

function PageGenerator() {
    this.employees = [];
}

PageGenerator.prototype.startProjectBuild = function() {
    inquirer
     .prompt([
         {
          type: "text",
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
         this.employees.push(this.manager);
         this.getNextEmployee();
     })
}
PageGenerator.prototype.getNextEmployee = function() {
    inquirer
     .prompt({
         type: "list",
         message: "Do you have any more employees to add?",
         name: "action",
         choices: ["Yes","No"]
     })
     .then(({action}) =>{
         if (action === "Yes") {
             this.typeOfEmployee();
         } else {
            return FileManager(this.employees);
            
         }
     }) .then(data =>{
       return writeFile(data);
     })
     
    
}
PageGenerator.prototype.typeOfEmployee = function() {
    inquirer
     .prompt({
         type: "list",
         message: "What type of employee do you need to add?",
         name: "action",
         choices: ["Engineer","Intern"]
     })
     .then(({action}) =>{
         if (action === "Engineer") {
            inquirer
             .prompt([
                {
                 type: "text",
                 name: "name",
                 message:"What is this engineer's name?"
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
                    name: "github",
                    message: "What is this employee's github user name"
                }
                
                
            ])
            .then(input => {
                console.log(input);
                this.engineer = new Engineer(input.name, input.idNumber, input.eMail);
                this.engineer.setTitle("Engineer");
                this.engineer.setGithub(input.github);
                console.table(this.engineer.getInfo());
                console.log("title: " + this.engineer.title);
                console.log("github username: " +  this.engineer.githubUserName);
                this.employees.push(this.engineer);
                this.getNextEmployee();
            })
         } else {
            inquirer
            .prompt([
               {
                type: "text",
                name: "name",
                message:"What is this intern's name?"
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
                   name: "school",
                   message: "What is this name of this intern's school"
               }
               
               
           ])
           .then(input => {
               console.log(input);
               this.intern = new Intern(input.name, input.idNumber, input.eMail);
               this.intern.setTitle("Intern");
               this.intern.setSchool(input.school);
               console.table(this.intern.getInfo());
               console.log("title: " + this.intern.title);
               console.log("school: " +  this.intern.schoolName);
               this.employees.push(this.intern);
               this.getNextEmployee();
           })

         }
     })
}

module.exports = PageGenerator;