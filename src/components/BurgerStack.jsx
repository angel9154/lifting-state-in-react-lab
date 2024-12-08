// `src/components/BurgerStack.jsx`
import React from 'react';

const BurgerStack = (props) => {
  return (
    <div>
      <h2>Your Burger Stack</h2>
      <ul>
        {props.ingredients.length === 0 ? (
          <p>No ingredients added yet</p>
        ) : (
          props.ingredients.map((ingredient, index) => (
            <li key={index} style={{ background: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => props.deleteIngredient(ingredient)}>X</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BurgerStack