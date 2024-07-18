export default class operador {
    constructor(cedula, tipoDeOperador, horasTrabajadas, horaBase, horaExtra) {
        this.cedula = cedula;
        this.tipoDeOperador = tipoDeOperador
        this.horasTrabajadas = horasTrabajadas;
        this.horaBase = horaBase
        this.horaExtra = horaExtra
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

    set horaBase(n) {
        this._horaBase = +n;
    }
    get horaBase() {
        return this._horaBase;
    }
    set horaExtra(n) {
        this._horaExtra = +n;
    }
    get horaExtra() {
        return this._horaExtra;
    }


    tipoDeTrabajador() {
        switch (this.tipoDeOperador) {
            case 1:
                return "supervisor";
                break;
            case 2:
                return "Diseñador";
                break;
            case 3:
                return "Costurera";
                break;
            case 4:
                return "Bordador";
                break;
            case 5:
                return "Empacador";
                break;
        }
    }
        precioHoraExtra() {
            return this.horaBase * (this.horaExtra / 100);
        }
        precioSinBase(){
            return this.horaExtra-this.horaBase
        }
        totalACobrar(){
            return this.h
        }
    }