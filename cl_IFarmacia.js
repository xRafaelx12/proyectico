export default class iCompañia{
    reporteCompañia(MedicamentoMenosVendidos,totalVentas){
     return`
     <br>El medicamento menos destacado fue el Medicamento de codigo: ${MedicamentoMenosVendidos}
     <br>EL monto total sumando las ventas de todos los medicamentos es: ${(totalVentas.toFixed(2))}$$
     `;
    }
 
 }