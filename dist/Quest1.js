"use strict";
var Produto = /** @class */ (function () {
    function Produto(_nome, _preco, _quantidade) {
        this._nome = _nome;
        this._preco = _preco;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(Produto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome == '') {
                throw new Error('Nome inválido');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            if (preco <= 0) {
                throw new Error('O preço deve ser maior do que 0');
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (quantidade <= 0) {
                throw new Error('A quantidade deve ser maior do que 0');
            }
            this._quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.desconto = function () {
        if (this.quantidade <= 10) {
            return 0;
        }
        else if (this.quantidade >= 11 && this.quantidade <= 20) {
            return this.preco * 0.10;
        }
        else if (this.quantidade >= 21 && this.quantidade <= 50) {
            return this.preco * 0.20;
        }
        else
            return this.preco * 0.25;
    };
    Produto.prototype.valor = function () {
        return (this.preco * this.quantidade) - (this.desconto() * this.quantidade);
    };
    return Produto;
}());
var p1 = new Produto('Chocolate', 50, 52);
console.log("O produto " + p1.nome + " de pre\u00E7o " + p1.preco + ", quantidade comprada de " + p1.quantidade + " teve o desconto de " + p1.desconto() + " e o valor pago foi de " + p1.valor() + " ");
try {
    p1.nome = 'Salgadinho';
    p1.preco = 30;
    p1.quantidade = 10;
    console.log("O produto " + p1.nome + " de pre\u00E7o " + p1.preco + ", quantidade comprada de " + p1.quantidade + " teve o desconto de " + p1.desconto() + " e o valor pago foi de " + p1.valor() + " ");
}
catch (error) {
    console.log(error.message);
}
