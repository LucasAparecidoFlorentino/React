import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className='Cards'>
            <Card titulo="#13 - Desafio MegaSena" color="#B9006E">
                <Mega></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai/>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#B6FF00">
                <ParOuImpar numero={23}></ParOuImpar>
                <UsuarioInfo usuario={{ nome:'Lucas' }}></UsuarioInfo>
            </Card>

            <Card titulo="#07 - Tabela Produtos" color="#0CB865">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#000364">
                <ListaAlunos></ListaAlunos> 
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#FF0093">
                <Familia sobrenome="Aparecido">
                    <FamiliaMembro nome="Lucas" />
                    <FamiliaMembro nome="Claudio" />
                    <FamiliaMembro nome="Fernando" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio minimo={1} maximo={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#61FF00">
                <Fragmento />
            </Card>

            <Card titulo="#02 - ComParamentro" color="#00FFCD">
                <ComParametro Titulo="Situação do Aluno"
                    aluno="Lucas" nota={9.3}></ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro" color="#B200FF">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>