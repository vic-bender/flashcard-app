import { useState } from 'react';

function CardForm() {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    function handleSubmit(e) { // talks to backend
        fetch('http://localhost:5000/api/cards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ front, back })
        }).then(() => {setFront(''); setBack('');})
    }

    return ( // JSX, html "UI"
    <div>
        <h2>Add a Card</h2>
      <input
          placeholder="Front"
          value={front}
          onChange={(e) => setFront(e.target.value)} />
      <input
          placeholder="Back"
          value={back}
          onChange={(e) => setBack(e.target.value)} />
      <button onClick={handleSubmit}>Add Card</button>
    </div>

  );
}

export default CardForm;