import app from '../src/app'
import supertest from 'supertest'

const request = supertest.agent(app.listen())

describe('Hello World', function () {
  it('should say "Hello World"', function (done) {
    request
      .get('/riders/12')
      .expect(200)
      .expect('12', done)
  })
})

