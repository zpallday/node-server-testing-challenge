const express = require('express');
const Games = require('../games/game-model')

const server = express();

server.use(express.json());

server.get('/games', (req,res) => {
 Games.get()
 .then(games => {
     res.status(200).json(games)
 })
 .catch(error => {
     res.status(500).json({ message: error})
 })
})