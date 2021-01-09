const Employee = require("../lib/Employee");
class Engineer extends Employee {
    constructor(name,idNumber, eMail){
        super(name, idNumber, eMail);
    }
    setGithub(githubUserName){
        this.githubUserName = githubUserName;
    }
}

module.exports = Engineer;