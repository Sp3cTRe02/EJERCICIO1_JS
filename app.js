var persona = {
    nombre : '',
    primer_apellido : '',
    segundo_apellido : '',
    fecha_nacimiento : '',
    dni : '',
    asignaturas : ['DWC','DWS','...']
}

const user = "user@gmail.com"
const pass = 'admin123'

function logear(){
    const email = document.getElementById("email").value
    const pass = document.getElementById("password").value

    // Verificar si la contraseña es 'admin123'

    var errorMsg = validarFormulario()

    if (errorMsg == ''){
        window.location.href = 'datos.html'
    }else {
        alert(errorMsg)
    }

}

function validarFormulario(){
    const email = document.getElementById("email").value
    const pass = document.getElementById("password").value
    var mensajeError = ''

    if (email == '' || pass == ''){
        mensajeError += "Los campos no pueden estar vacios. "
    }
    if (email != user){
        mensajeError += "\nEl correo no es correcto. "
    }
    if (!validarEmail()){
        mensajeError += "\nEl correo es necesario que contenga @, no puede estar en la primera letra ni en las 3 ultimas ni puede haber \n más de 1 @."
    }
    if (!validarPass()) {
        mensajeError += "\nLa contraseña no coincide o no tiene al menos 8 caracteres. "

    }
    return mensajeError
}

function validarEmail(){
    const userMail = document.getElementById("email").value
    var m = userMail.split('@')
    var dom = m[1]
    if (!userMail.includes('@')){
       return false
    }
    if(userMail.indexOf('@') === 0){
        return  false
    }
    // Compruebo la posicion del @ mediante las longitudes de los campos
    if (dom.length <= 3) {
        return false
    }
    if (m.length > 2) {
        return false
    }
    return true
}
function validarPass(){
    const passUser = document.getElementById("password").value
    if (passUser.length < 8 || passUser !== pass) {
        return false
    }
        return true
}
function mostrarPersona(){
    console.log(persona)
}
function guardar(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("primer-apellido").value
    const apellido2 = document.getElementById("segundo-apellido").value
    const fecha = document.getElementById("fecha-nacimiento").value
    const dni = document.getElementById("dni").value

    var mensajeError = ''

    if (!validarNombre()) {
        mensajeError += "El nombre debe tener entre 3 y 30 caracteres. "
    }
    if (!validarPrimerApellido()) {
        mensajeError += "\nEl primer apellido debe tener entre 2 y 30 caracteres. "
    }
    if (!validarSegundoApellido()) {
        mensajeError += "\nEl segundo apellido debe tener entre 2 y 30 caracteres. "
    }
    if (!validarfechaNac()) {
        mensajeError += "\nLa fecha de nacimiento no es correcta. El formato debe ser dd/mm/aaaa. "
    }
    if (!validarDni()) {
        mensajeError += "\nEl dni no es correcto. "
    }
    if (mensajeError == '') {
        persona.nombre = nombre
        persona.primer_apellido = apellido
        persona.segundo_apellido = apellido2
        persona.fecha_nacimiento = fecha
        persona.dni = dni
    }else {
        alert(mensajeError)
    }
}
function limpiar(){
    document.getElementById("nombre").value = ''
    document.getElementById("primer-apellido").value = ''
    document.getElementById("segundo-apellido").value = ''
    document.getElementById("dni").value = ''
    document.getElementById("fecha-nacimiento").value = ''

}
function validarNombre(){
    const nombre = document.getElementById("nombre").value

    if (nombre.length < 3 || nombre.length > 30) {
        return false
    }
    return true
}
function validarPrimerApellido(){
    const apellido = document.getElementById("primer-apellido").value

    if (apellido.length < 2 || apellido.length > 30) {
        return false
    }
    return true
}
function validarSegundoApellido(){
    const apellido = document.getElementById("segundo-apellido").value

    if (apellido.length < 2 || apellido.length > 30) {
        return false
    }
    return true
}
function validarfechaNac(){
    const fecha = document.getElementById("fecha-nacimiento").value
    var f = fecha.split('/')
    var dia = f[0]
    var mes = f[1]
    var anio = f[2]
    if (f > 3) {
        return false
    }
    if(dia.length > 2){
        return false
    }
    if(mes.length > 2){
        return false
    }
    if (anio.length > 4) {
        return false
    }
    return true
}
function validarDni(){
    const dni = document.getElementById("dni").value.toUpperCase()
    var abecedario = "TRWAGMYFPDXBNJZSQVHLCKE"

    // hago substring para separar la letra del numero
    var numero = dni.substring(0,8)
    var letra = dni.substring(8)

    // compruebo que el numero tenga 8 digitos
    if (numero.length != 8) {
        return false
    }
    // compruebo que el numero introducido es correcto si el resto del numero introducido es igual a la letra
    var resto = numero % 23
    if (letra[0] != abecedario.charAt(resto)) {
        return false
    }
    return true
}