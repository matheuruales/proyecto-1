const button = document.querySelector("#ctaBtn");
const status = document.querySelector("#status");
const label = button ? button.querySelector(".cta__label") : null;
const originalLabel = label ? label.textContent : "Reservar ahora";

if (button) {
  button.addEventListener("click", () => {
    if (button.classList.contains("is-loading")) return;

    button.classList.add("is-loading");
    button.setAttribute("aria-busy", "true");

    if (label) label.textContent = "Procesando...";
    if (status) status.textContent = "Procesando tu reserva...";

    window.setTimeout(() => {
      button.classList.remove("is-loading");
      button.setAttribute("aria-busy", "false");

      if (label) label.textContent = originalLabel;
      if (status) {
        status.textContent = "Reserva confirmada. Te escribimos en breve.";
      }
    }, 1200);
  });
}
