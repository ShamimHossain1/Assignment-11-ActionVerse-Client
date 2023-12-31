import React, { useContext, useState } from 'react';
import { Button, Card, Checkbox, Label, Spinner, TextInput, Toast } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../AuthProver/AuthProvider';
import useTitle from '../Hook/UseTitle';


const Register = () => {
    const [error, setError] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [accepted, setAccepted] = useState(false);
    const { createUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    useTitle('ActionVerse | Register')
    const handleSignUp = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
       
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.photo.value;
        if (password !== confirm) {
            setError('Password not matched')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters long')
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                toast("Registration Completed");
                updateUserData(result.user, name, photo)
                setErrorEmail('')
                navigate(from, { replace: true })
                
            })
            .catch(error => {
                console.log(error.message)
                if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                    setErrorEmail('Email already in use')
                }

            })
        setError('')
        // console.log(password)

    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
            console.log('updated')
        })
        .catch(error =>{
            setError(error.message);
        })
    }
    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <div className='lg:w-1/4 mx-auto mt-14'>
            <ToastContainer />

            <h2 className='text-5xl font-bold text-center mb-10'>Please Sign Up</h2>
            <Card>
                <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            name='name'
                            type="text"
                            placeholder=""
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Your Photo"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="text"
                        name='photo'
                        placeholder="Photo Url"
                        required={true}
                        shadow={true}
                    />
                </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            name='email'
                            id="email2"
                            type="email"
                            placeholder="name@mail.com"
                            required={true}
                            shadow={true}
                        /><p className='text-red-600 text-sm'>{errorEmail}</p>

                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password2"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            name='password'
                            id="password2"
                            type="password"
                            required={true}
                            shadow={true}
                        /><p className='text-red-600 text-sm'>{error}</p>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="repeat-password"
                                value="Repeat password"
                            />
                        </div>
                        <TextInput
                            name='confirm'
                            id="repeat-password"
                            type="password"
                            required={true}
                            shadow={true}
                        /><p className='text-red-600 text-sm'>{error}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox
                         onClick={handleAccepted}
                        id="agree" />
                        <Label htmlFor="agree">
                            I agree with the
                            <a
                                href="/forms"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </a>
                        </Label>
                    </div>
                    <Button disabled={!accepted} type="submit">
                        Register new account
                    </Button>
                </form>
                <p className='text-center'>Already have account? <Link className='text-blue-600' to='/login'>Login Now!</Link></p>
            </Card>

        </div>
    );
};

export default Register;