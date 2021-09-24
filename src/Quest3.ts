class Funcionarios{
    constructor(
        private _nome: string,
        private _salarioH: number,
        private _diasTrab: number,
        private _faltasTOT: number,
    ){ }

        get nome(){
            return this._nome
        }

        get salarioH(){
            return this._salarioH
        }

        get diasTrab(){
            return this._diasTrab
        }

        get faltasTOT(){
            return this._faltasTOT
        }


        set nome(nome:string) {
            if(nome == ''){
                throw new Error('Nome invalido.')
            }
            
            this._nome = nome
        }

        set salarioH(salarioH:number) {
            if(salarioH <= 0){
                throw new Error('O salario deve ser maior que 0')
            }
                
            this._salarioH = salarioH
        }

        set diasTrab(diasTrab:number) {
            if(diasTrab <= 0){
                throw new Error('Dias trabalhados deve ser maior que 0')
            }

            this._diasTrab = diasTrab
        }
        
        set faltasTOT(faltasTOT: number) {
            if(faltasTOT < 0){
                throw new Error('Número de faltas invalido')
            }

            this._faltasTOT = faltasTOT
        }

        public bruto(){
            return this.salarioH * this.diasTrab
        }

        public plr(){
            if(this.faltasTOT === 0){
                return this.bruto()
            }else if(this.faltasTOT === 1){
                return this.bruto() * 0.94
            }else if(this.faltasTOT === 2){
                return this.bruto() * 0.92
            }else if(this.faltasTOT === 3){
                return this.bruto() * 0.90
            }else if(this.faltasTOT === 4){
                return this.bruto() * 0.88
            }else{
                return 0
            }
        }

        public desconto(){
            return this.bruto() * 0.05
        }

        public salarioLiq(){
            return  (this.bruto() - this.desconto()) + this.plr()  
        }




}

let f = new Funcionarios ('Gabriel', 100, 24, 3)
console.log(`O funcionário de nome ${f.nome} tem o salário bruto de ${f.bruto()}, teve ${f.faltasTOT} falta(s) e sua PLR foi de ${f.plr()}`)

console.log(`O funcionário de nome ${f.nome} tem o salário bruto de ${f.bruto()}, o desconto de ${f.desconto()}, a PLR de ${f.plr()} e o salário líquido de ${f.salarioLiq()} `)





try{

    f.nome="Maria"
    f.salarioH= 200
    f.diasTrab= 25
    f.faltasTOT= 2

    console.log(`O funcionário de nome ${f.nome} tem o salário bruto de ${f.bruto()}, teve ${f.faltasTOT} falta(s) e sua PLR foi de ${f.plr()}`)

    console.log(`O funcionário de nome ${f.nome} tem o salário bruto de ${f.bruto()}, o desconto de ${f.desconto()}, a PLR de ${f.plr()} e o salário líquido de ${f.salarioLiq()} `)
    
    

   
}catch(error:any){
    console.log(error.message)
}