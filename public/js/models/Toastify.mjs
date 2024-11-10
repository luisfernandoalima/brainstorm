class ToastifyPopUp {
  constructor(text) {
    this.text = text;
  }
  showToastifySuccess(text) {
    Toastify({
      text: text,
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }

  showToastifyError(text) {
    Toastify({
      text: text,
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#d00000",
      },
    }).showToast();
  }
}

export default ToastifyPopUp;
