import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Patients from '../models/Patient';

export default {
  async find(request: Request, response: Response) {
    const { id } = request.params;
    const patientsRepository = getRepository(Patients);

    try {
      const patient = await patientsRepository.findOneOrFail(id);
      return response.json(patient);
    } catch (error) {
      return response.status(404).json({
        error: 'Paciente não encontrado!',
      });
    }
  },

  async create(request: Request, response: Response) {
    const { name, cpf, email, orgaoNecessitado } = request.body;

    const data = {
      name,
      cpf,
      email,
      orgaoNecessitado: JSON.stringify(orgaoNecessitado),
    };
    const patientRepository = getRepository(Patients);

    const patient = patientRepository.create(data);

    await patientRepository.save(patient);

    return response.status(201).json(patient);
  },

  async update(request: Request, response: Response) {
    const id = request.params;

    const { name, cpf, email, orgaoNecessitado } = request.body;

    const patientsRepository = getRepository(Patients);

    try {
      const updatedPatient = await patientsRepository.update(id, {
        name,
        cpf,
        email,
        orgaoNecessitado: JSON.stringify(orgaoNecessitado),
      });

      return response.json({
        message: 'Donator Updated',
        id,
        updatedPatient,
      });
    } catch (error) {
      return response.status(404).json({
        error: 'Doador não encontrado!',
      });
    }
  },

  async remove(request: Request, response: Response) {
    const { id } = request.params;

    const patientsRepository = getRepository(Patients);

    try {
      const patient = await patientsRepository.findOneOrFail({ id });

      await patientsRepository.remove(patient);

      return response.json({ message: 'removed donator', donator: patient });
    } catch (error) {
      return response.status(404).json({
        error: 'Doador não encontrado!',
      });
    }
  },
};
