const Engineer = require('../lib/engineerClass')

const response = {
    Name:'NameEngineer',
    ID: 123,
    Email: 'email',
    Github: 'github',
}
describe('Engineer', () => {
        it('should create an engineer object', () => {


            const engineer = new Engineer(response)
            
            expect(engineer.name).toEqual(response.Name)
            expect(engineer.ID).toEqual(response.ID)
            expect(engineer.email).toEqual(response.Email)
            expect(engineer.role).toEqual('Engineer')
            expect(engineer.github).toEqual(response.Github)


        });
    
});

describe('getName', () => {
    it('should get the name of the engineer', () => {
        
        const engineer = new Engineer(response)

        expect(engineer.getName()).toEqual(response.Name)
    })
})

describe('getID', () => {
    it('should get the ID of the engineer', () => {
        
        const engineer = new Engineer(response)

        expect(engineer.getID()).toEqual(response.ID)
    })
})

describe('getEmail', () => {
    it('should get the email of the engineer', () => {
        
        const engineer = new Engineer(response)

        expect(engineer.getEmail()).toEqual(response.Email)
    })
})

describe('getRole', () => {
    it('should get the Role of the engineer', () => {
        
        const engineer = new Engineer(response)

        expect(engineer.getRole()).toEqual('Engineer')
    })
})

describe('getGithub', () => {
    it('should get the github of the engineer', () => {
        
        const engineer = new Engineer(response)

        expect(engineer.getGithub()).toEqual(response.Github)
    })
})