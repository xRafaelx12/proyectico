export default class medicamento {
    constructor(nombre,codigoMedicamento,precio, cantidadVendida,tipoDeMedicamento) {
        this.nombre=nombre
        this.codigoMedicamento=codigoMedicamento
        this.precio = precio
        this.cantidadVendida = cantidadVendida
        this.tipoDeMedicamento=tipoDeMedicamento
    }
    
    set nombre(n){
        this._nombre=n;
    }
    
    get nombre(){
        return this._nombre
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

    set tipoDeMedicamento(p){
        this._tipoDeMedicamento=+p;
    }
    
    get tipoDeMedicamento(){
        return this._tipoDeMedicamento
    }
   
    montoVendidoDelMedicamento(){
        return this.cantidadVendida* this.precio
    }
    
    separarTipoDeMedicamento() {
        if (this.tipoDeMedicamento === 1) {
            return "el medicamento es nacional";
        } else if (this.tipoDeMedicamento === 2) {
            return "el medicamento es importado";
        } else if (this.tipoDeMedicamento >= 3) { 
            return "el tipo de medicamento es erróneo";
        }
    }
}
