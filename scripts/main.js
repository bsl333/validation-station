// const utilties = require('./renderer');

// if you don't use defer
// document.addEventListener('DOMContentLoaded', function() {
// })

const form = document.querySelector('#new-train-car-form')
const kind = document.querySelector('#train-kind');
const numOfSeats = document.querySelector('#train-seats')
const kindDefault = kind.value

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const successDiv = document.getElementById('success')
  const errorDiv = document.getElementById('error')
  const { kind, brand, seats } = event.target;
  const newCar = {
    kind: kind.value,
    brand: brand.value,
    seats: seats.value
  }
  newCar.seats = newCar.seats ? newCar.seats : 'not specified'
  if (kind.value === 'passenger' || kind.value === 'observation') {
    if (!numOfSeats.value) {
      errorDiv.classList.remove('d-none')
      successDiv.classList.add('d-none')
    } else {
      errorDiv.classList.add('d-none')
      successDiv.classList.remove('d-none')
      addCar(newCar)
      kind.value = kindDefault
      brand.value = ''
      seats.value = ''
    }
  } else {
    error.classList.add('d-none')
    successDiv.classList.remove('d-none')
    addCar(newCar)
    kind.value = kindDefault
    brand.value = ''
    seats.value = ''
  }
})


function addCar({ kind, brand, seats }) {
  const newCar =  ` <li>kind: ${kind}, brand: ${brand}, seats: ${seats}</li> `
  document.querySelector('#car-list').innerHTML += newCar
}

// kind.addEventListener('change', (event) => {
//   if (kind.value === 'passenger' || kind.value === 'observation') {
//     numOfSeats.required = true
//     if (numOfSeats.value < 1) {
//       document.querySelector('#error').classList.remove('d-none')
//     }
//   }
// })