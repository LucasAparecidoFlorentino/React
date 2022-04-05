import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {

    return (
        <div>
            <DiretaFilho nome="Lucas" idade={21} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Fernando" idade={13} nerd={true}></DiretaFilho>
        </div>
    )
}