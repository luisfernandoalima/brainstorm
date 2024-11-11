class NewMask {
  constructor(input, mask) {
    (this.input = input), (this.mask = mask);
  }

  createMask() {
    var element = document.querySelector(this.input);
    var element = IMask(element, {
      mask: this.mask,
    });
  }
}

export default NewMask;
