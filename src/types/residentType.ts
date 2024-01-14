export interface Resident {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

// export interface GameResident {
//   id: number | string;
//   name: string;
//   image: string;
//   isOpen: boolean;
// }

export interface LocationData {
  residents: Resident[];
  name: string;
}
