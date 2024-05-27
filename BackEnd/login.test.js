const request = require('supertest');
const { loginback } = require('./loginback');

describe('Login API Tests', () => {

  it('should login successfully with valid credentials', (done) => {
    const validEmail = 'jacky@gmail.com';
    const validPassword = 'j';

    request(loginback)
      .post('/usertable')
      .send({ email: validEmail, password: validPassword })
      .expect(200)
      .expect(response => {
        expect(response.body.message).toBe('Login successful');
        expect(response.body.user).toBeDefined();
      })
      .end(done);
  });

  it('should return 401 for invalid credentials', (done) => {
    const invalidEmail = 'invalid@example.com';
    const invalidPassword = 'wrongpassword';

    request(loginback)
      .post('/usertable')
      .send({ email: invalidEmail, password: invalidPassword })
      .expect(401)
      .expect(response => {
        expect(response.body.message).toBe('Invalid email or password');
      })
      .end(done);
  });
});
