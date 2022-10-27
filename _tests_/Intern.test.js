const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const testIntern = new Intern();
    expect(typeof testIntern).toBe('object') 
})

test("Should be able to input school based on user input", () => {
    const testIntern = new Intern("Robyn", 123, "test@gmail.com", "BYU")

    expect(testIntern.school).toEqual("BYU")
})

test("Using getSchool() should be able to return input", () => {
    const testIntern = new Intern("Robyn", 123, "test@gmail.com", "BYU").getSchool()

    expect(testIntern).toEqual("BYU")
})

test("getRole() should return title", () => {
    const testIntern = new Intern().getRole();
    
    expect(testIntern).toEqual('Intern')  
})