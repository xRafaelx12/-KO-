export default class IOperador{
    leerCedula()
    {
        return prompt ("INGRESE LA CEDULA ");
    }
    leerOperador(){
        return prompt ("SELECCIONE SU POSICION COMO OPERADOR ");
    }
     leerHoraTrabajadas(){
        return prompt ("INGRESE LAS HORA TRABAJADAS ");
    }
    leerSalarioBase(){
        return prompt ("INGRESE SU SALARIO ");
    }

    datosDelOperador(c,n1,n2,n3,np)
    { return `
        <br> Cedula del Operador: ${c}
        <br> Precio de las horas extra: ${n1}
         <br> Catidad de horas extras trabajadas: ${n2}
         <br> bono por hora extra trabajada  : ${n3}
         <br> total a cobrar : ${np}
         `;
    }
}