const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('retrieves the home page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('posts to the echo route', () => {
    return request(app)
      .post('/echo')
      .send('hi')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
});
