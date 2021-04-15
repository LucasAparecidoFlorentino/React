import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/card'

// Com a utilização do defaul, consigo retornar uma função anonima, caso contrário, erro.
// =>: para uma arrow function
// se utilizar apenas um parametro, não precisa de parenteses.
export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="#04 - Desafio Aleatório">
            <Aleatorio min={5} max={15} />
        </Card>

        <Card titulo="#03 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro">
            <ComParametro Titulo="Situação do Aluno"
                aluno="Lucas" nota={10} />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
    </div>
