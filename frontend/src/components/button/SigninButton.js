import React from 'react'

import './Button.css'
import {Link} from 'react-router-dom'
export function SigninButton(){
    return (
        <Link to='/login'>
            <button className='btn'>Sign In</button>
        </Link>
    )
}