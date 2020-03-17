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
      .send('This route is working')
      .then(res => {
        expect(res.text).toEqual('This route is working');
      });
  });

  it('retrieves the /red route', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual(`<html>
        <body>
          <h1>Red</h1>
        </body>
      </html>`);
      });
  });

  it('retrieves the /green route', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual(`<html>
        <body>
          <h1>Green</h1>
        </body>
      </html>`);
      });
  });

  it('retrieves the /blue route', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual(`<html>
        <body>
          <h1>Blue</h1>
        </body>
      </html>`);
      });
  });

  it('404 test', () => {
    return request(app)
      .get('/wrong')
      .then(res => {
        expect(res.text).toEqual('Not Found');
      });
  });
});
