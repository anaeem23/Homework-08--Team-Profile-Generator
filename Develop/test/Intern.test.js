const Intern = require('../lib/internClass')

const response = {
    Name:'NameIntern',
    ID: 123,
    Email: 'email',
    School: 'school',
}
describe('Intern', () => {
        it('should create an intern object', () => {


            const intern = new Intern(response)
            
            expect(intern.name).toEqual(response.Name)
            expect(intern.ID).toEqual(response.ID)
            expect(intern.email).toEqual(response.Email)
            expect(intern.role).toEqual('Intern')
            expect(intern.school).toEqual(response.School)


        });
    
});

describe('getName', () => {
    it('should get the name of the intern', () => {
        
        const intern = new Intern(response)

        expect(intern.getName()).toEqual(response.Name)
    })
})

describe('getID', () => {
    it('should get the ID of the intern', () => {
        
        const intern = new Intern(response)

        expect(intern.getID()).toEqual(response.ID)
    })
})

describe('getEmail', () => {
    it('should get the email of the intern', () => {
        
        const intern = new Intern(response)

        expect(intern.getEmail()).toEqual(response.Email)
    })
})

describe('getRole', () => {
    it('should get the Role of the intern', () => {
        
        const intern = new Intern(response)

        expect(intern.getRole()).toEqual('Intern')
    })
})

describe('getSchool', () => {
    it('should get the school of the intern', () => {
        
        const intern = new Intern(response)

        expect(intern.getSchool()).toEqual(response.School)
    })
})