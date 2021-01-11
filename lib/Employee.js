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
    getName(){
        return this.name;
    }
    getId(){
        return this.idNumber;
    }
    getEmail(){
        return this.eMail
    }
    getRole(){
        return this.title
    }
}


module.exports = Employee;