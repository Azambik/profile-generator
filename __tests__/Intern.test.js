const { TestScheduler } = require("jest");
const Intern = require("../lib/Intern");

test("set intern school", () => {
    const intern = new Intern("Andrew Zambik", "ID:00001","blank@nope.com");

    intern.setSchool("UCF coding boot camp");
    expect(intern.schoolName).toBe("UCF coding boot camp");
})