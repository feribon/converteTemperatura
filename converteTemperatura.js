// converte temperatura
var valor = prompt('digite a temperatura, padrao 20f ou 25c')
var ultimo = valor.split('').pop()
var explode = valor.split("")
var numeros = (explode.slice(0,explode.length-1))
var juntos = parseInt(numeros.join(''))

if (ultimo === 'f' || ultimo === 'F'){
   var finalF = ((juntos-32)*5/9).toFixed(1)
   var resultF = finalF+'°C'
   console.log(resultF)
} else if (ultimo === 'c' || ultimo === 'C'){
   var finalC = (juntos*9/5+32).toFixed(1)
   var resultC = finalC+'°F'
   console.log(resultC)
} else {
   console.log('valor invalido')
}









