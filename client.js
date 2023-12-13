const io = require('socket.io-client');
const socket = io('http://192.168.238.197'); // Replace with your server IP

socket.on('connect', () => {
  console.log('Connected to server');
});

// Send data to the server
socket.emit('message', { key: 'value' });

// Listen for messages from the server
socket.on('message', (data) => {
  console.log('Received message from server:', data);
});

// Handle disconnection
socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
