function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;

  menu.classList.toggle("hidden");

  requestAnimationFrame(() => {
    if (!menu.classList.contains("hidden")) {
      menu.classList.remove("opacity-0", "scale-95");
      menu.classList.add("opacity-100", "scale-100");
    } else {
      menu.classList.remove("opacity-100", "scale-100");
      menu.classList.add("opacity-0", "scale-95");
    }
  });
}

window.toggleMenu = toggleMenu;