const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

const form = document.querySelector("#submit-to-google-sheet");
const successMessage = document.querySelector("#success-message");

//
const scriptURL =
  "https://script.google.com/macros/s/AKfycbytGxRxGgyTknCxi9OHQ6mNa0EUDzeILa62oQoU76OZJ-EQoDny2WA9bZdeKzp7KrZw/exec";

function validateForm(event) {
  event.preventDefault();

  if (checkLength(name.value, 6) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  // Check if all criterias are met //
  if (
    checkLength(name.value, 6) &&
    checkLength(subject.value, 15) &&
    checkLength(message.value, 25) &&
    validateEmail(email.value) === true
  ) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) });
    successMessage.innerHTML =
      '<div class="success-info">Your message has been submitted successfully.</div>';
    setTimeout(function () {
      successMessage.innerHTML = "";
    }, 5000);
    form.reset();
  } else {
    successMessage.innerHTML = "";
  }
}

// To Make sure whitespace doesn't count as letters //

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
