import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

// Com a utilização do default, consigo retornar uma função anonima, caso contrário, erro.
// =>: para uma arrow function
// se utilizar apenas um parametro, não precisa de parenteses.
export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color='#00C8F8'>
                <Familia sobrenome='Schiling' >
                    <FamiliaMembro nome='Lucas'/>
                    <FamiliaMembro nome='Claudio'/>
                    <FamiliaMembro nome='Fernando'/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color='#FA6900'>
                <Aleatorio min={5} max={15} />
            </Card>

            <Card titulo="#03 - Fragmento" color='#E94C6F'>
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color='#E8B71A'>
                <ComParametro Titulo="Situação do Aluno"
                    aluno="Lucas" nota={10} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color='#588C73'>
                <Primeiro></Primeiro>
            </Card>
        </div>


    </div>
