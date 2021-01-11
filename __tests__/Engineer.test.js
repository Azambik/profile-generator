const Engineer = require("../lib/Engineer");

test("check name", () => {
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(engineer.name).toBe("Andrew Zambik");
});

test("getRoll", () => {
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(engineer.getRole()).toBe("Engineer");
});

test("check id", () => {
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(engineer.idNumber).toBe("ID:00001");
});

test("check email", () => {
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(engineer.eMail).toBe("blank@nope.com");
});

test("getName", () => {
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(engineer.getName()).toBe("Andrew Zambik");
    
});

test("getID", () => {
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com");

    expect(engineer.getId()).toBe("ID:00001");
    
});

test("getEmail", () => {
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com"); 

    expect(engineer.getEmail()).toBe("blank@nope.com");
});

test("getGithub", () =>{
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com"); 

    engineer.setGithub("Azambik");
    expect(engineer.getGithub()).toBe("Azambik")
})