import React from 'react'

const types = {
    big: 'big',
    medium: 'medium',
    small: 'small',
    main: 'main'
}

const CustomText = (props) => {
    const { type, className, text, mainTextClasses, mainText } = props

    switch (type) {
        case types.big:
            return <h2 className={className || 'fw-bold'}>{text || 'Titulo grande'}</h2>
        case types.medium:
            return <h3 className={className || 'fw-bold'}>{text || 'Titulo medium'}</h3>
        case types.small:
            return <h6 className={className || 'fw-bold'}>{text || 'Titulo chico'}</h6>
        case types.main:
            return <h1 className={className || 'my-5 text-center'}>
                        {text || 'Seguimiento de Pacientes'} 
                        <span className={mainTextClasses || 'text-violet mx-2'}>{mainText || 'Veterinaria'}</span>
                    </h1>

        default:
            return <p className={className || 'fw-bold'}>{text || 'Descripción'}</p>
    }

}

export default CustomText