'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Genres', [
      {
        
        name: 'horror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (){
  },
};
