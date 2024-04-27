import React, { useState } from 'react'
import Box from '../modules/box'


export const Q1 = () => {
    const template = ['if', 'for', 'if']

    const [code, setCode] = useState({
        '0': '',
        '1': '',
        '2': '',
    })

    const [result, setResult] = useState({
        '0': 'waiting',
        '1': 'waiting',
        '2': 'waiting',
    })

    const handleChange = e => {
        let a = code
        a[e.target.id] = e.target.value
        setCode(a)
    }

    const verify = () => {
        let res = {}
        let pass = true
        for (let i = 0; i < template.length; i++) {
            let answer = code[`${i}`]
            if (answer == ''){
                res[`${i}`] = 'waiting'
                pass = false;
            } else if (answer == template[i])
                res[`${i}`] = 'success'
            else {
                res[`${i}`] = 'fail'
                pass = false;
            }
        }
        setResult(res)

        return pass ? 'success' : 'fail'
    }

    return (
    <Box statement='Função que verifica se um número é primo.' verify={ verify }>
        <>
{`function primo(n) {
    `}
    <input
        id='0'
        onChange={e => handleChange(e)}
        className={`${result['0']}`}/>
    {` (n <= 1) {
        return false;
    }
    
    `}
    <input
        id='1'
        onChange={e => handleChange(e)}
        className={`${result['1']}`}/>
    {` (let i = 2; i <= Math.sqrt(n); i++) {
        `}
    <input
        id='2'
        onChange={e => handleChange(e)}
        className={`${result['2']}`}/>
    {` (n % i == 0) {
            return false;
        }
    }
    
    return true;
}`}
        </>
    </Box>
  )
}
