import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

// Realiza a renderização na tela
ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro Titulo="Situação do Aluno"
            aluno="Lucas" nota={10} />
    </div>,
    // Apresenta as informações contidas aqui no index
    document.getElementById('root')
)