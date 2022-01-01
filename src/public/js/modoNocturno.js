window.addEventListener("load", function () {
  const btn = document.querySelector("nav.apaEnce");
  const encendido = document.querySelector(".switchD");
  const body = document.querySelector("body");
  const naVar1 = document.querySelector("header");

  const footer = document.querySelector("footer");
//   const footerUlLi = document.querySelector(".footerLinks ul li");
//   const footerI = document.querySelector(".redesSociales a i");

  if (localStorage.getItem("cambiarModo") == "noche") {
    body.classList.toggle("modoNoc");
    naVar1.classList.toggle("modoNoc");
    footer.classList.toggle("footerNoc");
    encendido.classList.replace("fa-toggle-on", "fa-toggle-off");
  }

  btn?.addEventListener("click", function (e) {
    body.classList.toggle("modoNoc");
    naVar1.classList.toggle("modoNoc");
    footer.classList.toggle("footerNoc");

    if (body.classList.contains("modoNoc")) {
      encendido.classList.replace("fa-toggle-on", "fa-toggle-off");
      localStorage.setItem("cambiarModo", "noche");
    } else {
      encendido.classList.replace("fa-toggle-off", "fa-toggle-on");
      localStorage.setItem("cambiarModo", "dia");
    }
  });

  // localStorage.clear()
});
