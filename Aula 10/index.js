const button = document.querySelector('.button')
const resultado = document.querySelector('.res')

document.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('btn-action-1')) {
        resultado.innerHTML += `Botão 1 clicado</br>`
    }
    if(el.classList.contains('btn-action-2')) {
        resultado.innerHTML += `Botão 2 clicado</br>`
    }
    if(el.classList.contains('btn-action-3')) {
        resultado.innerHTML += `Botão 3 clicado</br>`
    }
    if(el.classList.contains('btn-action-4')){
        resultado.innerHTML += `Botão 4 clicado</br>`
    }    
})


