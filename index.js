const express = require('express')
const helmet = require('helmet');
const knex = require('knex');

const knexFile = require('./knexfile');

const db = knex(knexFile.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.listen(5000, function () {
    console.log('Listening on localhost:5000')
});