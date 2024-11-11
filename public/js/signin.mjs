// Aplicando máscaras
import NewMask from "./models/IMask.mjs";

const inputCPF = new NewMask("#signinCPF", "000.000.000-00");
inputCPF.createMask();

const inputPhone = new NewMask("#signinPhone", "(00) 00000-0000");
inputPhone.createMask();

// Toastify
import ToastifyPopUp from "./models/Toastify.mjs";
const toastufyMessage = new ToastifyPopUp;

// Mudando a visibilidade do input de senha
import PasswordVisibility from "./models/PasswordVisibility.mjs";
const inputPassword = new PasswordVisibility(
  "#signinPassword",
  ".passwordViewButton"
);
inputPassword.initializeChangeVisibility();

const inputRepeatPassword = new PasswordVisibility(
  "#signinRepeatPassword",
  ".repeatPasswordViewButton"
);
inputRepeatPassword.initializeChangeVisibility();

// Verificando CPF
const checkCPF = (cpf) => {
  const arrayCPF = cpf.split("");

  arrayCPF.splice(3, 1);
  arrayCPF.splice(6, 1);
  arrayCPF.splice(9, 1);

  // Primeiro número
  var n1 = 0;
  for (var x = 9; x >= 1; x--) {
    n1 = n1 + arrayCPF[x - 1] * x;
  }
  n1 = n1 % 11;

  // Segundo número
  var n2 = 0;
  for (var x = 9; x >= 0; x--) {
    n2 = n2 + arrayCPF[x] * x;
  }
  n2 = n2 % 11;

  // Compara o número de verificação
  var validatorNumbers = String(arrayCPF[9]) + String(arrayCPF[10]);
  var validator = String(n1) + String(n2);

  if (validator != validatorNumbers) {
    return false;
  } else {
    return true;
  }
};

const cpfInput = document.querySelector("#signinCPF");

cpfInput.addEventListener("change", () => {
  if (cpfInput.value.length == 14) {
    let correct = checkCPF(cpfInput.value);

    if (!correct) {
        toastufyMessage.showToastifyError("CPF inválido!")
        cpfInput.value = ''
    }
  }
});
