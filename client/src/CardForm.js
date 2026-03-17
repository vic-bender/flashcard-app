import { useState } from 'react';

function CardForm() {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    return (
    <div>
      <h2>Add a Card</h2>
    </div>
  );
}

export default CardForm;