const request = require('supertest');
const app = require('../index');

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

  it('should return 405 for GET requests', async () => {
    const response = await request(app)
      .get('/DevOps')
      .set('X-Parse-REST-API-Key', '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c')
      .send();

    expect(response.status).toBe(405); // Method Not Allowed
  });

  it('should return 405 for PUT requests', async () => {
    const response = await request(app)
      .put('/DevOps')
      .set('X-Parse-REST-API-Key', '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c')
      .send();

    expect(response.status).toBe(405); // Method Not Allowed
  });

  it('should return 405 for DELETE requests', async () => {
    const response = await request(app)
      .delete('/DevOps')
      .set('X-Parse-REST-API-Key', '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c')
      .send();

    expect(response.status).toBe(405); // Method Not Allowed
  });

  it('should return 404 for invalid routes', async () => {
    const response = await request(app)
      .post('/InvalidRoute')
      .set('X-Parse-REST-API-Key', '2f5ae96c-b558-4c7b-a590-a501ae1c3f6c')
      .send({
        message: 'This is a test',
        to: 'Juan Perez',
        from: 'Rita Asturia',
        timeToLifeSec: 45
      });

    expect(response.status).toBe(404); // Not Found
  });
});
