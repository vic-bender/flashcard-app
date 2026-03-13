const express = require('express'); // Import the Express library
const app = express(); // Create an instance of the Express application
const PORT = 5000; // port number for server, will change if app is actually deployed

app.use(express.json());

app.get('/', (req, res) => { // Define a route for the root URL
  res.json({ message: 'Server is running' });
});

app.listen(PORT, () => { // Start the server and listen on the specified port
  console.log(`Server running on http://localhost:${PORT}`);
});