import React from 'react'


export default function Primeiro() { // export defaul para eu conseguir exportar as informações 
    // presentes no meu componente
    const mensagem = 'Seja bem vindo(a) !!'
    return <div>
        <h2>Primeiro Componente</h2>
        <p>{mensagem}</p>
    </div>
}