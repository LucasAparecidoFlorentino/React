import React from 'react'
import './Contador.css'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incremento = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setIncrementar={this.incremento} setDecrementar={this.decremento} />
            </div>
        )
    }
}