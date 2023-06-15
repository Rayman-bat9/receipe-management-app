import React, { useState } from 'react';

function IngredientItem({ ingredient }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleItemClick = () => {
    setIsCompleted(!isCompleted);
  };

  const itemStyle = {
    textDecoration: isCompleted ? 'line-through' : 'none',
  };

  return (
    <li style={itemStyle} onClick={handleItemClick}>
      {ingredient}
    </li>
  );
}

export default IngredientItem;
