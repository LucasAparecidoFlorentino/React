import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import App from './App'

const elemento = document.getElementById('root') // Estou pegando o id da div que pertence ao index.html
ReactDOM.render(
    <App />, 
    elemento) // Render serve para exibir conteúdos na tela, 
// ele recebe 2 parametros, o primeiro foi a mensagem que quero apresentar na tela, e o segundo
// é a referência a div do index.html, sem ela eu não consigo apresentar a mensagem para o usuário.