document.addEventListener("DOMContentLoaded", () => {
  const signInForm = document.getElementById("sign-in-form");
  const signUpForm = document.getElementById("sign-up-form");
  const forgotForm = document.getElementById("forgot");

  function hideAllForms() {
    signInForm.classList.add("hidden");
    signUpForm.classList.add("hidden");
    forgotForm.classList.add("hidden");
  }

  document.getElementById("create-account").addEventListener("click", (e) => {
    e.preventDefault();
    hideAllForms();
    signUpForm.classList.remove("hidden");
  });

  document.getElementById("forgot-password").addEventListener("click", (e) => {
    e.preventDefault();
    hideAllForms();
    forgotForm.classList.remove("hidden");
  });

  document
    .getElementById("already-have-account")
    .addEventListener("click", (e) => {
      e.preventDefault();
      hideAllForms();
      signInForm.classList.remove("hidden");
    });

  document.querySelector("#forgot a").addEventListener("click", (e) => {
    e.preventDefault();
    hideAllForms();
    signUpForm.classList.remove("hidden");
  });
});
