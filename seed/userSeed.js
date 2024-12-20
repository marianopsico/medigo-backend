import { crearNuevoCliente } from "../controladores/clientes.js";
import { crearMedico } from "../controladores/medicos.js";
import {
  ENUM_MEDICO_ESPECIALIDADES,
  ENUM_USUARIO_ESTADOS,
} from "../utils/enums.js";
import coords from "../utils/coords.js";

const nombresClientes = [
  "Juan",
  "Ana",
  "Carlos",
  "María",
  "Pedro",
  "Laura",
  "Diego",
  "Sofía",
  "Javier",
  "Valentina",
  "Luis",
  "Camila",
  "Fernando",
  "Isabella",
  "Miguel",
  "Emma",
  "Alejandro",
  "Lucía",
  "Ricardo",
  "Victoria",
  "Gabriel",
  "Marta",
  "Raúl",
  "Elena",
  "Francisco",
  "Adriana",
  "José",
  "Carmen",
  "Andrés",
  "Natalia",
  "Rafael",
  "Leticia",
  "Martín",
  "Paula",
  "Antonio",
  "Gabriela",
  "David",
  "Patricia",
  "Alberto",
  "Clara",
];

const apellidosClientes = [
  "Gómez",
  "Rodríguez",
  "Martínez",
  "Fernández",
  "Pérez",
  "López",
  "González",
  "Sánchez",
  "Ramírez",
  "Torres",
  "Suárez",
  "Díaz",
  "Vargas",
  "Hernández",
  "Jiménez",
  "Álvarez",
  "Moreno",
  "Romero",
  "Rojas",
  "Castro",
  "Ortega",
  "Ruiz",
  "Navarro",
  "Flores",
  "Serrano",
  "Morales",
  "Cruz",
  "Gutiérrez",
  "Ortiz",
  "Reyes",
  "Iglesias",
  "Silva",
  "Luna",
  "Mendoza",
  "Torres",
  "Cabrera",
  "García",
  "Molina",
  "Núñez",
  "Ríos",
];

const direccionesClientes = [
  "Av. Rivadavia 1234",
  "Av. Callao 5678",
  "Av. Corrientes 910",
  "Av. Santa Fe 2468",
  "Av. de Mayo 1357",
  "Av. Pueyrredón 753",
  "Av. Córdoba 2222",
  "Av. Scalabrini Ortiz 456",
  "Av. San Juan 7890",
  "Av. Belgrano 321",
  "Av. 9 de Julio 654",
  "Av. Entre Ríos 987",
  "Av. Jujuy 543",
  "Av. Boedo 876",
  "Av. Independencia 210",
  "Av. La Plata 753",
  "Av. Medrano 1470",
  "Av. Juan B. Justo 369",
  "Av. Warnes 852",
  "Av. San Martín 159",
  "Av. Ángel Gallardo 753",
  "Av. Rivadavia 4567",
  "Av. Leandro N. Alem 987",
  "Av. Pasteur 321",
  "Av. Riobamba 654",
  "Av. Montes de Oca 210",
  "Av. Suárez 753",
  "Av. San Pedrito 456",
  "Av. San José 852",
  "Av. Eva Perón 159",
  "Av. Monroe 753",
  "Av. Nazca 456",
  "Av. Gaona 852",
  "Av. Donato Álvarez 159",
  "Av. Boyacá 753",
  "Av. San Ignacio 456",
  "Av. Triunvirato 852",
  "Av. Los Incas 159",
  "Av. Alvarez Thomas 753",
  "Av. Lacroze 456",
  "Av. Forest 852",
];

const pisoClientes = [
  "Piso 1",
  "Piso 2",
  "Piso 3",
  "Piso 4",
  "Piso 5",
  "Piso 6",
  "Piso 7",
  "Piso 8",
  "Piso 9",
  "Piso 10",
  "Piso 11",
  "Piso 12",
  "Piso 13",
  "Piso 14",
  "Piso 15",
  "Piso 16",
  "Piso 17",
  "Piso 18",
  "Piso 19",
  "Piso 20",
  "Piso 21",
  "Piso 22",
  "Piso 23",
  "Piso 24",
  "Piso 25",
  "Piso 26",
  "Piso 27",
  "Piso 28",
  "Piso 29",
  "Piso 30",
  "Piso 31",
  "Piso 32",
  "Piso 33",
  "Piso 34",
  "Piso 35",
  "Piso 36",
  "Piso 37",
  "Piso 38",
  "Piso 39",
  "Piso 40",
  "Piso 41",
  "Piso 42",
  "Piso 43",
  "Piso 44",
  "Piso 45",
];

