import React from 'react'

// Passar um valor máximo como parametro
// Passar um valor minimo como parametro
// Sortear um numero entre o maximo e o minimo aleatoriamente.

export default props => {
    const { min, max } = props

    const aleatorio = parseInt (Math.random() * (max - min)) + min
    return(

        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Minimo: </strong> {min}</p>
            <p><strong>Valor Maximo: </strong> {max}</p>
            <p><strong>Valor Escolhido: </strong> {aleatorio}</p>

        </div>
    )
}