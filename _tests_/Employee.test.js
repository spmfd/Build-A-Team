const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const testEmployee = new Employee();
    expect(typeof testEmployee).toBe('object') 
})

test("Can set name via constructor arguments", () => {
    const testEmployee = new Employee("Robyn")

    expect(testEmployee.name).toEqual("Robyn") 
})

test("Can set id via constructor argument", () => {
    const testId = new Employee("Robyn", 123)
    
    expect(testId.id).toEqual(123) 
})

test("Can set email via constructor argument", () => {
    const testEmail = new Employee('Robyn', 123, "test@gmail.com");

    expect(testEmail.email).toEqual("test@gmail.com")  
})

test("Can get name via getName()", () => {
    const Name = new Employee("Robyn").getName();

    expect(Name).toEqual("Robyn") 
})

test("Can get id via getId()", () => {
    const testId = new Employee("Robyn", 123).getId()

    expect(testId).toEqual(123)
})

test("Can get email via getEmail()", () => {
const testEmail = new Employee("Robyn", "123", "test@gmail.com").getEmail()
    expect(testEmail).toEqual("test@gmail.com")  
})

test("getRole() should return title", () => {
    const testRole = new Employee().getRole();
    expect(testRole).toEqual('Employee')  
})