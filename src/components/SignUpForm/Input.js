import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'
const Input = (props) => {
    const { control, label, name, ...rest } = props
    return (
        <div className="App-form-control">
            <div className="fillForm">
                <label htmlFor={name}>{label}</label>
                <Field
                    name={name}
                    id={name}
                    {...rest} />
            </div>
            <div className="">
                <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default Input
