function checkNoVerticalScroll() {
  const hasScroll = document.documentElement.scrollHeight > window.innerHeight;
  if (!hasScroll) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

// Executa ao carregar a página e ao redimensionar a janela
checkNoVerticalScroll();
window.addEventListener("resize", checkNoVerticalScroll);