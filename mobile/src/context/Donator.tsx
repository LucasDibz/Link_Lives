import { createContext } from 'react';

interface Donator {
  id: number;
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

const DonatorContext = createContext<Donator>({} as Donator);

export default DonatorContext;