const departamentoClientes = [
  "Departamento 1",
  "Departamento 2",
  "Departamento 3",
  "Departamento 4",
  "Departamento 5",
  "Departamento 6",
  "Departamento 7",
  "Departamento 8",
  "Departamento 9",
  "Departamento 10",
  "Departamento 11",
  "Departamento 12",
  "Departamento 13",
  "Departamento 14",
  "Departamento 15",
  "Departamento 16",
  "Departamento 17",
  "Departamento 18",
  "Departamento 19",
  "Departamento 20",
  "Departamento 21",
  "Departamento 22",
  "Departamento 23",
  "Departamento 24",
  "Departamento 25",
  "Departamento 26",
  "Departamento 27",
  "Departamento 28",
  "Departamento 29",
  "Departamento 30",
  "Departamento 31",
  "Departamento 32",
  "Departamento 33",
  "Departamento 34",
  "Departamento 35",
  "Departamento 36",
  "Departamento 37",
  "Departamento 38",
  "Departamento 39",
  "Departamento 40",
  "Departamento 41",
  "Departamento 42",
  "Departamento 43",
  "Departamento 44",
  "Departamento 45",
];

const codigoPostalClientes = [
  "1424",
  "1012",
  "1043",
  "1123",
  "1089",
  "1187",
  "1414",
  "1412",
  "1222",
  "1201",
  "1030",
  "1087",
  "1229",
  "1226",
  "1276",
  "1231",
  "1290",
  "1434",
  "1415",
  "1418",
  "1416",
  "1267",
  "1203",
  "1014",
  "1179",
  "1171",
  "1260",
  "1262",
  "1407",
  "1408",
  "1410",
  "1405",
  "1411",
  "1433",
  "1031",
  "1413",
  "1224",
  "1419",
  "1417",
  "1270",
  "1425",
  "1412",
  "1414",
];

const fechasNacimientoClientes = [
  "1980-01-15T12:00:00",
  "1982-03-25T12:00:00",
  "1985-07-10T12:00:00",
  "1987-09-18T12:00:00",
  "1989-12-05T12:00:00",
  "1984-02-28T12:00:00",
  "1986-06-08T12:00:00",
  "1983-11-20T12:00:00",
  "1981-04-30T12:00:00",
  "1988-08-14T12:00:00",
  "1982-10-01T12:00:00",
  "1980-12-22T12:00:00",
  "1987-05-17T12:00:00",
  "1989-09-03T12:00:00",
  "1981-01-25T12:00:00",
  "1983-04-12T12:00:00",
  "1980-07-28T12:00:00",
  "1986-09-15T12:00:00",
  "1985-11-08T12:00:00",
  "1984-03-19T12:00:00",
  "1981-06-06T12:00:00",
  "1982-08-11T12:00:00",
  "1988-02-03T12:00:00",
  "1989-05-20T12:00:00",
  "1983-10-14T12:00:00",
  "1985-12-30T12:00:00",
  "1984-01-09T12:00:00",
  "1982-07-02T12:00:00",
  "1981-03-07T12:00:00",
  "1986-05-23T12:00:00",
  "1987-08-19T12:00:00",
  "1989-10-05T12:00:00",
  "1983-02-11T12:00:00",
  "1988-04-28T12:00:00",
  "1980-06-15T12:00:00",
  "1984-09-02T12:00:00",
  "1986-11-10T12:00:00",
  "1981-12-18T12:00:00",
  "1987-04-07T12:00:00",
  "1982-01-21T12:00:00",
  "1989-08-03T12:00:00",
  "1985-03-16T12:00:00",
  "1983-07-09T12:00:00",
  "1988-10-31T12:00:00",
];

const generos = ["M", "F"];

