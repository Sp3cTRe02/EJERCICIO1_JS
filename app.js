var persona = {
    nombre : '',
    apellido : '',
    correo : '',
    dni : '',
    asignaturas : ['DWC','DWS','...']
}

const user = "user@gmail.com"
const pass = 'admin123'

function logear(){
    const email = document.getElementById("email").value
    const pass = document.getElementById("password").value

    // Verificar si la contraseña es 'admin123'

    var errorMsg = validarLogin()

    if (errorMsg == ''){
        window.location.href = 'datos.html'
    }else {
        alert(errorMsg)
    }

}

function validarLogin(){
    const userEmail = document.getElementById("email").value
    const userPass = document.getElementById("password").value
    var mensajeError = ''

    if (userEmail == '') {
        mensajeError += 'El campo correo no puede estar vacío '
    }
    if (userPass == '') {
        mensajeError += 'El campo contraseña no puede estar vacío '
    }
    if (userPass.length < 8){
        mensajeError += 'La contraseña no puede ser menor de 8 caracteres '
    }if(validarEmail()){
        mensajeError += 'El correo es necesario que contenga @ y no puede estar en la primera letra ni en las 3 ultimas '
    }
    if(!validarPass()){
        mensajeError += 'La contraseña no coincide '
    }

    return mensajeError
}

/*function errorMsg(){

}*/
function validarEmail(){
    var esValido = true
    const userMail = document.getElementById("email").value
    if (!userMail.includes('@')){
        esValido = false
    }
    if(userMail.indexOf('@') == 0){
        esValido = false
    }
    if (userMail.slice(-3) == '@' ){
        esValido = false
    }
    return esValido
}
function validarPass(){
    var esValida = false
    const passUser = document.getElementById("password").value

    if (passUser == pass){
        esValida = true
    }else{
        esValida = false
    }

    return esValida
}
function mostrarPersona(){
    console.log(persona)
}
function guardar(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const correo = document.getElementById("correo").value
    const dni = document.getElementById("dni").value

    persona.nombre = nombre
    persona.apellido = apellido
    persona.correo = correo
    persona.dni = dni
}
