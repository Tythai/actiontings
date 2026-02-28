import React from 'react';

/**
 * 1. This file must stay in 'src/components/' for the GitHub Action to find it.
 * 2. If you change the filename to 'Button.jsx' (singular), you MUST update 
 * the 'FILE' variable in your .yml workflow.
 */
const Buttons = () => {
  // REMINDER: React events use camelCase (onClick), not lowercase (onclick).
  const handleClick = () => {
    console.log("Button verified and clicked!");
  };

  return (
    <div className="button-container">
      {/* REMINDER: The 'gh pr comment' in your Action will only fire 
        if this file exists and doesn't have syntax errors.
      */}
      <button 
        type="button" 
        onClick={handleClick}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Feature A Test Button
      </button>
    </div>
  );
};

export default Buttons;