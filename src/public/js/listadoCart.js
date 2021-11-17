window.addEventListener("load", function () {
  const cartItem1 = document.querySelector(".loginCarrito2");

  let btn = document.querySelector("#btn");

  cartItem1.addEventListener("mouseover", function () {
    btn.style.display = "block";
  });

  window.addEventListener("click", function () {
    btn.style.display = "none";
  });
});

window.addEventListener("load", function () {
  const cartItem2 = document.querySelector("#cartItem");
  let btn = document.querySelector("#btn");

  cartItem2.addEventListener("mouseover", function () {
    btn.style.display = "block";
  });

  window.addEventListener("click", function () {
    btn.style.display = "none";
  });
});
