import React from 'react'

// props são denominadas propriedades, são utilizadas para fazer a utilização de parametros.
export default function ComParametro(props) {
    const aluno = props.aluno
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{ props.Titulo }</h2>
            <p>
                <strong>{ aluno } </strong>
                tem nota
                <strong> { props.nota } </strong>
                e está
                <strong> { status } </strong> !
            </p>
        </div>

    )
}