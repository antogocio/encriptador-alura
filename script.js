function borrar() {

    document.getElementById("limpiar").addEventListener('click', resetear, false);
    document.getElementById("enviar").addEventListener('click', validar, false);
    document.getElementById("limpiartexto").addEventListener('click', limpiatextos, false);
  
    function limpiatextos() {
  
      document.getElementById(campoid).value = "text";
      document.getElementById(campoid).focus();
    }
  
      form.addEventListener("focus", function() {
      var focusedElement = document.activeElement;
      campoid = focusedElement.id;
      console.log(campoid);
    }, true);
  
  }


function encriptar () {

    var texto = document.getElementById("text").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("frase1").style.display = "none";
    document.getElementById("frase2").style.display = "none";
    document.getElementById("hada").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("textcifrado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"


}

function desencriptar() {

    var texto = document.getElementById("text").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");


    document.getElementById("frase1").style.display = "none";
    document.getElementById("frase2").style.display = "none";
    document.getElementById("hada").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("textcifrado").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"

}

function copy() {

    var copyText = document.getElementById("textcifrado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado")
    
}

