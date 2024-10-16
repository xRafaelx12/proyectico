import cl_Medicamento from './cl_Medicamento.js';

export default class farmacia {
    constructor(){
        this.acMontoTotalVentas=0;
        this.MedicamentoMenosVendidos=999999999999; 
        this.guardarNombreMedicamentoMenosVendido=[];

    }


    procesarDatos(medicamento){
        this.acMontoTotalVentas+=medicamento.montoVendidoDelMedicamento();
        
        if(medicamento.cantidadVendida<this.MedicamentoMenosVendidos){
            this.MedicamentoMenosVendidos=medicamento.cantidadVendida;
            this.guardarNombreMedicamentoMenosVendido = [medicamento.codigoMedicamento];
        } else if (medicamento.cantidadVendida === this.MedicamentoMenosVendidos) {
            this.guardarNombreMedicamentoMenosVendido.push(medicamento.codigoMedicamento);
        }
    }
}

