document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = this;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "tu_correo@gmail.com",
        Password : "tu_contraseña",
        To : 'destinatario@ejemplo.com',
        From : form.email.value,
        Subject : "Mensaje desde formulario de contacto",
        Body : "<html><body>Nombre: <strong>" + form.nombre.value + "</strong><br>Email: <strong>" + form.email.value + "</strong><br>Mensaje: <strong>" + form.mensaje.value + "</strong></body></html>"
    }).then(function(message){
        alert("Mensaje enviado con éxito");
    });
});