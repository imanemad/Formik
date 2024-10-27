import React from 'react';
import Input from './Input';
import SwitchForm from './SwitchForm';

const AuthFormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'checkbox':
            return <SwitchForm {...props}/>
    
        default:
            break;
    }
}

export default AuthFormikControl;
