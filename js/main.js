function validateForm() {
  var nombre = $("#name").val();
  var apellido = $("#lastname").val();
  var correo = $("#input-email").val();
  var contrasena = $("#input-password").val();
  var seleccion = $("select").val();

  if (
    nombre == "" ||
    apellido == "" ||
    correo == "" ||
    contrasena == "" ||
    seleccion == ""
  ) {
    alert("Debe ingresar nombre");
  }

  if (correo != "^[^@]+@[^@]+.[a-zA-Z]{2,}$") {
    alert("El correo debe tener este formato: alguien@algunlugar.com");
  }

  if (contrasena != "(?=w*d)(?=w*[A-Z])(?=w*[a-z])S{8}$)") {
    alert(
      " La contraseña debe tener 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
    );
  }

  if (
    !nombre.match("^[A-Z]{1}[a-z]+$") ||
    !apellido.match("^[A-Z]{1}[a-z]+$")
  ) {
    alert(
      "El nombre y apellido debe comenzar con mayúscula y no contener números ni acentos"
    );
  }

  if (contrasena == "123456" || contrasena == "098765") {
    alert(
      "Favor ingrese una contraseña de igual o mayor a 6 digitos y que no sea un 123456 o 098765"
    );
  }

  if (seleccion == "0") {
    alert("Seleccione una alternativa");
  }
}
