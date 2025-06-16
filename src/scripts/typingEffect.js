
export function startTypingEffect(words) {
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  const typingSpeed = 150;
  const erasingSpeed = 75;
  const delayBetweenWords = 2000;
  const el = document.getElementById("dynamic-word");

  function type() {
    if (currentCharIndex < words[currentWordIndex].length) {
      el.textContent += words[currentWordIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    if (currentCharIndex > 0) {
      el.textContent = words[currentWordIndex].substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(type, typingSpeed);
    }
  }

  type();
}