const grupoFamiliarCliente = [
  {
    nombre: "Isabel",
    apellido: "Gómez",
    sexo: "F",
    fechaNacimiento: new Date("1975-02-15T12:00:00"),
  },
  {
    nombre: "Mariano",
    apellido: "Rodríguez",
    sexo: "M",
    fechaNacimiento: new Date("1978-04-25T12:00:00"),
  },
  {
    nombre: "Sofía",
    apellido: "Martínez",
    sexo: "F",
    fechaNacimiento: new Date("1981-08-10T12:00:00"),
  },
  {
    nombre: "Maximiliano",
    apellido: "Fernández",
    sexo: "M",
    fechaNacimiento: new Date("1983-10-18T12:00:00"),
  },
  {
    nombre: "Valentina",
    apellido: "Pérez",
    sexo: "F",
    fechaNacimiento: new Date("1986-01-05T12:00:00"),
  },
  {
    nombre: "Luis",
    apellido: "López",
    sexo: "M",
    fechaNacimiento: new Date("1982-03-28T12:00:00"),
  },
  {
    nombre: "Felipe",
    apellido: "González",
    sexo: "F",
    fechaNacimiento: new Date("1984-07-08T12:00:00"),
  },
  {
    nombre: "Julieta",
    apellido: "Sánchez",
    sexo: "M",
    fechaNacimiento: new Date("1980-12-20T12:00:00"),
  },
  {
    nombre: "Gustavo",
    apellido: "Ramírez",
    sexo: "F",
    fechaNacimiento: new Date("1976-05-01T12:00:00"),
  },
  {
    nombre: "Delfina",
    apellido: "Torres",
    sexo: "M",
    fechaNacimiento: new Date("1985-09-14T12:00:00"),
  },
  {
    nombre: "Lautaro",
    apellido: "Suárez",
    sexo: "F",
    fechaNacimiento: new Date("1979-11-02T12:00:00"),
  },
  {
    nombre: "Renata",
    apellido: "Díaz",
    sexo: "M",
    fechaNacimiento: new Date("1977-01-22T12:00:00"),
  },
  {
    nombre: "Agustina",
    apellido: "Vargas",
    sexo: "F",
    fechaNacimiento: new Date("1984-06-17T12:00:00"),
  },
  {
    nombre: "Leonardo",
    apellido: "Hernández",
    sexo: "M",
    fechaNacimiento: new Date("1986-10-03T12:00:00"),
  },
  {
    nombre: "Martina",
    apellido: "Jiménez",
    sexo: "F",
    fechaNacimiento: new Date("1978-02-15T12:00:00"),
  },
  {
    nombre: "Emilio",
    apellido: "Álvarez",
    sexo: "M",
    fechaNacimiento: new Date("1980-05-12T12:00:00"),
  },
  {
    nombre: "Camila",
    apellido: "Moreno",
    sexo: "F",
    fechaNacimiento: new Date("1975-08-28T12:00:00"),
  },
  {
    nombre: "Lucas",
    apellido: "Romero",
    sexo: "M",
    fechaNacimiento: new Date("1982-09-25T12:00:00"),
  },
  {
    nombre: "Martina",
    apellido: "Rojas",
    sexo: "F",
    fechaNacimiento: new Date("1981-11-08T12:00:00"),
  },
  {
    nombre: "Sebastián",
    apellido: "Castro",
    sexo: "M",
    fechaNacimiento: new Date("1979-03-19T12:00:00"),
  },
  {
    nombre: "Isabella",
    apellido: "Ortega",
    sexo: "F",
    fechaNacimiento: new Date("1980-06-16T12:00:00"),
  },
  {
    nombre: "Marta",
    apellido: "Ruiz",
    sexo: "M",
    fechaNacimiento: new Date("1982-09-21T12:00:00"),
  },
  {
    nombre: "Rodrigo",
    apellido: "Navarro",
    sexo: "F",
    fechaNacimiento: new Date("1977-03-03T12:00:00"),
  },
  {
    nombre: "Elena",
    apellido: "Flores",
    sexo: "M",
    fechaNacimiento: new Date("1978-06-20T12:00:00"),
  },
  {
    nombre: "Fernando",
    apellido: "Serrano",
    sexo: "F",
    fechaNacimiento: new Date("1983-11-14T12:00:00"),
  },
  {
    nombre: "Adela",
    apellido: "Morales",
    sexo: "M",
    fechaNacimiento: new Date("1986-01-30T12:00:00"),
  },
  {
    nombre: "José",
    apellido: "Cruz",
    sexo: "F",
    fechaNacimiento: new Date("1979-02-09T12:00:00"),
  },
  {
    nombre: "Catalina",
    apellido: "Gutiérrez",
    sexo: "M",
    fechaNacimiento: new Date("1981-07-12T12:00:00"),
  },
  {
    nombre: "Nicolás",
    apellido: "Ortiz",
    sexo: "F",
    fechaNacimiento: new Date("1980-03-17T12:00:00"),
  },
  {
    nombre: "Olivia",
    apellido: "Reyes",
    sexo: "M",
    fechaNacimiento: new Date("1985-05-03T12:00:00"),
  },
  {
    nombre: "Rafael",
    apellido: "Iglesias",
    sexo: "F",
    fechaNacimiento: new Date("1986-08-19T12:00:00"),
  },
  {
    nombre: "Leticia",
    apellido: "Silva",
    sexo: "M",
    fechaNacimiento: new Date("1978-10-05T12:00:00"),
  },
  {
    nombre: "Mateo",
    apellido: "Luna",
    sexo: "F",
    fechaNacimiento: new Date("1982-01-11T12:00:00"),
  },
  {
    nombre: "Ana",
    apellido: "Mendoza",
    sexo: "M",
    fechaNacimiento: new Date("1977-04-28T12:00:00"),
  },
  {
    nombre: "Antonia",
    apellido: "Torres",
    sexo: "F",
    fechaNacimiento: new Date("1975-06-15T12:00:00"),
  },
  {
    nombre: "Gonzalo",
    apellido: "Cabrera",
    sexo: "M",
    fechaNacimiento: new Date("1979-09-02T12:00:00"),
  },
  {
    nombre: "Daniel",
    apellido: "García",
    sexo: "F",
    fechaNacimiento: new Date("1981-11-10T12:00:00"),
  },
  {
    nombre: "Patricia",
    apellido: "Molina",
    sexo: "M",
    fechaNacimiento: new Date("1976-02-18T12:00:00"),
  },
  {
    nombre: "Alberto",
    apellido: "Núñez",
    sexo: "F",
    fechaNacimiento: new Date("1982-05-07T12:00:00"),
  },
  {
    nombre: "Clara",
    apellido: "Ríos",
    sexo: "M",
    fechaNacimiento: new Date("1983-02-21T12:00:00"),
  },
];

