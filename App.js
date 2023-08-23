'use strict'

const botaoMostrarTodosNumeros = document.getElementById('botao-mostrar-todos')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoMostrarNumerosMultiplos3 = document.getElementById('botao-mostrar-numeros-multiplos-3')
const botaoMostrarNumerosMultiplos3e4 = document.getElementById('botao-mostrar-numeros-multiplos-3-4')
const botaoMostrarNumerosMultiplos3ou4 = document.getElementById('botao-mostrar-numeros-multiplos-3-ou-4')
const botaoMostrarDobro = document.getElementById('botao-mostrar-dobro')


botaoMostrarTodosNumeros.addEventListener('click', mostrarTodosNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosImpares.addEventListener('click', mostrarNumerosImpares)
botaoMostrarNumerosMultiplos3.addEventListener('click',mostrarNumerosMultiplos3)
botaoMostrarNumerosMultiplos3e4.addEventListener('click',mostrarNumerosMultiplos3e4)
botaoMostrarNumerosMultiplos3ou4.addEventListener('click',mostrarNumerosMultiplos3ou4)

botaoMostrarDobro.addEventListener('click',mostrarDobro)

function mostrarTodosNumeros (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')

    const ultimoIndice = numeros.length
    for (let indice= 0; indice < ultimoIndice; indice++){
        const novoSpan = document.createElement ('span')
        novoSpan.textContent = numeros [indice] 
        container.appendChild(novoSpan)   
    }
}



function mostrarNumerosPares (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
    }

    function mostrarNumerosImpares (){
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-numeros-impares')
    
        container.replaceChildren('')
        const ultimoIndice = numeros.length
    
        for (let indice=0; indice < ultimoIndice; indice++){
            if (numeros[indice] % 2 != 0){
                const novoSpan = document.createElement('span')
                novoSpan.textContent = numeros[indice]
                container.appendChild(novoSpan)
            }
        }
        }

        function mostrarNumerosMultiplos3 (){
            const numeros = document.getElementById('numeros').value.split(',')
            const container = document.getElementById('container-numeros-multiplos-3')
        
            container.replaceChildren('')
            const ultimoIndice = numeros.length
        
            for (let indice=0; indice < ultimoIndice; indice++){
                if (numeros[indice] % 3 == 0){
                    const novoSpan = document.createElement('span')
                    novoSpan.textContent = numeros[indice]
                    container.appendChild(novoSpan)
                }
            }
}

function mostrarNumerosMultiplos3e4 (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 3 == 0){

            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}


function mostrarNumerosMultiplos3ou4 (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-multiplos-3-ou-4')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 3 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarDobro (){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-dobro')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let indice=0; indice < ultimoIndice; indice++){
        if (numeros[indice] % 3 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[indice]
            container.appendChild(novoSpan)
        }
    }
}



