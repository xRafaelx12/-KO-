//De un operador se tienen los siguientes datos: cédula de identidad, tipo de operador 
//(1=Supervisor, 2=Diseñador, 3=Costurera, 4=Bordador, 5=Empacador), horas trabajadas en la semana 
//y el precio de la hora base. Si trabaja más de 40 horas a la semana, el operador tendrá el beneficio de bono
// por horas extras. La hora extra se paga de acuerdo a lo siguiente: 
//Muestre como salida del programa: cédula, precio de la hora extra, cantidad de horas extras trabajadas, bono de horas extras y total a cobrar. 


import cl_Operador from "./cl_Operador.js";
import cl_IOperador from "./cl_IOperador.js";


let Interfaz = new cl_IOperador(),
c = Interfaz.leerCedula(),
n1 = Interfaz.leerOperador(),
n2 = Interfaz.leerHoraTrabajadas(),
n3 = Interfaz.leerSalarioBase(),

operator= new cl_Operador(c,n1,n2,n3),

salida = document.getElementById("salida");

salida.innerHTML = Interfaz.datosDelOperador(operator.cedula,operator.pagoPorHoraExtra(),operator.HoraExtra(), operator.tipoDeTrabajador(), operator.totalACobrar())
