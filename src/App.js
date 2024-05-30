import React from 'react';
import './App.css';
import jayePhoto from './jayephoto.png';
import confetti from 'canvas-confetti';

function App() {
  const handleYesClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    alert("You've made my night Jaye, hopefully I'll make yours soon!"); // Display the pop-up message

    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="promposal-container">
          <h1>Jaye, will you do me the honor of letting me take you to prom?</h1>
          <img src={jayePhoto} className="App-logo" alt="Jaye" />
          <p>
            Hi Jaye, <br />
            Don't worry, I didn't forget about such an important milestone in my young life! And I CANNOT WAIT to take you to prom.
          </p>
          <p>
            So with that said, will Y + J be A-OK at prom?
          </p>
          <a
            className="App-link"
            href="#"
            onClick={handleYesClick}
          >
            Click here to say Yes!
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
