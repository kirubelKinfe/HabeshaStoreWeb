import React from 'react'
import Input from './Input'
import Select from './Select'

export default function FormControl({ control, ...rest }) {
    switch(control) {
        case 'input': return <Input {...rest} />
        case 'textarea':
        case 'select': return <Select {...rest} />
        case 'radio':
        case 'checkbox':
        case 'date':
        default: return null
    }
}
