const Employee = require('./employeeClass')

class Manager extends Employee {
    constructor(response) {
      super(response);
      this.officeNumber = response.offNum;
      this.role = "Manager";
    }
  }

  module.exports = Manager
