const Employee = require("../lib/Employee");
class Intern extends Employee {
    constructor(name,idNumber, eMail){
        super(name, idNumber, eMail);
    }
    setSchool(schoolName){
        this.schoolName = schoolName;
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.schoolName;
    }
}

module.exports = Intern;