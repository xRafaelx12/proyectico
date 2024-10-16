export default class iMedicamento{

constructor(){
 this.contadorIteraciones = 1;
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

leerAñadirNuevoUsuario() {
    return +prompt("DESEA AGREGAR UN NUEVO MEDICAMENTO 1=SI PRESIONE 2=NO");
}

reportesParaSalida(monto) {
    return `
    <br>
    <br>Monto vendido del medicamento numero ${this.contadorIteraciones} fue de un valor de $${monto} 
    <br>
    
    `;
}

incrementarContador() {
    return this.contadorIteraciones++;
}
}

