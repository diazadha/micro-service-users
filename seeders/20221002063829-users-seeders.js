"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Diaz",
        profession: "Musician",
        role: "admin",
        email: "diaz.adha@gmail.com",
        password: await bcrypt.hash("rahasia1234", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ikbar",
        profession: "BE",
        role: "student",
        email: "ikbar@gmail.com",
        password: await bcrypt.hash("rahasiaikbar1234", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
