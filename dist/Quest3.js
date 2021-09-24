"use strict";
var Funcionarios = /** @class */ (function () {
    function Funcionarios(_nome, _salarioH, _diasTrab, _faltasTOT) {
        this._nome = _nome;
        this._salarioH = _salarioH;
        this._diasTrab = _diasTrab;
        this._faltasTOT = _faltasTOT;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome = '') {
                throw new Error('Nome invalido.');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salarioH", {
        get: function () {
            return this._salarioH;
        },
        set: function (salarioH) {
            if (salarioH <= 0) {
                throw new Error('O salario deve ser maior que 0');
            }
            this._salarioH = salarioH;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "diasTrab", {
        get: function () {
            return this._diasTrab;
        },
        set: function (diasTrab) {
            if (diasTrab <= 0) {
                throw new Error('Dias trabalhados deve ser maior que 0');
            }
            this._diasTrab = diasTrab;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "faltasTOT", {
        get: function () {
            return this._faltasTOT;
        },
        set: function (faltasTOT) {
            if (faltasTOT < 0) {
                throw new Error('Número de faltas invalido');
            }
            this._faltasTOT = faltasTOT;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.bruto = function () {
        return this.salarioH * this.diasTrab;
    };
    Funcionarios.prototype.plr = function () {
        if (this.faltasTOT === 0) {
            return this.bruto();
        }
        else if (this.faltasTOT === 1) {
            return this.bruto() * 0.94;
        }
        else if (this.faltasTOT === 2) {
            return this.bruto() * 0.92;
        }
        else if (this.faltasTOT === 3) {
            return this.bruto() * 0.90;
        }
        else if (this.faltasTOT === 4) {
            return this.bruto() * 0.88;
        }
        else {
            return 0;
        }
    };
    Funcionarios.prototype.desconto = function () {
        return this.bruto() * 0.05;
    };
    Funcionarios.prototype.salarioLiq = function () {
        return (this.bruto() - this.desconto()) + this.plr();
    };
    return Funcionarios;
}());
var f = new Funcionarios('Gabriel', 100, 24, 3);
console.log("O funcion\u00E1rio de nome " + f.nome + " tem o sal\u00E1rio bruto de " + f.bruto() + ", teve " + f.faltasTOT + " falta(s) e sua PLR foi de " + f.plr());
console.log("O funcion\u00E1rio de nome " + f.nome + " tem o sal\u00E1rio bruto de " + f.bruto() + ", o desconto de " + f.desconto() + ", a PLR de " + f.plr() + " e o sal\u00E1rio l\u00EDquido de " + f.salarioLiq() + " ");
try {
    f.nome = 'José';
    f.salarioH = 200;
    f.diasTrab = 25;
    f.faltasTOT = 2;
    console.log("O funcion\u00E1rio de nome " + f.nome + " tem o sal\u00E1rio bruto de " + f.bruto() + ", teve " + f.faltasTOT + " falta(s) e sua PLR foi de " + f.plr());
    console.log("O funcion\u00E1rio de nome " + f.nome + " tem o sal\u00E1rio bruto de " + f.bruto() + ", o desconto de " + f.desconto() + ", a PLR de " + f.plr() + " e o sal\u00E1rio l\u00EDquido de " + f.salarioLiq() + " ");
}
catch (error) {
    console.log(error.message);
}
