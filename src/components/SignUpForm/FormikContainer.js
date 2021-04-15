import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'


const FormikContainer = ({

}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    // Sends User information to the server
    // Sends User information to the server


    const initialValues = {
        email: '',
        username: '',
        password: '',
        isLoggedIn: "true",
        confirmPassword: ''
    }
    const [userInfo, setUserInfo] = React.useState(initialValues);


    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Address").required('Required'),
        username: Yup.string().min(3, "Name Is Too Short").max(12, "name Should be from 3-12 characters").required('Required'),
        password: Yup.string().min(6, "Password is Too Short").max(12, "Password must be from 6 to 12 characters").required("Password Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password Must Match').required("Required"),

    })


    const onSubmit = values => {
        setIsLoggedIn(!isLoggedIn)
        setUserInfo(values)
    };

    const fetchData = async () => {
        if (isLoggedIn) {
            fetch('http://localhost:4000/users', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(userInfo)
            }).then(
                () => {
                    console.log("userInformation", userInfo);
                })
        }

    }

    React.useEffect(() => {
        fetchData()
        return;
    }, [userInfo])

    //  This turns to true when the form has been submitted successfully,
    // Which Sends a post Request TO Json Server


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => (
                    <Form className='App-form'>

                        <FormikControl control='input' name='username' type='text' label='Username' />

                        <FormikControl control='input' name='email' type='email' label='Email Address' />


                        <FormikControl control='input' name='password' type='password' label='Password' />

                        <FormikControl control='input' name='confirmPassword' type='password' label='Confirm Password' />

                        <div className="login">
                            <p>Already</p>
                        </div>

                        <button type="submit">Submit</button>
                    </Form>)
            }

        </ Formik>
    )
}

export default FormikContainer
