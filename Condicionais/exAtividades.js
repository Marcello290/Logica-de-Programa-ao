// 2. Número positivo, negativo ou zero
// Crie um programa que verifique e retorne se um número é positivo, negativo ou
// igual a zero.

// let numero = 45

// if(numero == 0){
//     console.log('o numero é Zero')
// }else if(numero > 0){
//     console.log('o numero é positivo')
// }else{
//     console.log('o numero é negativo')
// }




// 4. Boletim escolar
// Crie um programa que classifique o resultado de um aluno com base na nota:
// • Nota maior ou igual a 70 → "Aprovado".
// • Nota entre 50 e 69 → "Recuperação".
// • Nota menor que 50 → "Reprovado"

// let NotaAluno = 15

// if(NotaAluno >= 70){
//     // console.log('A Nota do aluno foi:'+ NotaAluno + ', ele está aprovado')
//     console.log(`A nota do aluno foi: ${NotaAluno}, ele está aprovado`)
// }else if(NotaAluno >= 50){
//     // console.log('A nota do aluno foi:'+ NotaAluno+ ', ele está de recuperação')
//     console.log(`A nota do aluno foi: ${NotaAluno}, ele está de recuperação`)
// }else{
//     // console.log('A nota do aluno foi:'+ NotaAluno+ ', ele está reprovado' )
//     console.log(`A nota do aluno foi: ${NotaAluno}, ele foi reprovado`)
// }




// 5. Verificação de senha
// Crie um programa que verifique se a senha digitada é igual a "12345".
// Se for, exiba "Acesso permitido", caso contrário, "Senha incorreta".

// let senha = "12345"
// let SenhaPermitida = "12345"

// let email = "teste@testes.com"
// let EmailPermitido = "teste@testes.com"

// if(email === EmailPermitido && senha == SenhaPermitida){
// // if(senha == "12345"){
//     console.log('acesso permitido')
// }else{
//     //  console.log('acesso negado')
//      console.log('email ou senha incorreta')
// }



// 6. Classificação de idade
// Crie um programa que classifique a idade de uma pessoa:
// • 0 a 12 anos → "Criança".
// • 13 a 17 anos → "Adolescente".
// • 18 a 59 anos → "Adulto".
// • 60 anos ou mais → "Idoso"

let idade = 35

if(idade <= 12){
    console.log(`com ${idade} anos, você é uma criança`)
}else if(idade <=17){
    console.log(`com ${idade} anos, você é um adolescente`)
}else if(idade <=59){
    console.log(`com ${idade} anos, você é um adulto`)
}else{
    console.log(`com ${idade} anos, você é um idoso`)
}