const crearClientes = async () => {
  try {
    const numUsers = 40;
    for (let i = 1; i <= numUsers; i++) {
      const username = `cliente${i}@gmail.com`;
      const password = "123456";
      const nombre = nombresClientes[i - 1];
      const apellido = apellidosClientes[i - 1];
      const dni =
        Math.floor(Math.random() * (50000000 - 20000000 + 1)) + 20000000;
      const telefono =
        Math.floor(Math.random() * (1199999999 - 1111111111 + 1)) + 1111111111;
      const direccion = direccionesClientes[i - 1];
      const piso = pisoClientes[i - 1];
      const departamento = departamentoClientes[i - 1];
      const estado = ENUM_USUARIO_ESTADOS.desconectado;
      const sexo = generos[i % 2];
      const fechaNacimiento = new Date(fechasNacimientoClientes[i - 1]);
      const codigoPostal = codigoPostalClientes[i - 1];
      const ciudad = "CABA";
      const grupoFamiliar = grupoFamiliarCliente[i - 1];

      const cliente = {
        username,
        password,
        nombre,
        apellido,
        dni,
        telefono,
        direccion,
        piso,
        departamento,
        estado,
        sexo,
        fechaNacimiento,
        grupoFamiliar,
        codigoPostal,
        ciudad,
      };
      await crearNuevoCliente(cliente);
    }
    console.log("Usuarios creados exitosamente");
  } catch (error) {
    console.log(error.message);
  }
};

const nombresMedicos = [
  "Martín",
  "Isabel",
  "Alejandro",
  "Valeria",
  "Juan Pablo",
  "Carolina",
  "Fernando",
  "Gabriela",
  "Miguel Ángel",
  "Marina",
  "Andrés",
  "Luciana",
  "Sebastián",
  "Daniela",
  "Rodrigo",
  "Victoria",
  "Emilio",
  "Camila",
  "Santiago",
  "Renata",
  "Tomás",
  "Lorena",
  "Luis Felipe",
  "Paulina",
  "Maximiliano",
  "Eugenia",
  "Pablo",
  "Marcela",
  "Felipe",
  "Bianca",
  "Eduardo",
  "Laura",
  "Raúl",
  "Romina",
  "Joaquín",
  "Clara",
  "Diego",
  "Natalia",
  "Francisco",
  "Julieta",
];

