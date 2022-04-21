const Employee = require('../lib/employeeClass')

const response = {
    Name:'Name',
    ID: 123,
    Email: 'email',
}
describe('Employee', () => {
        it('should create an employee object', () => {


            const employee = new Employee(response)
            
            expect(employee.name).toEqual(response.Name)
            expect(employee.ID).toEqual(response.ID)
            expect(employee.email).toEqual(response.Email)
            expect(employee.role).toEqual('Employee')


        });
    
});

describe('getName', () => {
    it('should get the name of the employee', () => {
        
        const employee = new Employee(response)

        expect(employee.getName()).toEqual(response.Name)
    })
})

describe('getID', () => {
    it('should get the ID of the employee', () => {
        
        const employee = new Employee(response)

        expect(employee.getID()).toEqual(response.ID)
    })
})

describe('getEmail', () => {
    it('should get the email of the employee', () => {
        
        const employee = new Employee(response)

        expect(employee.getEmail()).toEqual(response.Email)
    })
})

describe('getRole', () => {
    it('should get the Role of the employee', () => {
        
        const employee = new Employee(response)

        expect(employee.getRole()).toEqual('Employee')
    })
})