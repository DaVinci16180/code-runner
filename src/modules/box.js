import React, { Children, useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Box = ({ children, statement, verify }) => {

    const [status, setStatus] = useState('waiting')
    const icon = {
        'waiting': 'fa-regular fa-circle waiting',
        'success': 'fa-solid fa-circle-check success',
        'fail': 'fa-solid fa-circle-xmark fail'
    }

    const assess = () => {
        setStatus(verify())
    }

  return (
    <div className='wrapper'>
        <div className='box'>
            <div className='box-header'>
                Preencha as lacunas com as palavras reservadas apropriadas.
            </div>
            <div className='box-body'>
                <p>
                    <span className='bold'>Q: </span>
                    { statement }
                </p>
                { Children.map(children, child =>
                    <code>
                        { child }
                    </code>
                )}
            </div>
            <div className='box-footer'>
                <div>
                    <i className={ `${icon[status]}` }></i>
                    { status == 'success' && <span> Tudo certo, parabéns!</span> }
                    { status == 'fail' && <span> Ops! Tente novamente.</span> }
                </div>
                <button onClick={ assess }>Submeter</button>
            </div>
        </div>
    </div>
  )
}

export default Box