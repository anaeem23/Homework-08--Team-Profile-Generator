const Manager = require('../lib/managerClass')

const response = {
    Name:'Name',
    ID: 123,
    Email: 'email',
    offNum:123,
}
describe('Manager', () => {
        it('should create an manager object', () => {


            const manager = new Manager(response)
            
            expect(manager.name).toEqual(response.Name)
            expect(manager.ID).toEqual(response.ID)
            expect(manager.email).toEqual(response.Email)
            expect(manager.role).toEqual('Manager')
            expect(manager.officeNumber).toEqual(response.offNum)


        });
    
});

describe('getName', () => {
    it('should get the name of the manager', () => {
        
        const manager = new Manager(response)

        expect(manager.getName()).toEqual(response.Name)
    })
})

describe('getID', () => {
    it('should get the ID of the manager', () => {
        
        const manager = new Manager(response)

        expect(manager.getID()).toEqual(response.ID)
    })
})

describe('getEmail', () => {
    it('should get the email of the manager', () => {
        
        const manager = new Manager(response)

        expect(manager.getEmail()).toEqual(response.Email)
    })
})

describe('getRole', () => {
    it('should get the Role of the manager', () => {
        
        const manager = new Manager(response)

        expect(manager.getRole()).toEqual('Manager')
    })
})