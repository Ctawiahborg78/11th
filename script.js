const celebrationContainer = document.getElementById('celebration-container');

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  
  // Random horizontal start
  confetti.style.left = Math.random() * 100 + 'vw';
  
  // Random fall duration between 3-5 seconds
  confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
  
  celebrationContainer.appendChild(confetti);

  // Remove after it falls
  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

// Make multiple confetti pieces
setInterval(createConfettiPiece, 300);

// Basic confetti CSS inserted dynamically
const style = document.createElement('style');
style.innerHTML = `
  #celebration-container {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 9999;
  }
  .confetti {
    position: absolute;
    width: 10px; 
    height: 10px;
    background: #f06292; /* pink color; change as you like */
    opacity: 0.7;
    animation: confetti-fall linear forwards;
  }
  @keyframes confetti-fall {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;
document.head.appendChild(style);
