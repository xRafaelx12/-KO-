export default class operador {
    constructor(cedula, tipoDeOperador, horasTrabajadas, precioHoraBase, ) {
        this.cedula = cedula;
        this.tipoDeOperador = tipoDeOperador
        this.horasTrabajadas = horasTrabajadas;
        this.precioHoraBase = precioHoraBase
      
    }

    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }

    set tipoDeOperador(t) {
        this._tipoDeOperador = +t;
    }
    get tipoDeOperador() {
        return this._tipoDeOperador;
    }

    set horasTrabajadas(h) {
        this._horasTrabajadas = +h;
    }
    get horasTrabajadas() {
        return this._horasTrabajadas;
    }

    set precioHoraBase(n) {
        this._precioHoraBase = +n;
    }
    get precioHoraBase() {
        return this._precioHoraBase;
    }

    tipoDeTrabajador() {
        switch (this.tipoDeOperador) {
            case 1:
                return "supervisor bono de 32% por hora extra ";
                return  32;
                break;
            case 2:
                return "Diseñador bono de 23% por hora extra";
                break;
            case 3:
                return "Costurera bono de 17% por hora extra";
                break;
            case 4:
                return "Bordador bono de 7% por hora extra";
                break;
            case 5:
                return "Empacador bono de 5% por hora extra";
                break;
              default:
                return " el operador no existe";
                break;
        }
    }

    pagoPorHoraExtra() {
        switch (this.tipoDeOperador) {
            case 1:
                return this.precioHoraBase*(32/100)+this.precioHoraBase
                break;
            case 2:
                return this.precioHoraBase*(23/100)+this.precioHoraBase
                break;
            case 3:
                return this.precioHoraBase*(17/100)+this.precioHoraBase
                break;
            case 4:
                return this.precioHoraBase*(7/100)+this.precioHoraBase
                break;
            case 5:
                return this.precioHoraBase*(5/100)+this.precioHoraBase
                break;
                default:
                return " el operador no existe";
                break;
        }
    }
        HoraExtra() {
            if (this.horasTrabajadas > 40) {
            return this.horasTrabajadas -40;
          }else{
            return 0;
           }
        
        }
        maximoDeHorasBase(){
            if (this.horasTrabajadas >40){
                return this.horasTrabajadas-this.HoraExtra();
            }else{
                return this.horasTrabajadas-0;
            }               
        }

        CantidadBonoPorHoraExtra(){
            return this.pagoPorHoraExtra()-this.precioHoraBase
        }
        PrecioDeLaHoraExtra(){
            return this.precioHoraBase*this.pagoPorHoraExtra
       
        }
        totalACobrar(){
            return (this.precioHoraBase*this.maximoDeHorasBase())+(this.HoraExtra()*this.pagoPorHoraExtra())
        }
    }