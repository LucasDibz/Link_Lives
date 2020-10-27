import 'mocha';
import { expect } from 'chai';
import api from '../src/services/api';

interface Patient {
  name: string;
  cpf: number;
  email: string;
  orgaoNecessitado: string;
}

interface Donator {
  name: string;
  password: string;
  cpf: number;
  rg: number;
  email: string;
  smoker: boolean;
  genre: string;
  emailRelative: string;
  disease: string;
}

describe('Patients Routes', () => {
  // Teste 1 criar um paciente
  it('Should create a patient', async () => {
    const patient: Patient = {
      name: 'Patient Test',
      cpf: 321,
      email: 'patient@email.com',
      orgaoNecessitado: 'coração',
    };

    const { data } = await api.post('/patients', patient);

    expect(data).to.be.an('object').to.have.property('cpf').to.equal(321);
  });

  // Teste 2 achar paciente
  it('Should return a single patient', async () => {
    const { data } = await api.get('/patients/1');
    const patient: Patient = data;
    expect(patient).to.be.an('object').to.have.property('id').to.equal(1);
  });
  // Teste 3 update paciente
  it('Should update a patient', async () => {
    const { data: getData } = await api.get('/patients/1');
    const patient: Patient = getData;
    patient.cpf += 1;
    const { data } = await api.put('/patients/1', {
      ...patient,
    });
    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('Pacient Updated');
  });
  // Teste 4 deletar paciente
  it('Should Delete a Patient', async () => {
    const { data } = await api.delete('/patients/1');

    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('removed patient');
  });
});

describe('Donators Routes', () => {
  // Teste 5 criar um donator
  it('Should create a donator', async () => {
    const donator: Donator = {
      name: 'Donator Test',
      cpf: 321,
      password: '123',
      rg: 12345,
      genre: 'Masculino',
      email: 'donator@email.com',
      emailRelative: 'relative@email.com',
      smoker: false,
      disease: 'None',
    };

    const { data } = await api.post('/donators', donator);

    expect(data).to.be.an('object').to.have.property('cpf').to.equal(321);
  });
  // Teste 6 lista de todos donators
  it('Should return an donators list', async () => {
    const { data } = await api.get('/donators');
    const donators: Patient[] = data;
    expect(donators).to.be.an('array').to.have.length.greaterThan(0);
  });
  // Teste 7 achar um donator
  it('Should return a single donator', async () => {
    const { data } = await api.get('/donators/321');
    const donator: Donator = data;
    expect(donator).to.be.an('object').to.have.property('cpf').to.equal(321);
  });
  // Teste 8 atualizar um donator
  it('Should update a donator', async () => {
    const { data: getData } = await api.get('/donators/321');
    const donator: Donator = getData;
    donator.rg += 1;
    const { data } = await api.put('/donators/1', {
      ...donator,
    });
    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('Donator Updated');
  });
  // Teste 9 deletar um donator
  it('Should Delete a Donator', async () => {
    const { data } = await api.delete('/donators/321');

    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('removed donator');
  });
});
