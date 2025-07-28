const typewriter = document.getElementById("typewriter");

const phrases = [
  "Full Stack Developer",
  "Web Designer",
  "Software Development Instructor",
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  typewriter.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typewriter.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      typewriter.innerHTML = currentPhrase.join("");
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
      setTimeout(loop, 1500);
      return;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speed = isEnd ? 1000 : isDeleting ? 40 : 90;
  setTimeout(loop, speed);
}

loop();
