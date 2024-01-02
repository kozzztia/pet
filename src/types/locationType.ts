interface resident {
  id: number;
  image: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  residents: resident[];
}
