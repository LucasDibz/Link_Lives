import express from 'express';
import routes from '../src/routes';

const app = express();

app.use(routes);

describe('Patients Routes', () => {
  it('Should return a single patient', () => {
    expect(app.get('/patients/1')).toBe({
      name: 'lucas',
      cpf: '123',
      email: 'teste@gmail.com',
      orgaoNecessitado: 'Pulmão',
    });
  });
});
