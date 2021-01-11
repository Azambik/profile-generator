const { TestScheduler } = require("jest");
const Manager = require("../lib/Manager");

test("check name", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(manager.name).toBe("Andrew Zambik");
});

test("getRoll", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(manager.getRole()).toBe("Manager");
});

test("check id", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(manager.idNumber).toBe("ID:00001");
});

test("check email", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(manager.eMail).toBe("blank@nope.com");
});

test("getName", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(manager.getName()).toBe("Andrew Zambik");
    
});

test("getID", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(manager.getId()).toBe("ID:00001");
    
});

test("getEmail", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(manager.getEmail()).toBe("blank@nope.com");
});

test("getOfficeNumber", () =>{
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com"); 

    manager.setOfficeNumber("42");
    expect(manager.getOfficeNumber()).toBe("42")
})
