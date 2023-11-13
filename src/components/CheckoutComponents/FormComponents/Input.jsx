import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Input = ({label, name, ...rest}) => {
  return (
    <div className='w-full flex flex-col gap-1'>
        <label htmlFor={name} className=''>{label}</label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input