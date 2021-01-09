const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee.js");

test("creat Employee object", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(employee.name).toBe("Andrew Zambik");
    expect(employee.idNumber).toBe("ID:00001");
    expect(employee.eMail).toBe("blank@nope.com");
});

test("set employee title", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com"); 

    employee.setTitle("manager");
    expect(employee.title).toBe("manager");
});
    
