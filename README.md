# EJERCICIO1

Crear las pantallas de login y de datos de un usuario utilizando html y js para las validaciones de los campos. Las ventanas tienen que tener las siguientes características:

## Pantalla de login

1. Una pantalla de login donde el usuario introduzca un correo electrónico, una contraseña y un botón con el texto "Entrar".
+ Validaciones de la pantalla
    + El campo correo y la contraseña no pueden estar vacíos cuando se pulsa el botón Entrar
    + El campo contraseña debe tener mínimo 8 caracteres.
    + El campo correo debe contener mínimo la letra @ pero no debe ser ni en el primer carácter ni en los últimos 3 caracteres
    + Todas las validaciones que fallen en el momento de pulsar el botón deben mostrarse en un único alert con el mensaje completo concatenado.


----
## Pantalla de datos de usuario

2. En la pantalla de los datos del usuario inicialmente tiene que encontrase vacía. Tiene que contener los campos: Nombre, Primer Apellido Segundo Apellido, DNI, fecha de nacimiento y dos botones, Guardar y Limpiar.
+ En el momento que se pulse el botón Guardar se realizarán las siguientes validaciones.
    + Que el nombre contenga entre 3 y 30 caracteres si no se informará de error.
    + Que el primer apellido contenga entre 2 y 30 caracteres si no se informará del error.
    + Que el segundo apellido contenga entre 2 y 30 caracteres si no se informará del error.
    + Que el campo fecha de nacimiento tiene que tener el siguiente formato dd/mm/AAAA si no se informará del error
    + El campo DNI tiene que validarse para que sea correcto. Para validar el dni se utilizan las siguientes letras TRWAGMYFPDXBNJZSQVHLCKE. Para validad si el dni introducido el correcto es el resto del número introducido entre 23. El resultado mira la posición de la letra en texto del conjunto de letras, y si es la introducida por el usuario el dni es correcto. Tened en cuenta que el dni tiene que tener 8 números si no el formato es incorrecto de primeras.
    + Cuando se pulse el botón Guardar los campos del formulario deben guardarse en un objeto llamado persona siempre y cuando se pasen todas las validaciones si no debe mostrarse en un único alert con el mensaje completo concatenado.