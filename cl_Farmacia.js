import cl_Medicamento from './cl_Medicamento.js';

export default class farmacia {
    constructor(){
        this.acMontoTotalVentas=0;  //ACUMULADOR DE VENTAS
        this.MedicamentoMenosVendidos=999999999999; //GUARDAR MEDICAMENTO MENOS VENDIDO
        this.codigoMedicamentosMenosVendido=null;
        this.MedicamentoMasVendido=0,
        this.guardaMedicamentoNacional=0;       //GUARDAR MEDICAMENTO NACIONAL PARA DESPUES COMPARARLOS
        this.guardaMedicamentoImportado=0;      //GUARDAR MEDICAMENTO IMPORTADO PARA DESPUES COMPARARLOS
        this.guardaCantidadDeMedicamento=0;     //GUARDAR LA CANTIDAD VENDIDA DE MEDICAMENTOS
        this.guardarDatoErroneo=null;
        this.guardarTiposDeMedicamento=[];  //GUARDAR EH IDENTIFICAR TIPOS DE MEDICAMENTOS
        this.acDeMedicamentosNacionales=0 ; // GUARDA CANTIDAD DE MEDICAMENTOS NACIONALES
        this.guardaMedicamentoM20=0 ;  //GUARDAR MEDICAMENTOS CON CON PRECIO SUPERIOR A 20
        this.nombreMedicamentoMenor=null;   //GUARDAR NOMBRE DEL MADICAMENTOS CON MENOR PRECIO
        this.nombreMedicamentoMayor=null;  //GUARDAR NOMBRE DEL MADICAMENTOS CON MAYOR PRECIO
        this.guardarTodosLosPrecio=0;  //GUARDA TODOS LOS PRECIO DE LOS MEDICAMENTOS
        this.guardadCantidadMedicamentos=0; //GUARDA TODOS LOS MEDICAMENTOS VENDIDOS
        this.guardaMedicamentosMayor50=0;//GUARDAR TODOS LOS MEDICAMENTOS CN UN PRECIO SUPERIOR A 50$
        this.guardarMedicamentoVendidoEntre8y12=0;
        this.contadorIteracionesTipoMedicamento=1;  //CONTADOR DE VECES QUE SE A HECHO UNA ITERACION PARA SACAR EL PORCVENTAJE DE ALGO 
        this.contadorIteraciones=0;
        
    }

    //BLOQUE DE CODIGO PARA ALMACENAR DATOS
    procesarDatos(medicamento){
        this.contadorIteracionesTipoMedicamento++
        this.contadorIteraciones++
        
        this.acMontoTotalVentas+=medicamento.montoVendidoDelMedicamento();
        
        this.guardadCantidadMedicamentos+=medicamento.cantidadVendida

        this.guardarTodosLosPrecio+=medicamento.precio

   

        //Bloque para sacar medicamentos con una cantidad vendida entre 8 y 12
        if(medicamento.cantidadVendida>=8 && medicamento.cantidadVendida<=12){
            this.guardarMedicamentoVendidoEntre8y12+=1;
        }
        
        
        //Bloque para sacar medicamentos con una cantidad vendida entre 8 y 12


        //Bloque para identificar tipo de mediciamentos
        if (medicamento.tipoDeMedicamento === 1) {
            this.guardaMedicamentoNacional += 1;
            this.guardaCantidadDeMedicamento+=medicamento.cantidadVendida
        } else if (medicamento.tipoDeMedicamento === 2) {
            this.guardaMedicamentoImportado += 1;
            this.guardaCantidadDeMedicamento+=medicamento.cantidadVendida
        }
        
        //Bloque para identificar tipo de mediciamentos


        //Bloque donde identifica los tipo de medicamento y los guarda en un array 
        if(medicamento.tipoDeMedicamento===1){
            this.guardarTiposDeMedicamento.push(` ${this.contadorIteracionesTipoMedicamento} ES NACIONAL`)
        }else if (medicamento.tipoDeMedicamento===2){
            this.guardarTiposDeMedicamento.push(` ${this.contadorIteracionesTipoMedicamento} ES IMPORTADO`)
        }else{ (medicamento.tipoDeMedicamento>=3)
            this.guardarTiposDeMedicamento.push(` ${this.contadorIteracionesTipoMedicamento} TIENE UN DATO ERRONEO`)
        }
        //Bloque donde identifica los tipo de medicamento y los guarda en un array 

    //Bloque de codigo para sumar la cantidad de medicamentos nacionales

        if(medicamento.tipoDeMedicamento===1){
            this.acDeMedicamentosNacionales+=medicamento.cantidadVendida
        }
        //Bloque de codigo para sumar la cantidad de medicamentos nacionales


        //Bloque de codigo para guardar  medicamentos con precio mayor a 20
        if(medicamento.precio>20){
            this.guardaMedicamentoM20+=1
        }
        
      //Bloque de codigo para guardar  medicamentos con precio mayor a 20



   
        //GUARDAR NOMBRE DEL MEDICAMENTOS MENOS VENDIDO
        if(medicamento.cantidadVendida<this.MedicamentoMenosVendidos){
            this.MedicamentoMenosVendidos=medicamento.cantidadVendida;
            this.nombreMedicamentoMenor = medicamento.nombre;
            this.codigoMedicamentosMenosVendido=medicamento.codigoMedicamento;
        }
        //GUARDAR NOMBRE DEL MEDICAMENTOS MENOS VENDIDO


        //GUARDAR NOMBRE DEL MEDICAMENTOS MAS VENDIDOS 
        if(medicamento.cantidadVendida>this.MedicamentoMasVendido){
            this.MedicamentoMasVendido=medicamento.cantidadVendida;
            this.nombreMedicamentoMayor = medicamento.nombre;

         //GUARDAR NOMBRE DEL MEDICAMENTOS MAS VENDIDOS


         //BLOQUE PARA GUARDAR MEDICAMENTOS MAYORES A 50$
         if(medicamento.precio>50){
            this.guardaMedicamentosMayor50+=1
        }
       
    }
    }

    
    //SABER CANTIDAD VENDIDA PROMEDIO DE MEDICAMENTOS
    CantidadVendidaPromedio(){
        return this.guardaCantidadDeMedicamento/this.contadorIteraciones
    }


    //SACAR PRECIO PROMEDIO DE LOS MEDICAMENTOS
    obternerPrecioPromedioMedicamentos(){
        return this.guardarTodosLosPrecio/this.contadorIteraciones
    }

    //SACAR EL PORCENTAJE DE MEDICAMENTOS IMPORTADOS
    obtenerPorcentajeDeImportados(){
        return (this.guardaMedicamentoImportado/this.contadorIteraciones)*100
    }

    //SACAR PORCENTAJE DE MEDICAMENTOS CON PRECIO MAYOR A 50
    sacarPorcentajeMedicamentosPrecioM50(){
        return (this.guardaMedicamentosMayor50/this.contadorIteraciones)*100
    }

    //SACAR PORCENTAJES  DE CANTIDAD DE MEDICAMENTOS ENTRE 8 Y 12
    sacarPorcentajeMedicamentosEntre8y12(){
        return (this.guardarMedicamentoVendidoEntre8y12/this.contadorIteraciones)*100
    }

}
