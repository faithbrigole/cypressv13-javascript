const faker = require('faker')

export function generateFirstName() {
  return faker.name.firstName()
}

export function generateLastName() {
  return faker.name.lastName()
}

export function generateEmailAddress() {
  return faker.internet.email()
}

export function generatePassword() {
  return faker.internet.password()
}

export function generateDateOfBirth() {
  const randomDate = faker.date.past()
  const year = randomDate.getFullYear()
  const month = (randomDate.getMonth() + 1).toString().padStart(2, '0')
  const day = randomDate.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function generatePhoneNumber() {
  return faker.phone.phoneNumberFormat(0)
}

export function generateStreetAddress1() {
  return faker.address.streetAddress()
}

export function generateStreetAddress2() {
  return faker.address.streetAddress()
}

export function generateCity() {
  return faker.address.city()
}

export function generateState() {
  return faker.address.state()
}

export function generatePostalCode() {
  return faker.address.zipCode()
}

export function generateCountry() {
  return faker.address.country()
}
