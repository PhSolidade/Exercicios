const button1 = document.querySelector('.button-1')

const resultado = document.querySelector('.resultado')

button1.addEventListener('click',() => {
    resultado.innerHTML = ''
    const nome = prompt(`Digite seu nome`)
    const nota1 = Number(prompt(`Digite a primeira nota`))
    const nota2 = Number(prompt(`Digite a segunda nota`))

    const media = (nota1 + nota2) / 2

       
    resultado.innerHTML += `Média final de ${nome}<br>`
    resultado.innerHTML += `As notas obtidas foram ${nota1} e ${nota2}`
    resultado.innerHTML += `A média final será ${media}`

    if(media > 5) {
        
        resultado.innerHTML = ('Parabéns, nota muito boa')
    }
    
   else {
    resultado.innerHTML = ('Estude mais')
   }
    
})