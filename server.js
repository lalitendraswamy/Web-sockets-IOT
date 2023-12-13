const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('IoT device connected');

  socket.on('message', (data) => {
    console.log('Received message from IoT device:', data);
    // Process the data as needed
  });

  socket.on('disconnect', () => {
    console.log('IoT device disconnected');
  });
});

const PORT = 2001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
