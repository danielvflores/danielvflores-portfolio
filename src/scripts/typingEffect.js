
export function startTypingEffect(words, elementId = "dynamic-word", options = {}) {
  const {
    typingSpeed = 150,
    erasingSpeed = 75,
    delayBetweenWords = 2000
  } = options;

  let currentWordIndex = 0;
  let currentCharIndex = 0;
  const el = document.getElementById(elementId);

  if (!el) {
    console.warn(`Elemento con ID "${elementId}" no encontrado`);
    return;
  }

  if (!words || words.length === 0) {
    console.warn('No se proporcionaron palabras para el efecto de tipeo');
    return;
  }

  function type() {
    const chars = [...words[currentWordIndex]];
    if (currentCharIndex < chars.length) {
      el.textContent += chars[currentCharIndex];
      currentCharIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }

  function erase() {
    const chars = [...words[currentWordIndex]];
    if (currentCharIndex > 0) {
      el.textContent = chars.slice(0, currentCharIndex - 1).join('');
      currentCharIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(type, typingSpeed);
    }
  }

  type();
}
