const inputCPF = document.querySelector("#inputCPF");

inputCPF.addEventListener("change", () => {
  // Pega o valor do CPF e divide ele em um array
  const CPF = inputCPF.value;

  if (CPF.length == 14) {
    const arrayCPF = CPF.split("");

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
      alert("O CPF digitado não é válido");
      inputCPF.value = "";
    }
  }
});
