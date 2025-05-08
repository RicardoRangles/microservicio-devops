const request = require('supertest'); // Para hacer peticiones HTTP a mi API
const app = require('../index'); // Archivo principal es index.js

describe('POST /DevOps', () => {
  it('should return a success message when valid data is sent', async () => {
    const response = await request(app)
      .post('/DevOps')
      .set('X-Parse-REST-API-Key', '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c')
      .send({
        message: 'This is a test',
        to: 'Juan Perez',
        from: 'Rita Asturia',
        timeToLifeSec: 45
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello Juan Perez your message will be sent');
  });

  it('should return 403 when no API key is provided', async () => {
    const response = await request(app)
      .post('/DevOps')
      .send({
        message: 'This is a test',
        to: 'Juan Perez',
        from: 'Rita Asturia',
        timeToLifeSec: 45
      });

    expect(response.status).toBe(403);
  });
});
