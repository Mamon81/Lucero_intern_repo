import React from 'react';

export default function MessageDisplay() {
  const handlePress = () => {
    window.alert('Button has been Pressed');
  };

  return (
    <div>
      <h1>Testing React Components with Jest & React Testing Library</h1>
      <button type="button" onClick={handlePress}>
        Press Me
      </button>
    </div>
  );
}
