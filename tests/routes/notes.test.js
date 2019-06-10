require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

describe('Note route tests', ()=> {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates a note', () => {
    return request(app)
      .post('/notes')
      .send({ title: 'titled', body: 'bodied' })
      .then(res => {
        expect(res.body).toEqual({
          title: 'titled',
          body: 'bodied',
          __v: 0,
          _id: expect.any(String)
        });
      });
  });

  it('gets all notes', () => {
    return request(app)
      .post('/notes')
      .send({ title: 'titled', body: 'bodied' })
      .then(createdNoted => {
        return request(app)
          .get('/notes')
          .then(res => {
            expect(res.body[0].title).toEqual('titled');
          });
      });
  });
});
