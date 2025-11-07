let saldoCliente = 500000;
const pinValido = '1234';
const pinBloqueado = '9999';
let programaActivo = true;

//Menu principal
function mostrarMenuPrincipal(){
    console.log("\n BANCA AMIGA - CAJERO AUTOMATICO");
    console.log("1. Consignar Dinero");
    console.log("2. Retirar Dinero");
    console.log("3. Consultar Saldo");
    console.log("4. Validacion de PIN");
    console.log("Salir");
}

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