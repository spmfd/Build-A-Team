const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const testManager = new Manager();

    expect(typeof testManager).toBe('object')
})

test("Should be able to input office number based on user input", () => {
    const testManager = new Manager("Robyn", 123, "test@gmail.com", 789)

    expect(testManager.officeNumber).toEqual(789)
})

test("Using getOfficeNumber() should be able to return input", () => {
    const testManager = new Manager("Robyn", 123, "test@gmail.com", 789).getOfficeNumber();

    expect(testManager).toEqual(789)
})

test("getRole() should return title", () => {
    const testManager = new Manager().getRole();
    
    expect(testManager).toEqual('Manager')  
})