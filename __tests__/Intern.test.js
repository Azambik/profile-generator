const { TestScheduler } = require("jest");
const Intern = require("../lib/Intern");

test("check name", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(intern.name).toBe("Andrew Zambik");
});

test("getRoll", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(intern.getRole()).toBe("Intern");
});

test("check id", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(intern.idNumber).toBe("ID:00001");
});

test("check email", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(intern.eMail).toBe("blank@nope.com");
});

test("getName", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(intern.getName()).toBe("Andrew Zambik");
    
});

test("getID", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(intern.getId()).toBe("ID:00001");
    
});

test("getEmail", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(intern.getEmail()).toBe("blank@nope.com");
});

test("set intern school", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com");

    intern.setSchool("UCF coding boot camp");
    expect(intern.getSchool()).toBe("UCF coding boot camp");
});