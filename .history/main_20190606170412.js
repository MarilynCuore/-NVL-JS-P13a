var primos = []
var numero = [4,3,5,2]
function primo(numero) {
  for (var i = 1; i < numero.length; i++) {
    if (i % i === 0) {
      primos.push(i)
    }
  }
}
console.log(primo(numero))