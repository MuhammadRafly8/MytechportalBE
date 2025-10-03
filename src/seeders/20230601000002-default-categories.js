'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        id: uuidv4(),
        name: 'RPL',
        slug: 'Rekayasa Perangkat Lunak',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'DKV',
        slug: 'Desain Komunikasi Visual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'TKJ',
        slug: 'Teknik Komputer dan Jaringan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'TSM',
        slug: 'Teknik Sepeda Motor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'TKR',
        slug: 'Teknik Kendaraan Ringan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: 'APT',
        slug: 'Agribisnis Perbenihan Tanaman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
       {
        id: uuidv4(),
        name: 'ATPH',
        slug: 'Agribisnis Tanaman Pangan dan Hortikultura',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};