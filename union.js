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
    let cm=iMedicamento.leercodigoMedicamento(),
    p= iMedicamento.leerPrecioMedicamento(),
    c=iMedicamento.leerCantidadVendidaDeMedicamentos();

    let medicamento= new cl_Medicamento(cm,p,c);

    farmacia.procesarDatos(medicamento);
    salida.innerHTML+=iMedicamento.reportesParaSalida(medicamento.montoVendidoDelMedicamento());
    iMedicamento.incrementarContador();
    agregarUsuario=iMedicamento.leerAñadirNuevoUsuario()
}

salida.innerHTML+=iFarmacia.reporteCompañia(farmacia.guardarNombreMedicamentoMenosVendido,farmacia.acMontoTotalVentas)