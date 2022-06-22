"use strict";require('dotenv').config();
// Esse arquivo é de config do database
module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST, // Referenciando a propriedade DATABASE_HOST do arquivo .env
  port: process.env.DATABASE_PORT, // Referenciando a propriedade DATABASE_PORT =
  username: process.env.DATABASE_USERNAME, // Referenciando a propriedade DATABASE_USERNAME  =
  password: process.env.DATABASE_PASSWORD, // Referenciando a propriedade DATABASE_PASSWORD =
  database: process.env.DATABASE, // Referenciando a propriedade DATABASE_PASSWORD do arquivo .env
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
