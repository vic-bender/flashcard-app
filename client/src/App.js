import { useState, useEffect} from 'react';
import CardForm from './CardForm'; // UI component import

function App() {
  
  
  const [cards, setCards] = useState([]); // state variable, holds flashcards and is updated when cards are added or deleted

  useEffect(() => { // fetch flashcards from server when component mounts
    fetch('http://localhost:5000/api/cards').then(res => res.json()).then(data => setCards(data)); // fetches cards, then sets the cards to the data
    // localhost:5000 as current server
  }, []);
  
  return (
    <div>
      <h1>Flashcard App</h1>
      <h2>By Victor A. Bender</h2>
      <p>Number of cards: {cards.length}</p>
      <CardForm />
    </div>
  );
}


export default App;