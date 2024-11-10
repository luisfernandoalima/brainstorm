const uploadInput = document.querySelector("#userImage");
const imageTag = document.querySelector("#userPicture");

uploadInput.addEventListener("change", () => {
  const file = event.target.files[0];
  imageTag.src = URL.createObjectURL(file);
});

// Toastify
import { initializeToastufy } from "./models/Toastify.mjs";
initializeToastufy();

// IMask
import NewMask from "./models/Imask.mjs";

const inputCell = new NewMask('#userCellInput', '(00) 00000-0000')
inputCell.createMask()

// Change visibility
import PasswordVisibility from "./models/PasswordVisibility.mjs";
const passwordInput = new PasswordVisibility('#userPasswordInput', '.passwordViewButton')

passwordInput.initializeChangeVisibility()

const repeatPasswordInput = new PasswordVisibility('#userRepeatPasswordInput', '.repeatPasswordViewButton')

repeatPasswordInput.initializeChangeVisibility()