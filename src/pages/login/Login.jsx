import React from 'react';
import { 
    useLoaderData, 
    redirect, 
    Form, 
    useActionData,
    useNavigation,
} from 'react-router-dom';
import { loginUser } from '../../api';
import './Login.css';

export const loader = async ( {request} ) => {
    const url = new URL(request.url).searchParams.get('message');
    return url;
}

export const action = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const path = new URL(request.url).searchParams.get('redirectTo') || '/host';
    try {
        const data = await loginUser({ email, password });
        localStorage.setItem('loggedin', true);

        const res = redirect(path);
        res.body = true;
        return res;

    } catch (err) {
        console.log(err.message);
        
        return err.message;
    }
}

const Login = () => {
    // grab the message from loader
    const message = useLoaderData();
    // get the error message when failed to log in
    const errorMessage = useActionData()
    // get status of the page
    const status = useNavigation();
    

  return (
    <section className='login-container'>
        <h2>Sign in to your account</h2>
        {message && ( <h3 className='red'>{message}</h3> )}
        {errorMessage && ( <h3 className='red'>{errorMessage}</h3> )}
        <Form className="login-form" method='post' replace>
            <input 
             type="email" 
             name='email' 
             placeholder='Email address'
            />

            <input 
             type="password" 
             name='password' 
             placeholder='password'
            />
            <button disabled={status.state === 'submitting'}>
                {status.state === 'submitting'
                    ? 'logging in...'
                    : 'login'}
            </button>
        </Form>
    </section>
  )
}

export default Login
