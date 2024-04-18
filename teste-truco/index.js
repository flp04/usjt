import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

import Mesa from './Mesa.js'
import Jogador from './Jogador.js'

var mesa = new Mesa()

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'teste.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  let jogador = new Jogador ('Filipe')
  mesa.setJogador(jogador)
  for (let i = 0; i < 3; i++) {
    mesa.setJogador(new Jogador (`bot${i}`))
  }
  mesa.distribuirCartas()
  socket.emit('entrou', mesa)
  socket.on('disconnect', () => {
    mesa = new Mesa()
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});