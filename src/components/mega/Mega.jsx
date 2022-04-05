// Pedir a quantidade de numeros para o usuario

// Criar botão para gerar o array de números

// Gerar os números aleatorios

// Os números não podem se repetir

/* function gerarNumeros(quantidade) {

    return [3, 13, 43, 51, 53, 55]
}

console.log(gerarNumeros(6)) */

import React, { useState } from 'react'
import './Mega.css'

export default props => {

    function gerarNumeroNãoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNãoContido(min, max, array) :
            aleatorio
    }


    function gerarNumeros(quantidade) {
        const numeros = Array(quantidade)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNãoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((numero1, numero2) => numero1 - numero2)

        return numeros
    }

    const [quantidade, setQuantidade] = useState(props.quantidade || 6) 
    const numerosIniciais = gerarNumeros(quantidade)
    const [numeros, setNumeros] = useState(numerosIniciais) 

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input
                    min='6'
                    max='10'
                    type="number" value={quantidade} 
                    onChange={(e) => { 
                        setQuantidade(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                        }} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(quantidade))}>Gerar Números</button>
        </div>
    )
}