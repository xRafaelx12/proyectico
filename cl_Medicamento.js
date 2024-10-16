export default class medicamento {
    constructor(codigoMedicamento,precio, cantidadVendida) {
        this.codigoMedicamento=codigoMedicamento
        this.precio = precio
        this.cantidadVendida = cantidadVendida
    }
    
    set codigoMedicamento(c) {
        this._codigoMedicamento = c;
    }
    
    get codigoMedicamento(){
        return this._codigoMedicamento;
    }
    
    set precio(p){
        this._precio=+p;
    }
    
    get precio(){
        return this._precio
    }

    set cantidadVendida(c){
        this._cantidadVendida=+c;
    }
    
    get cantidadVendida(){
        return this._cantidadVendida
    }
   
    montoVendidoDelMedicamento(){
        return this.cantidadVendida* this.precio
    }
    }
    