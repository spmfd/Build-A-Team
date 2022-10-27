const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const testEngineer = new Engineer();
    expect(typeof testEngineer).toBe('object') 
})

test("Should be able to input github based on user input", () => {
    const testEngineer = new Engineer("Robyn", 123, "test@gmail.com", "robyngithub")
    
    expect(testEngineer.github).toEqual("robyngithub")
})

test("Using getGithub() should be able to return input", () => {
    const testEngineer = new Engineer("Robyn", 123, "test@gmail.com", "robyngithub").getGithub()
    
    expect(testEngineer).toEqual("robyngithub")
})

test("getRole() should return title", () => {
    const testRole = new Engineer().getRole()

    expect(testRole).toEqual('Engineer')  
})