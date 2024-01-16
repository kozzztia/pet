export interface Resident {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

export interface BubleResident {
  id: number | string;
  name: string;
  image: string;
  isOpen: boolean;
}

export interface LocationData {
  residents: Resident[];
  name: string;
}

export interface BublesData {
  bubles: BubleResident[];
}

export interface GameStateData {
  residents: Resident[];
  bubles: BubleResident[];
  name: string;
}
