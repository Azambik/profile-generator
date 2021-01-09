const Engineer = require("../lib/Engineer");

test("set github user name", () =>{
    const engineer = new Engineer("Andrew Zambik", "ID:00001","blank@nope.com");

    engineer.setGithub("Azambik");

    expect(engineer.githubUserName).toBe("Azambik");
})
