let idade = 10
let temIngresso =true
let temCarro = false
let temMoto = true

if(idade>=18 && temIngresso && (temCarro || temMoto)){
    console.log("Pode ir a festa")
}else{
    console.log("NÃO vai sair de casa")
}