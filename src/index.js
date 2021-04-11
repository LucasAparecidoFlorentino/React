import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'

// Realiza a renderização na tela
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    // Apresenta as informações contidas aqui no index
    document.getElementById('root')
)