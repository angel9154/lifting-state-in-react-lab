// src/components/IngredientList.jsx
import React from 'react';
const myStyle = {
  padding: '14px',
  marginBottom: '10px',
  borderRadius: '8px',
  fontWeight: 'bold',
  textShadow: '0px 0px 2px #000000',
  display: 'flex',
  alignItems: 'flex-start', // Corrected 'start' to 'flex-start' for flex alignment
  justifyContent: 'space-between',
};

const IngredientList = (props) => {
    return <ul style={myStyle}> 
        {props.ingredients.map((ingredient, index) => (
        <li key={index} style={{background: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => props.addIngredient(ingredient)}>+</button>
        </li>
      ))}</ul>;
  };
  
  export default IngredientList;
  