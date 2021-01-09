const Employee = require("../lib/Employee");
class Intern extends Employee {
    constructor(name,idNumber, eMail){
        super(name, idNumber, eMail);
    }
    setSchool(schoolName){
        this.schoolName = schoolName;
    }
}

module.exports = Intern;