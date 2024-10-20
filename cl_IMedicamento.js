export default class iMedicamento{

constructor(){
 this.contadorIteraciones = 1;
}

leerNombreMedicamento() {
    return prompt(`ingrese el nombre del medicamento numero ${this.contadorIteraciones}`);
}

leercodigoMedicamento() {
    return prompt(`ingrese el codigo del medicamento numero ${this.contadorIteraciones}`);
}

leerPrecioMedicamento() {
    return prompt(`ingrese el precio del medicamento ${this.contadorIteraciones}`);
}

leerCantidadVendidaDeMedicamentos(){
    return prompt (`ingrese la cantidad vendida del medicamento numero ${this.contadorIteraciones} `)
}

leerTipoDeMedicamento(){
    return +prompt (`ìngrese el tipo del medicamento numero ${this.contadorIteraciones}PRESIONE 1=NACIONAL  2=IMPORTADO `)
}

leerAñadirNuevoUsuario() {
    return +prompt("DESEA AGREGAR UN NUEVO MEDICAMENTO PRESIONE 1=SI  2=NO");
}

reportesParaSalida(monto,tipoDeMedicamento) {
    return `
    <br>
    <br>Monto vendido del medicamento numero ${this.contadorIteraciones} fue de un valor de ${(monto).toFixed(2)}$$
    <br>El medicamento  ${this.contadorIteraciones}  ${tipoDeMedicamento}
    <br>
    
    `;
}

incrementarContador() {
    return this.contadorIteraciones++;
}
}

