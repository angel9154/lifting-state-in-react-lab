// src/App.jsx

import React, { useState } from 'react';
import './App.css';
// import './index.css';
import BurgerStack from './components/BurgerStack'
import IngredientsList from './components/IngredientsList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

  // State to hold the selected ingredients
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const addToBurger = (ingredient) => {
    setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  const removeFromBurger = (ingredientToDelete) => {
    setSelectedIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.name !== ingredientToDelete.name)
    );
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <ul>
          <li>
        <IngredientsList 
          ingredients={availableIngredients} 
          addIngredient={addToBurger} 
        />
        
        <BurgerStack ingredients={selectedIngredients}
        deleteIngredient={removeFromBurger}  />
        </li>
       </ul>
      </section>
    </main>
  );
};

export default App;


