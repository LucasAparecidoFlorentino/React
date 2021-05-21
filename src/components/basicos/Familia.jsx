import React, { cloneElement } from 'react'

// Map serve para mapear um Array em outro Array

export default props => {

    return(
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, {...props, key: i})
                })
            }
        </div>
    )
}