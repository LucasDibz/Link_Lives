import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Donators from '../models/Donator';

export default {
  async index(request: Request, response: Response) {
    const donatorsRepository = getRepository(Donators);
    const donators = await donatorsRepository.find();
    return response.json(donators);
  },

  async find(request: Request, response: Response) {
    const { cpf } = request.params;
    const donatorsRepository = getRepository(Donators);

    try {
      const donator = await donatorsRepository.findOneOrFail({
        cpf: parseInt(cpf),
      });
      return response.json(donator);
    } catch (error) {
      return response.status(404).json({
        error: 'Doador não encontrado!',
      });
    }
  },

  async create(request: Request, response: Response) {
    const {
      name,
      password,
      cpf,
      rg,
      email,
      smoker,
      genre,
      emailRelative,
      disease,
    } = request.body;

    const data = {
      name,
      password,
      cpf,
      rg,
      email,
      smoker,
      genre,
      emailRelative,
      disease,
    };

    const donatorsRepository = getRepository(Donators);

    const donator = donatorsRepository.create(data);

    await donatorsRepository.save(donator);

    return response.status(201).json(donator);
  },

  async update(request: Request, response: Response) {
    const id = request.params;

    const {
      name,
      password,
      cpf,
      rg,
      email,
      smoker,
      genre,
      emailRelative,
      disease,
    } = request.body;

    const donatorsRepository = getRepository(Donators);

    try {
      const updatedDonator = await donatorsRepository.update(id, {
        name,
        password,
        cpf,
        rg,
        email,
        smoker,
        genre,
        emailRelative,
        disease,
      });

      return response.json({
        message: 'Donator Updated',
        id,
        updatedDonator,
      });
    } catch (error) {
      return response.status(404).json({
        error: 'Doador não encontrado!',
      });
    }
  },

  async remove(request: Request, response: Response) {
    const { cpf } = request.params;
    const donatorsRepository = getRepository(Donators);

    try {
      const donator = await donatorsRepository.findOneOrFail({
        cpf: parseInt(cpf),
      });
      await donatorsRepository.remove(donator);

      return response.json({ message: 'removed donator', donator });
    } catch (error) {
      return response.status(404).json({
        error: 'Doador não encontrado!',
      });
    }
  },
};
