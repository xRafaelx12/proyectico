export default class iCompañia{
    reporteCompañia(MedicamentoMenosVendidos,totalVentas,tiposDeMedicamento,porcentajeImportado,medicamentoNacionales,precioM20,CantidadVendidaPromedio,nombreMenosIngresos,nombreMayorIngreso,precioPromedio,totalMedicamentoVendidos,medicamentosEntre8y12,precioM50,porcentajeMedicamentosEntre8y12){
     return`
     <br>El medicamento menos destacado fue el Medicamento de codigo: ${MedicamentoMenosVendidos}
     <br>EL monto total sumando las ventas de todos los medicamentos es: ${(totalVentas.toFixed(2))}$$
     <br>Todos los tipos de medicamentos son los siguientes ${tiposDeMedicamento}
     <br>El porcentaje de medicamentos importado es de: ${(porcentajeImportado.toFixed(2))}%
     <br>La suma de todos los medicamentos nacionales es de: ${medicamentoNacionales}
     <br>Cantidad de medicamento con precio mayor a 20$ es de: ${precioM20}
     <br>Promedio de la cantidad vendida de medicamentos es de: ${(CantidadVendidaPromedio.toFixed(2))}
     <br>Nombre del medicamentos que genero menos ingresos ${nombreMenosIngresos}
     <br>Nombre del medicamentos que genero mayores ingresos: ${nombreMayorIngreso}
     <br>Precio promedio de los medicamentos es de : ${(precioPromedio.toFixed(2))}$$
     <br>Cantidad vendida de medicamentos es de : ${totalMedicamentoVendidos}
     <br>Cantidad de Medicamentos entre 8 y 12 es de: ${medicamentosEntre8y12}
     <br>Medicamentos conun precio mayor a 50$ es :${((precioM50).toFixed(2))}%
     <br>Porcentaje de medicamentos entre 8 y 12 es de:${(porcentajeMedicamentosEntre8y12.toFixed(2))}%
     `;
    }
 
 }