const apellidosMedicos = [
  "Herrera",
  "Giménez",
  "Alonso",
  "Cabrera",
  "Fuentes",
  "López",
  "Gómez",
  "Ríos",
  "Peralta",
  "Torres",
  "Vega",
  "Fernández",
  "Cruz",
  "Rojas",
  "Salazar",
  "Molina",
  "Ortega",
  "Navarro",
  "Silva",
  "Moreno",
  "Sánchez",
  "Romero",
  "García",
  "Pérez",
  "Martínez",
  "Álvarez",
  "González",
  "Ruiz",
  "Díaz",
  "Hernández",
  "Iglesias",
  "Serrano",
  "Luna",
  "Cordero",
  "Maldonado",
  "Lara",
  "Castañeda",
  "Gutiérrez",
  "Ortiz",
  "Reyes",
];

const direccionesMedicos = [
  "Av. Callao 246",
  "Av. Corrientes 789",
  "Av. Santa Fe 1500",
  "Av. de Mayo 567",
  "Av. Pueyrredón 987",
  "Av. Córdoba 432",
  "Av. Scalabrini Ortiz 753",
  "Av. San Juan 1234",
  "Av. Belgrano 5678",
  "Av. 9 de Julio 150",
  "Av. Entre Ríos 321",
  "Av. Jujuy 987",
  "Av. Boedo 456",
  "Av. Independencia 789",
  "Av. La Plata 210",
  "Av. Medrano 654",
  "Av. Juan B. Justo 987",
  "Av. Warnes 456",
  "Av. San Martín 753",
  "Av. Ángel Gallardo 456",
  "Av. Rivadavia 2100",
  "Av. Leandro N. Alem 753",
  "Av. Pasteur 456",
  "Av. Riobamba 789",
  "Av. Montes de Oca 654",
  "Av. Suárez 321",
  "Av. San Pedrito 987",
  "Av. San José 456",
  "Av. Eva Perón 753",
  "Av. Monroe 456",
  "Av. Nazca 789",
  "Av. Gaona 321",
  "Av. Donato Álvarez 987",
  "Av. Boyacá 456",
  "Av. San Ignacio 753",
  "Av. Triunvirato 456",
  "Av. Los Incas 789",
  "Av. Alvarez Thomas 321",
  "Av. Lacroze 987",
  "Av. Forest 456",
];

const coordenadasMedicos = [
  { latitud: -34.6102773, longitud: -58.39334415000001 },
  { latitud: -34.603343, longitud: -58.393228 },
  { latitud: -34.6035823005358, longitud: -58.40199028380465 },
  { latitud: -34.610567, longitud: -58.377 },
  { latitud: -34.593987, longitud: -58.404 },
  { latitud: -34.593432, longitud: -58.428 },
  { latitud: -34.592754, longitud: -58.419 },
  { latitud: -34.619, longitud: -58.409 },
  { latitud: -34.5905678, longitud: -58.406789 },
  { latitud: -34.61215, longitud: -58.37715 },
  { latitud: -34.616321, longitud: -58.380987 },
  { latitud: -34.634987, longitud: -58.387 },
  { latitud: -34.634456, longitud: -58.403 },
  { latitud: -34.623789, longitud: -58.399 },
  { latitud: -34.628654, longitud: -58.413 },
  { latitud: -34.626987, longitud: -58.433 },
  { latitud: -34.616, longitud: -58.442 },
  { latitud: -34.606987, longitud: -58.465 },
  { latitud: -34.587753, longitud: -58.486 },
  { latitud: -34.610456, longitud: -58.45 },
  { latitud: -34.621753, longitud: -58.368 },
  { latitud: -34.599987, longitud: -58.376 },
  { latitud: -34.618456, longitud: -58.383 },
  { latitud: -34.624789, longitud: -58.388 },
  { latitud: -34.638654, longitud: -58.404 },
  { latitud: -34.635321, longitud: -58.42 },
  { latitud: -34.631987, longitud: -58.433 },
  { latitud: -34.618456, longitud: -58.437 },
  { latitud: -34.615753, longitud: -58.443 },
  { latitud: -34.610456, longitud: -58.456 },
  { latitud: -34.598321, longitud: -58.469 },
  { latitud: -34.620789, longitud: -58.382 },
  { latitud: -34.608456, longitud: -58.389 },
  { latitud: -34.607789, longitud: -58.398 },
  { latitud: -34.596321, longitud: -58.404 },
  { latitud: -34.585987, longitud: -58.412 },
  { latitud: -34.605456, longitud: -58.419 },
  { latitud: -34.611789, longitud: -58.425 },
  { latitud: -34.624321, longitud: -58.43 },
  { latitud: -34.628987, longitud: -58.434 },
];

