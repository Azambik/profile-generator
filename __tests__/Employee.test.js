const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee.js");

test("check name", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(employee.name).toBe("Andrew Zambik");
});

test("getRoll", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com"); 

    employee.setTitle("manager");
    expect(employee.getRole()).toBe("manager");
});

test("check id", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(employee.idNumber).toBe("ID:00001");
});

test("check email", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(employee.eMail).toBe("blank@nope.com");
});

test("getName", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(employee.getName()).toBe("Andrew Zambik");
    
});

test("getID", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(employee.getId()).toBe("ID:00001");
    
});

test("getEmail", () => {
    const employee = new Employee("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(employee.getEmail()).toBe("blank@nope.com");
});
