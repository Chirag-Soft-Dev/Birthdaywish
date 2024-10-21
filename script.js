document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector('.message');
    const balloons = document.querySelectorAll('.balloon');
    const surpriseBtn = document.querySelector('.surprise-btn');
    const confettiContainer = document.querySelector('.confetti');
    
    // Change message after 5 seconds
    setTimeout(() => {
        message.textContent = "May all your dreams come true! 🎂🎉";
    }, 5000);

    // Balloon popping effect
    balloons.forEach(balloon => {
        balloon.addEventListener('click', () => {
            balloon.style.animation = 'none';  // Stop floating animation
            balloon.style.transform = 'scale(0)';
            balloon.style.transition = 'transform 0.5s ease';
        });
    });

    // Trigger confetti on button click
    surpriseBtn.addEventListener('click', () => {
        for (let i = 0; i < 100; i++) {
            const confetto = document.createElement('div');
            confetto.classList.add('confetto');
            confetto.style.left = Math.random() * 100 + 'vw';
            confetto.style.animationDuration = Math.random() * 3 + 2 + 's';
            confettiContainer.appendChild(confetto);

            setTimeout(() => {
                confetto.remove();
            }, 15000);
        }
    });
});

// Add some confetti CSS styles
const confettiStyle = document.createElement('style');
confettiStyle.innerHTML = `
    .confetto {
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        animation: confetti-fall 5s linear infinite;
    }
`;
document.head.appendChild(confettiStyle);
