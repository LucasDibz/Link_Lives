import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Patient from "../models/Patient";

export default {
  async find(request: Request, response: Response) {
    const { id } = request.params;
    const patientsRepository = getRepository(Patient);

    try {
      const patient = await patientsRepository.findOneOrFail(id);
      return response.json(patient);
    } catch (error) {
      return response.status(404).json({
        error: "Paciente não encontrado!",
      });
    }
  },

  async create(request: Request, response: Response) {
    const { name, cpf, email, orgaoNecessitado } = request.body;

    const data = {
      name,
      cpf,
      email,
      orgaoNecessitado : JSON.stringify(orgaoNecessitado) 
    };
    const patientRepository = getRepository(Patient);

    const patient = patientRepository.create(data);

    await patientRepository.save(patient);

    return response.status(201).json(patient);
  },
};
