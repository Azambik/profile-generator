const Employee = require("../lib/Employee");
class Manager extends Employee {
    constructor(name,idNumber, eMail){
        super(name, idNumber, eMail);
    }
    setOfficeNumber(officeNumber){
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;