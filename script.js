let saldoCliente = 500000;
const pinValido = '1234';
const pinBloqueado = '9999';
let programaActivo = true;


//Consignar dinero
function consignarDinero(){
    const montoConsignar = parseFloat(prompt("¿Cuanto dinero desea consignar?"));

    if (montoConsignar > 0){
        saldoCliente = saldoCliente + montoConsignar;
        console.log("Consignacion exitosa");
        console.log("Monto consignado: $" + montoConsignar);
        console.log("Nuevo saldo: $" + saldoCliente);
    }
    else{
        console.log("Monto no valido. Debe ser mayor a 0");
    }
}

//Retirar dinero
function retirarDinero(){
    const montoRetirar = parseFloat(prompt("¿Cuanto dinero desea retirar?"));

    if(montoRetirar <= 0){
        console.log("Monto no valido.");
    }
    else if (montoRetirar > saldoCliente){
        console.log("Fondos insuficientes.");
        console.log("Saldo disponible: $" + saldoCliente);
    }
    else {
    saldoCliente = saldoCliente - montoRetirar;
    console.log("Retiro exitoso");
    console.log("Monto retirado: $" + montoRetirar);
    console.log("Nuevo saldo: $" + saldoCliente);
    }
}

//Consultar saldo
function consultarSaldo(){
    console.log("Su saldo actual es: $" + saldoCliente);
}

//Validacion de seguridad
function validarPin(){
    const pinIngresado = prompt("Ingrese su PIN de seguridad: ");

    if (pinIngresado === pinValido){
        console.log("Acceso de seguridad aprobado");
    }
    else if (pinIngresado === pinBloqueado){
        console.log("PIN bloqueado. Contacte a a la entidad");
    }
    else {
        console.log("PIN incorrecto");
    }
}

//Salir del programa
function salirPrograma(){
    console.log("Gracias por usar Banca Amiga. ¡Hasta pronto!");
    programaActivo = false;
}

//Ejecutar programa
function ejecutarCajeroAutomatico(){
    console.log("Iniciando cajero automatico Banca Amiga...")
    console.log("Saldo inicial: $" + saldoCliente);

    while (programaActivo){
        const opcionSeleccionada = prompt("Seleccione una opcion (1-5)\n1. Consignar dinero\n2. Retirar dinero\n3. Consultar saldo\n4. Validacion de seguridad\n5. Salir");

        if (opcionSeleccionada === '1') {
            consignarDinero();
        } else if (opcionSeleccionada === '2') {
            retirarDinero();
        } else if (opcionSeleccionada === '3') {
            consultarSaldo();
        } else if (opcionSeleccionada === '4') {
            validarPin();
        } else if (opcionSeleccionada === '5') {
            salirPrograma();
        } else {
            console.log(" Opción no válida. Por favor, seleccione una opción del 1 al 5.");
    }
}
}

//Iniciar programa
ejecutarCajeroAutomatico();