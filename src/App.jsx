import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

// Com a utilização do defaul, consigo retornar uma função anonima, caso contrário, erro.
// =>: para uma arrow function
// se utilizar apenas um parametro, não precisa de parenteses.
export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={5} max={15}/>
        <Fragmento />
        <ComParametro Titulo="Situação do Aluno"
            aluno="Lucas" nota={10} />
        <Primeiro></Primeiro>
    </div>
