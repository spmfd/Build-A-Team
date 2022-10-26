// Adding to Employee class - Manager information
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.title = "Manager"
    }

    getofficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;