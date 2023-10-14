const { User } = require('../models');

const userData = [
  {
    username: 'Techjunky',
    email: 'TJ@mail.com',
    password: 'nocontraseña123',
  },
  {
    username: 'Nvidiawatcher',
    email: 'NW@example.com',
    password: 'contpass321',
  },
  {
    username: 'ITguy123',
    email: 'IT123@example.com',
    password: 'not123password',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;