export type UserData = {
  name: string;
  lastName: string;
  address: AddressData;
  cars: Car[];
};

export type AddressData = {
  street: string;
  houseNumber: number;
};

export type Location = {
  lat: number;
  lng: number;
};

export type AddressDataLocation = AddressData & Location;

export type Car = {
  brand: string;
  color: string;
  incidences: Incidence[];
};

export type Incidence = {
  place: AddressDataLocation;
  state: State;
};

export type State = 'closed' | 'opened' | 'pending';
