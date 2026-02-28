import React from 'react';

/**
 * REMINDER: This is the file that checker.sh looks for. 
 * If you rename this, update the FILE variable in your YAML!
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