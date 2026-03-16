const express = require('express'); // Import the Express library
const cors = require('cors');
const app = express(); // Create an instance of the Express application
const PORT = 5000; // port number for server, will change if app is actually deployed

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { // Define a route for the root URL
  res.json({ message: 'Server is running' });
});

let cards = []; // flashcard storage

app.get('/api/cards', (req, res) => { // get all cards
  res.json(cards);
});

app.post('/api/cards', (req, res) => { // add a new card
    const {front, back} = req.body;
    const newCard = {id: Date.now(), front, back}; // id based on timestamp
    cards.push(newCard);
    res.status(201).json(newCard);
});

app.delete('/api/cards/:id', (req, res) => { // delete a card by id
    const {id} = req.params;
    cards = cards.filter(card => card.id !== parseInt(id));
    res.status(204).send();
});

app.listen(PORT, () => { // Start the server and listen on the specified port
  console.log(`Server running on http://localhost:${PORT}`);
});