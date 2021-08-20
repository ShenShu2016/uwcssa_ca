import React from 'react'

import './Button.css'
import {Link} from 'react-router-dom'
export function LoginButton(){
    return (
        <Link to='/login'>
            <button className='btn'>Login</button>
        </Link>
    )
}