
/**
 * Efecto de escritura dinámica para elementos de texto
 * @param {string[]} words - Array de palabras a mostrar
 * @param {string} elementId - ID del elemento donde mostrar el texto
 * @param {Object} options - Opciones de configuración
 */
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

  // Inicializar el efecto
  type();
}
