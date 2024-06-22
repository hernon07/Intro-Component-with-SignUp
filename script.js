const inputs = document.querySelectorAll("input");

const form = document.querySelector("form");

form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();

    inputs.forEach((input) => {
      if (input.value === "") {
        input.insertAdjacentHTML(
          "afterend",
          `<p class='warn'>${input.placeholder} can not be empty</p>`
        );
      }
    });
  },
  { once: true }
);
