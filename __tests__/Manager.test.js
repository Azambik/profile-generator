const { TestScheduler } = require("jest");
const Manager = require("../lib/Manager");

test("set manager title", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com"); 

    manager.setTitle("manager");
    expect(manager.title).toBe("manager");
});

test("set manager office number", () => {
    const manager = new Manager("Andrew Zambik", "ID:00001","blank@nope.com"); 

    manager.setOfficeNumber(42)
    expect(manager.officeNumber).toEqual(expect.any(Number));
})