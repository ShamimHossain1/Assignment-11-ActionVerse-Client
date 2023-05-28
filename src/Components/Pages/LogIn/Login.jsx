import { Button, Card, Checkbox, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaCross, FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProver/AuthProvider';


const Login = () => {

  

    const { signIn, resetPassword, signInWithGitHub, signInWithGoogle, loading, } = useContext(AuthContext);
    const [error, setError] = useState('')
    // const [user, setUser] =useState('')
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(from)
    const emailRef = useRef();
    // console.log(emailRef)

   

    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user    
                console.log(loggedUser)                     
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setError('Wrong Password!')
            })

    }

    const forgotPassword = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        // console.log(email);
        if (!email) {
            alert('Provide valid email address to rest')
            return;
        }
        resetPassword(email)
            .then(() => {
                alert('please check your email inbox')
            })
            .catch(error => {
                setError(error.message)
            })




    }

    const handleGoogle =()=>[
        signInWithGoogle()
        .then(result=>{
          const loggedUser = result.user
        //   console.log(loggedUser)
          navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error)
          })
       ]
    const handleGitHub =()=>[
        signInWithGitHub()
        .then(result=>{
          const loggedUser = result.user
        //   console.log(loggedUser)
          navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error)
          })
       ]
    return (
        <div className="max-w-sm mx-auto">
            <h2 className='text-5xl font-bold text-center mb-10'>Please Login</h2>
            <Card>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            ref={emailRef}
                            className=' '
                            name='email'
                            id="email1"
                            type="email"
                            placeholder="name@mail.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <div className=''><TextInput

                            name='password'
                            id="password1"
                            placeholder="password"
                            type={show ? 'text' : 'password'}
                            required={true}
                        />
                            <button className=' text-2xl relative left-72 ml-4 -top-8' onClick={(event) => {event.preventDefault(); setShow(!show)}}><small>
                                {
                                    show ? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>  
                                }</small></button>

                        </div>
                        <p className='relative -top-7 text-red-500 text-sm'>{error}</p>
                    </div>
                    <div className="flex items-center gap-2">
                       
                        <Link onClick={forgotPassword} className='ml-auto text-blue-600'>Forget Password?</Link>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <p className='text-center'>New to Ema Jhon? <Link className='text-blue-600' to='/register'>Register Now!</Link></p>
                {/* {
                    user && <Navigate to='/'/>
                } */}
            </Card>

            <button onClick={handleGoogle}  className='bg-white text-blue-600 gap-2 my-4 text-lg w font-semibold w-full flex items-center justify-center border border-blue-600 rounded-lg py-3 '>
                    <FaGoogle></FaGoogle>   Login With Google
                </button>
            <button onClick={handleGitHub}  className='bg-white text-blue-600 gap-2 my-4 text-lg w font-semibold w-full flex items-center justify-center border border-blue-600 rounded-lg py-3 '>
                    <FaGithub></FaGithub>   Login With GitHub
                </button>


        </div>

    );
};

export default Login;