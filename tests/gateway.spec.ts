import request from 'supertest';
import { app, gateway } from '../src/gateway';
import 'dotenv/config';

describe('GET /', () => {
    afterAll((done) => {
        gateway.close(done);
    });

  it('should return a 200 status and the correct message', async () => {
    console.log(process.env.URL_SCHEDULAR_SERVICE);
    
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Running Gateway');
  });

  it('should return a 200 status and the correct message', async () => {
    const response = await request(app).get('/printer/impressora');
    expect(response.status).toBe(200);
  });
  it('should return a 200 status and the correct message', async () => {
    const response = await request(app).get('/user');
    expect(response.status).toBe(200);
  });
  it('should return a 200 status and the correct message', async () => {
    const response = await request(app).get('/schedular');
    expect(response.status).toBe(200);
  });
});
