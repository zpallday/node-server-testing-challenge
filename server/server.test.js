const request = require('supertest');
const server = require('./server.js');

describe('server', () => {
    describe('GET /', () => {
        it('returns the 200', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
        it("Should return {api: 'up'}", async () => {
            const res = await request(server).get('/');
            expect(res.body.api).toBe('up')
        })
        it('returns JSON', done => {
            request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
                done()
            })
        })
    })
})