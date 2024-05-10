// Your Solution goes here
console.log("Index.js load successfull")

//Iteracion 1
const person = {
  firstName: 'Luis',
  lastName: 'Buron'
}

function firstName(person) {
  return person.firstName + ' ' + person.lastName
}
console.log(firstName(person))

//Iteracion 2
const users = [{
  username: 'David',
  status: 'online',
  lastActivity: 600
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 2320
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 4320
}]

function whoIsOnline(users) {
  const todo = {
     online: [],
     offline: [],
     afk: []
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].status === 'online' && users[i].lastActivity <= 600) {
      todo.online.push(users[i].username)
    } else if (users[i].status === 'offline') {
      todo.offline.push(users[i].username)
    } else {
      todo.afk.push(users[i].username)
    }
  }
  if(todo.online.length == 0){
    delete(todo.online)
  }
  if(todo.offline.length == 0){
    delete(todo.offline)
  }
  if(todo.afk.length == 0){
    delete(todo.afk)
  }

  return todo
}
console.log(whoIsOnline(users))

//Iteracion 3
var yourComputer = {
  cpu: 25,
  gpu: 45,
  motherBase: 15,
  dvdDriver: 25,
  rom: 5,
  ram: 10,
}
var maxTemperatures = {
  cpu: 33,
  gpu: 42,
  motherBase: 20,
  dvdDriver: 20,
  rom: 10,
  ram: 20,
}
function yourFunction(yourComputer, maxTemperatures){
  const comprobation = {}
  //obtengo todas las claves de yourComputer y las recorro
  Object.keys(yourComputer).forEach(function(key){
  //crea la key = (si valor de yourcomputer es mayor que maxtemperature) devuelve true, si no false
    comprobation[key] = yourComputer[key] > maxTemperatures[key] ? true : false
  })
  return comprobation
}

console.log(yourFunction(yourComputer, maxTemperatures))

//Bonus 1
function strCount(obj) {
  let count = 0;

  function countStrings(val) {
      if (typeof val === 'string') {// Si el valor es una string, incrementa
          count++;
      } else if (typeof val === 'object' && val !== null) {
          for (let key in val) {
              countStrings(val[key]);
          }
      }
  }

  for (let key in obj) {
      countStrings(obj[key]); // obtenemos cada valor del objeto
  }

  return count;
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null
})); 


//Bonus 2
const persona = {
  firstName: 'Luis',
  lastName: 'buron'
}

function fullNameFormatted(persona) {
  return persona.firstName.charAt(0).toUpperCase() + persona.firstName.slice(1) + ' ' + persona.lastName.charAt(0).toUpperCase() + persona.lastName.slice(1)
}
console.log(fullNameFormatted(persona))


//Bonus 3

const persone = {
  firstName: 'luis pedro',
  lastName: 'buron santana'
}

function fullNameFormattedv2(persona) {
  return persona.firstName.replace(/\b[a-z]/g,change=>change.toUpperCase()) + ' ' + persona.lastName.replace(/\b[a-z]/g,change=>change.toUpperCase())
}
console.log(fullNameFormattedv2(persone))