const uploadInput = document.querySelector('#userImage');
const imageTag = document.querySelector('#userPicture');

uploadInput.addEventListener('change', () =>{
    const file = event.target.files[0];
    imageTag.src = URL.createObjectURL(file)
})

import { initializeToastufy } from "./models/Toastify.mjs";
initializeToastufy()