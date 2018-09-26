var request = require('supertest');

describe('Run Integration Tests', function() {
    it('Responds to Marco with Polo', function testSlash(done) {
        request('http://localhost:3006')
            .get('/marco')
            .expect('Polo!')
            .expect(200, done);
    });

    it('404 to everything else', function testPath(done) {
        request('http://localhost:3006')
            .get('/')
            .expect(404, done);
    })
})