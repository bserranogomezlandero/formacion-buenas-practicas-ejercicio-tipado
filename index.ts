// Import stylesheets
import './style.css';
import { State, UserData } from './types';

// Crea un objeto del tipo UserData
const userData: UserData = {};

const data: UserData = {
  name: 'user',
  lastName: 'test',
  address: {
    street: 'street test',
    houseNumber: 3,
  },
  cars: [
    {
      brand: 'volvo',
      color: 'black',
      incidences: [
        {
          place: {
            street: 'street test 2',
            houseNumber: 5,
            lat: 37.37,
            lng: -6,
          },
          state: 'closed',
        },
        {
          place: {
            street: 'street test 3',
            houseNumber: 6,
            lat: 34.34,
            lng: -3,
          },
          state: 'opened',
        },
      ],
    },
    {
      brand: 'seat',
      color: 'red',
      incidences: [
        {
          place: {
            street: 'street test 4',
            houseNumber: 7,
            lat: 37.34,
            lng: -9,
          },
          state: 'pending',
        },
      ],
    },
  ],
};

// Recibe el objeto de tipo "UserData" y devuelve un array con los estados de las incidencias.
function getStates(userData: UserData): State[] {
  const states: State[] = [];
  // Añade la lógica necesaria para obtener el array de estados
  return states;
}
console.log(getStates(data));

// Crea un función que reciba el objeto "data" como primer parámetro y un objeto con los campos "street" y "houseNumber" como segundo parámetro.
// Esta función debe modificar los datos de la propiedad "address" para añadirle los del objeto del segundo parámetro.
// La función deberá devolver el objeto "data" modificado.
// Usa la función y saca el resultado por consola.
