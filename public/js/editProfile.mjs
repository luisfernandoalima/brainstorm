const uploadInput = document.querySelector("#userImage");
const imageTag = document.querySelector("#userPicture");

uploadInput.addEventListener("change", () => {
  const file = event.target.files[0];
  imageTag.src = URL.createObjectURL(file);
});

// Toastify
import ToastifyPopUp from "./models/Toastify.mjs";
var errorMessage = new ToastifyPopUp();

// IMask
import NewMask from "./models/Imask.mjs";

const inputCell = new NewMask("#userCellInput", "(00) 00000-0000");
inputCell.createMask();

// Change visibility
import PasswordVisibility from "./models/PasswordVisibility.mjs";
const passwordInput = new PasswordVisibility(
  "#userPasswordInput",
  ".passwordViewButton"
);

passwordInput.initializeChangeVisibility();

const repeatPasswordInput = new PasswordVisibility(
  "#userRepeatPasswordInput",
  ".repeatPasswordViewButton"
);

repeatPasswordInput.initializeChangeVisibility();

// Confirmar senha
const inputPassword = document.querySelector("#userPasswordInput");
const inputAreaPassword = document.querySelector(".repeat-area ");

inputPassword.addEventListener("change", () => {
  if (inputAreaPassword.classList.contains("disable")) {
    inputAreaPassword.classList.remove("disable");
  }
});

// Habilitar botão
const btnSubmit = document.querySelector(".btn-submit");

const checkErrors = () => {
  let inputs = document.querySelectorAll("input");
  let errorCount = 0;
  let errorText = [];

  inputs.forEach((input) => {
    if (input.value == "" || input.value == null || input.value == undefined) {
      errorCount += 1;
    }
  });
  if (errorCount != 0) {
    errorText.push("Os campos não podem estar vazios!");
  }

  let inputPassword = document.querySelector("#userPasswordInput");
  let repeatInputPassword = document.querySelector("#userRepeatPasswordInput");

  if (inputPassword.value != repeatInputPassword.value) {
    errorCount += 1;
    errorText.push("As senhas devem ser iguais!");
  }

  if (errorText.length > 0) {
    return errorText;
  } else {
    return false;
  }
};

btnSubmit.addEventListener("mouseover", () => {
  if (btnSubmit.disabled === true) {
    let error = checkErrors();

    error.forEach((error) => {
      errorMessage.showToastifyError(error);
    });
  }
});

const checkInputs = () => {
  let inputs = document.querySelectorAll("input");
  let errorCount = 0;

  inputs.forEach((input) => {
    if (input.value == "" || input.value == null || input.value == undefined) {
      errorCount += 1;
    }
  });
  
  let inputPassword = document.querySelector("#userPasswordInput");
  let repeatInputPassword = document.querySelector("#userRepeatPasswordInput");

  if (inputPassword.value != repeatInputPassword.value) {
    errorCount += 1;
  }

  if (errorCount == 0) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};

setInterval(checkInputs, 500)