

describe('My first test', () => {
    it('Should fail', () => {
        expect(2+2).to.equal(5);
    })
    it('Should pass', () => {
        expect(2+2).to.equal(4);
    })
    it('should visit google', () => {
        cy.visit('http://www.google.com')
    })
})