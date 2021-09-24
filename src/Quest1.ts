class Produto{
    constructor(
        private _nome: string,
        private _preco: number,
        private _quantidade: number
    ){ }
    
   
    get nome(){
        return this._nome
    }

    get preco(){
        return this._preco
    }

    get quantidade(){
        return this._quantidade
    }

  
    set nome(nome:string){
        if(nome == ''){
            throw new Error('Nome inválido')
        }
        this._nome = nome
    }

    set preco(preco:number){
        if(preco <= 0){
            throw new Error('O preço deve ser maior do que 0')
        }

        this._preco = preco
    }

    set quantidade(quantidade:number){
        if(quantidade <= 0){
            throw new Error('A quantidade deve ser maior do que 0')
        }
        
        this._quantidade = quantidade
    }

    public desconto():number{
        if(this.quantidade <= 10){
            return 0
        }else if(this.quantidade >= 11 && this.quantidade <= 20){
            return this.preco * 0.10
        } else if(this.quantidade >= 21 && this.quantidade <= 50){
            return this.preco * 0.20
        } else
            return this.preco * 0.25
        
    }

    public valor(){
       return (this.preco * this.quantidade) - (this.desconto() * this.quantidade)
     }


}

let p1 = new Produto('Chocolate', 50, 52);

console.log(`O produto ${p1.nome} de preço ${p1.preco}, quantidade comprada de ${p1.quantidade} teve o desconto de ${p1.desconto() } e o valor pago foi de ${p1.valor()} `)



try{

    p1.nome='Salgadinho'
    p1.preco= 30
    p1.quantidade= 10

    console.log(`O produto ${p1.nome} de preço ${p1.preco}, quantidade comprada de ${p1.quantidade} teve o desconto de ${p1.desconto() } e o valor pago foi de ${p1.valor()} `)
 
   
}catch(error:any){
    console.log(error.message)
}