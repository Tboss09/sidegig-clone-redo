import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'


const FormikContainer = ({ letUserLogin, setUserDashBoardDetails }) => {
    // This is the boilerplate that would be used later on to validate the Form 
    const initialValues = {
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        isLoggedIn: "true",
        confirmPassword: ''

    }
    // This is the boilerplate that would be used later on to validate the Form 

    // Sends User information to the server if set To Positive
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    // Sends User information to the server if set To Positive
    const [userInfo, setUserInfo] = React.useState(initialValues);
    // Sends User information to the server

    // This is what validates what the user types
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Address").required('Required'),
        username: Yup.string().min(3, "Name Is Too Short").max(12, "name Should be from 3-12 characters").required('Required'),
        firstName: Yup.string().min(3, "Name Is Too Short").max(12, "name Should be from 3-12 characters").required('First Name is Required'),
        lastName: Yup.string().min(3, "Name Is Too Short").max(12, "name Should be from 3-12 characters").required('Last Name is Required'),
        password: Yup.string().min(6, "Password is Too Short").max(12, "Password must be from 6 to 12 characters").required("Password Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password Must Match').required("Required"),
    })

    // This is what validates what the user types
    const onSubmit = values => {
        letUserLogin(true)
        setIsLoggedIn(!isLoggedIn)
        setUserInfo(values)
        setUserDashBoardDetails(values)
    };
    React.useEffect(() => {
        const fetchData = async () => {
            if (isLoggedIn) {
                fetch('https://my-json-server.typicode.com/tboss09/mcttYouthData/users', {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(userInfo)
                }).then(
                    () => {
                        console.log("userInformation", userInfo);
                    })
            }

        }
        fetchData()

    }, [userInfo])



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => (
                    <Form className='App-form'>
                        <FormikControl control='input' name='firstName' type='text' label='FirstName' />

                        <FormikControl control='input' name='lastName' type='text' label='Last Name' />
                        <FormikControl control='input' name='username' type='text' label='Username' />

                        <FormikControl control='input' name='email' type='email' label='Email Address' />


                        <FormikControl control='input' name='password' type='password' label='Password' />

                        <FormikControl control='input' name='confirmPassword' type='password' label='Confirm Password' />
                        <div className="button">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>)
            }

        </ Formik>
    )
}

export default FormikContainer
