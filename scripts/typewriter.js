const typewriter = document.getElementById("typewriter");

const phrases = [
  "Full Stack Developer",
  "Web Designer",
  "Software Development Instructor",
  "Robotics Engineer"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function loop() {
  const currentPhrase = phrases[phraseIndex];
  let displayText;

  if (isDeleting) {
    // Remove one character
    letterIndex--;
    displayText = currentPhrase.substring(0, letterIndex);
  } else {
    // Add one character
    letterIndex++;
    displayText = currentPhrase.substring(0, letterIndex);
  }

  typewriter.innerHTML = displayText;

  // Set timeout speeds
  let timeout = isDeleting ? 40 : 90;

  if (!isDeleting && letterIndex === currentPhrase.length) {
    // Done typing, wait before deleting
    timeout = 1500;
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    // Finished deleting, move to next phrase
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    timeout = 500;
  }

  setTimeout(loop, timeout);
}

loop();
