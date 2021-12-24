const request = require('supertest')
const app = require('../../src/app')

const usermock = {
        name:"Leonan",
        email:"leonan@gmail.com",
        password:"1234",
        confirmPassword:"1234",
        admin:true
}

it("example api test", async () => {

    const result = await request(app)
    .get('/test')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    
})