class Employee {
    constructor(name, idNumber, eMail) {
        this.name = name;
        this.idNumber = idNumber;
        this.eMail = eMail;
        
    }
    setTitle(title) {
        this.title = title;
    }
    getInfo() {
        return {
            name: this.name,
            idNumber: this.idNumber,
            eMail: this.eMail
        };
    }
}


module.exports = Employee;