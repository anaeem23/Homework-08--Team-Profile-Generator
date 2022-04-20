class Employee {
    constructor(response) {
      this.name = response.Name;
      this.ID = response.ID;
      this.email = response.Email;
      this.role = "Employee";
    }
  
    getName() {
      console.log(this.name);
      return this.name
    }
  
    getID() {
      console.log(this.ID);
      return this.ID
    }
  
    getEmail() {
      console.log(this.email);
      return this.email
    }
  
    getRole() {
      console.log(this.role);
      return this.role
    }
  }

module.exports = Employee;