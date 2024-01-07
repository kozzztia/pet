export interface Resident {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface GameResidents {
  id: number;
  name: string;
  image: string;
  isOpen: boolean;
}
