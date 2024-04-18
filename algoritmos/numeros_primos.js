function nPrimos(n) {
  var nprimos = []
  for (let i = 2; i < n+1; i++) {
    let resultado = true
    for (let j = 2; j <= i; j++) {
      console.log(i%j)
      if (i % j === 0) {
        // console.log(j)
        resultado = false
      }
    }
    console.log(resultado)
    if (resultado) {
      console.log(i)
      nprimos.push(i)
    }
  }
  return console.log(nprimos)
}

nPrimos(100)