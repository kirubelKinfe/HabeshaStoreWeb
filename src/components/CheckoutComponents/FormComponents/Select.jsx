import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Select = ({ label, name, options, ...rest}) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field className='option-select' as='select' id={name} name={name} {...rest}>
            {
                options.map(option => {
                    return(
                        <option key={option} value={option}>{option}</option>
                    )
                })
            }
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select