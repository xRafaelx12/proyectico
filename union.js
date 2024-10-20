import cl_Medicamento from './cl_Medicamento.js';
import cl_iMedicamento from './cl_IMedicamento.js';
import cl_Farmacia from './cl_Farmacia.js';
import cl_iFarmacia from './cl_IFarmacia.js';

let iFarmacia= new cl_iFarmacia,
iMedicamento= new cl_iMedicamento,
farmacia=new cl_Farmacia,

agregarUsuario=1;

let salida= document.getElementById("salida");

while(agregarUsuario===1){
    let n=iMedicamento.leerNombreMedicamento(),
    cm=iMedicamento.leercodigoMedicamento(),
    p= iMedicamento.leerPrecioMedicamento(),
    c=iMedicamento.leerCantidadVendidaDeMedicamentos(),
    t=iMedicamento.leerTipoDeMedicamento();

    let medicamento= new cl_Medicamento(n,cm,p,c,t);

    farmacia.procesarDatos(medicamento);
    salida.innerHTML+=iMedicamento.reportesParaSalida(medicamento.montoVendidoDelMedicamento(),medicamento.separarTipoDeMedicamento());
    iMedicamento.incrementarContador();
    agregarUsuario=iMedicamento.leerAñadirNuevoUsuario()
}

salida.innerHTML+=iFarmacia.reporteCompañia(farmacia.codigoMedicamentosMenosVendido,farmacia.acMontoTotalVentas,farmacia.guardarTiposDeMedicamento,farmacia.obtenerPorcentajeDeImportados(),farmacia.acDeMedicamentosNacionales,farmacia.guardaMedicamentoM20,farmacia.CantidadVendidaPromedio(),farmacia.nombreMedicamentoMenor,farmacia.nombreMedicamentoMayor,farmacia.obternerPrecioPromedioMedicamentos(),farmacia.guardadCantidadMedicamentos,farmacia.guardarMedicamentoVendidoEntre8y12,farmacia.sacarPorcentajeMedicamentosPrecioM50(),farmacia.sacarPorcentajeMedicamentosEntre8y12())