const fechasNacimientoMedicos = [
  "1975-02-15T12:00:00",
  "1978-04-25T12:00:00",
  "1981-08-10T12:00:00",
  "1983-10-18T12:00:00",
  "1986-01-05T12:00:00",
  "1982-03-28T12:00:00",
  "1984-07-08T12:00:00",
  "1980-12-20T12:00:00",
  "1976-05-01T12:00:00",
  "1985-09-14T12:00:00",
  "1979-11-02T12:00:00",
  "1977-01-22T12:00:00",
  "1984-06-17T12:00:00",
  "1986-10-03T12:00:00",
  "1978-02-15T12:00:00",
  "1980-05-12T12:00:00",
  "1975-08-28T12:00:00",
  "1982-09-25T12:00:00",
  "1981-11-08T12:00:00",
  "1979-03-19T12:00:00",
  "1980-06-16T12:00:00",
  "1982-09-21T12:00:00",
  "1977-03-03T12:00:00",
  "1978-06-20T12:00:00",
  "1983-11-14T12:00:00",
  "1986-01-30T12:00:00",
  "1979-02-09T12:00:00",
  "1981-07-12T12:00:00",
  "1980-03-17T12:00:00",
  "1985-05-03T12:00:00",
  "1986-08-19T12:00:00",
  "1978-10-05T12:00:00",
  "1982-01-11T12:00:00",
  "1977-04-28T12:00:00",
  "1975-06-15T12:00:00",
  "1979-09-02T12:00:00",
  "1981-11-10T12:00:00",
  "1976-02-18T12:00:00",
  "1982-05-07T12:00:00",
  "1983-02-21T12:00:00",
  "1988-08-03T12:00:00",
  "1984-03-16T12:00:00",
  "1982-07-09T12:00:00",
  "1987-10-31T12:00:00",
];

const crearMedicos = async () => {
  try {
    const numUsers = 40;
    for (let i = 1; i <= numUsers; i++) {
      const username = `medico${i}@gmail.com`;
      const password = "123456";
      const nombre = nombresMedicos[i - 1];
      const apellido = apellidosMedicos[i - 1];
      const dni =
        Math.floor(Math.random() * (50000000 - 20000000 + 1)) + 20000000;
      const telefono =
        Math.floor(Math.random() * (1199999999 - 1111111111 + 1)) + 1111111111;
      const direccion = direccionesMedicos[i - 1];
      const estado = ENUM_USUARIO_ESTADOS.conectado;
      const sexo = generos[i % 2];
      const fechaNacimiento = new Date(fechasNacimientoMedicos[i - 1]);
      const precio = Math.floor(Math.random() * (4500 - 1200 + 1)) + 1200;
      const radioAccion = 5000;
      const especialidad =
        i % 2
          ? ENUM_MEDICO_ESPECIALIDADES.clinico
          : ENUM_MEDICO_ESPECIALIDADES.pediatra;
      const nroMatricula = `AA123ID${i}`;
      const { latitud, longitud } = coordenadasMedicos[i - 1];
      const medico = {
        username,
        password,
        nombre,
        apellido,
        dni,
        telefono,
        direccion,
        estado,
        sexo,
        fechaNacimiento,
        precio,
        especialidad,
        nroMatricula,
        radioAccion,
        latitud,
        longitud,
      };
      const nuevoMedico = await crearMedico(medico);
    }
  } catch (error) {
    console.error(error);
  }
};

const createUsers = async () => {
  try {
    await crearClientes();
    await crearMedicos();
  } catch {}
};

export default createUsers;
