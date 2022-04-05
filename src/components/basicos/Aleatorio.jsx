import React from 'react'

// Minha resolução
// export default function Aleatorio(min, max) {
//     return (
//         min = Math.ceil(0),
//         max = Math.floor(50),
//         Math.floor(Math.random() * (max - min + 1)) + min
//     )
// }

export default props => {
    const { minimo, maximo } = props
    const aleatorio = parseInt(Math.random() * (maximo - minimo)) + minimo
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Minímo: </strong> {minimo}</p>
            <p><strong>Valor Máximo: </strong> {maximo}</p>
            <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
        </div>
    )
}
