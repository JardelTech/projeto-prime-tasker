function salvarnota() {
  let notasalva = document.getElementById("blocodenotas").value;
  let palavras = notasalva.split(/\s+/);
  let numPalavras = palavras.length;
  if (numPalavras > 83) {
    document.getElementById("erros").innerHTML =
      "limite de palavras excedeu! digite menos que 83 palavras.";
    return;
  } else if (notasalva.trim() === "") {
    document.getElementById("erros").innerHTML = "<BR>Digite algo!";
  } else {
    const novadiv = document.createElement("div");
    novadiv.textContent = notasalva;
    novadiv.classList.add("divcriada");
    document.body.appendChild(novadiv);
  }
}
