import 'mocha';
import { expect } from 'chai';
import api from '../src/services/api';

interface Patient {
  id: number;
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
  smoker: true;
  genre: string;
  emailRelative: string;
  disease: string;
}

describe('Patients Routes', () => {
  // teste 1
  it('Should return a single patient', async () => {
    const { data } = await api.get('/patients/1');
    const patient: Patient = data;
    expect(patient).to.be.an('object').to.have.property('id').to.equal(1);
  });

  // teste 2
  it('Should update a patient', async () => {
    const { data } = await api.get('/patients/1');
    const patient: Patient = data;
    patient.cpf += 1;
    const updatedPatient = await api.put('/patients/1', {
      ...patient,
    });
    expect(updatedPatient.data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('Pacient Updated');
  });
});

describe('Donators Routes', () => {
  // teste 3
  it('Should return a single donator', async () => {
    const { data } = await api.get('/donators/123');
    const patient: Patient = data;
    expect(patient).to.be.an('object').to.have.property('cpf').to.equal(123);
  });

  it('Should update a donator', async () => {
    const { data } = await api.get('/donators/123');
    const donator: Donator = data;
    donator.rg += 1;
    const updatedDonator = await api.put('/donators/1', {
      ...donator,
    });
    expect(updatedDonator.data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('Donator Updated');
  });
});
