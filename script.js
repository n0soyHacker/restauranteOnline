// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("orderForm");
    const verifyButton = document.getElementById("verifyOrder");
    const submitButton = document.getElementById("submitButton");
    const showConfirmationButton = document.getElementById("showConfirmation");

    verifyOrder.addEventListener("click", function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        // Validar el nombre
        const nombreInput = document.getElementById("nombre");
        const nombreValue = nombreInput.value.trim();
        const nombreRegex = /^[A-Za-z\s]+$/; // Solo letras y espacios
        const nombreError = document.getElementById("nombreError");

        if (nombreValue === "" || !nombreRegex.test(nombreValue)) {
            nombreInput.classList.add("invalid");
            nombreError.textContent = "El nombre es inválido (solo letras y espacios)";
        } else {
            nombreInput.classList.remove("invalid");
            nombreInput.classList.add("valid");
            nombreError.textContent = "";
        }

        // Validar el correo electrónico
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Formato de correo válido
        const emailError = document.getElementById("emailError");

        if (emailValue === "" || !emailRegex.test(emailValue)) {
            emailInput.classList.add("invalid");
            emailError.textContent = "El correo electrónico es inválido";
        } else {
            emailInput.classList.remove("invalid");
            emailInput.classList.add("valid");
            emailError.textContent = "";
        }

        // Validar el número de teléfono
        const telefonoInput = document.getElementById("telefono");
        const telefonoValue = telefonoInput.value.trim();
        const telefonoRegex = /^\d{10}$/; // 10 dígitos numéricos
        const telefonoError = document.getElementById("telefonoError");

        if (telefonoValue === "" || !telefonoRegex.test(telefonoValue)) {
            telefonoInput.classList.add("invalid");
            telefonoError.textContent = "El número de teléfono es inválido (10 dígitos numéricos)";
        } else {
            telefonoInput.classList.remove("invalid");
            telefonoInput.classList.add("valid");
            telefonoError.textContent = "";
        }

        // Validar el tipo de pan
        const tipoPanSelect = document.getElementById("tipoPan");
        const tipoPanValue = tipoPanSelect.value;
        const tipoPanError = document.getElementById("tipoPanError");

        if (tipoPanValue === "") {
            tipoPanSelect.classList.add("invalid");
            tipoPanError.textContent = "Selecciona un tipo de pan";
        } else {
            tipoPanSelect.classList.remove("invalid");
            tipoPanSelect.classList.add("valid");
            tipoPanError.textContent = "";
        }

        // Validar el tipo de baguette
        const tipoBaguetteSelect = document.getElementById("tipoBaguette");
        const tipoBaguetteValue = tipoBaguetteSelect.value;
        const tipoBaguetteError = document.getElementById("tipoBaguetteError");

        if (tipoBaguetteValue === "") {
            tipoBaguetteSelect.classList.add("invalid");
            tipoBaguetteError.textContent = "Selecciona un tipo de baguette";
        } else {
            tipoBaguetteSelect.classList.remove("invalid");
            tipoBaguetteSelect.classList.add("valid");
            tipoBaguetteError.textContent = "";
        }

        // Validar la selección de cubiertos
        const cubiertosSelect = document.getElementById("cubiertos");
        const cubiertosValue = cubiertosSelect.value;
        const cubiertosError = document.getElementById("cubiertosError");

        if (cubiertosValue === "") {
            cubiertosSelect.classList.add("invalid");
            cubiertosError.textContent = "Selecciona si deseas incluir cubiertos";
        } else {
            cubiertosSelect.classList.remove("invalid");
            cubiertosSelect.classList.add("valid");
            cubiertosError.textContent = "";
        }

         // Validar la selección de terminos
         const terminosCheckbox = document.getElementById("terminos");
         const terminosError = document.getElementById("terminosError");
 
         if (!terminosCheckbox.checked) {
             terminosError.textContent = "Debes aceptar los términos y condiciones para continuar.";
         } else {
             terminosError.textContent = "";
         }
      

        // Verificar si el formulario es válido
        if (form.checkValidity() && toppingsCheckboxes.length > 0) {
            showConfirmation();
        }
    }

    
       verifyButton.addEventListener("click", function(event) {
            event.preventDefault();
            validateForm();
        });

        showConfirmationButton.addEventListener("click", function() {
            showConfirmation();
        });

    function showConfirmation() {
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const tipoPanValue = document.getElementById("tipoPan").value;
        const tipoBaguette = document.getElementById("tipoBaguette").value;
        const toppings = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
            .map(input => input.value).join(", ");
        const cubiertos = document.getElementById("cubiertos").value;
        const instrucciones = document.getElementById("instrucciones").value;

        const message = `Pedido Confirmado:
Nombre: ${nombre}
Correo Electrónico: ${email}
Teléfono: ${telefono}
Tipo de Pan: ${tipoPanValue}
Tipo de Baguette: ${tipoBaguette}
Toppings: ${toppings || "Ninguno"}
Incluir Cubiertos: ${cubiertos}
Instrucciones Especiales: ${instrucciones || "Ninguna"}`;

        alert(message);
    }
    // Obtener el formulario. Obtener todos los campos. Iterar sobre éstos y establecer el valor a =""
    
    const fields = form.querySelectorAll("input, select, textarea");
    fields.forEach(field => {
        field.value = "";
      });
      document.addEventListener("click", function(event) {
        if (event.target.id === "clearOrder") {
            const form = document.getElementById("orderForm");
            const fields = form.querySelectorAll("input, select, textarea");
            fields.forEach(field => {
                field.value = "";
              });
            }
          });


});

