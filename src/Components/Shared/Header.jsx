import { Avatar, Button, Dropdown, Navbar, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProver/AuthProvider';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // const {email,displayName, photoURL} = user;
    // console.log(displayName)
    // console.log(user)
    
    const location = useLocation().pathname
    // console.log(location)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    

    return (
        <div  className=' lg:px-52 lg:py-5 '>
            <Navbar
           
                
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    
                    <div className='flex'>
                        
                        <Avatar className='lg:mr-3 ' img='https://images-platform.99static.com//-G4Ae04Qll-CcNd8g4N5_3oSGrw=/665x348:1328x1011/fit-in/500x500/99designs-contests-attachments/91/91307/attachment_91307187'></Avatar>
                    <span className="self-center whitespace-nowrap lg:text-4xl  font-bold text-gray-700">
                    ActionVerse
                    </span></div>
                </Navbar.Brand>
                <div className="flex items-center gap-5 md:order-2">
                {user ? <>
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={user.photoURL ? <Tooltip content={user.displayName}><Avatar alt="User settings" img={user.photoURL} rounded={true} /></Tooltip> : <Avatar alt="User settings" img="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" rounded={true} />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    {user.displayName}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {user.email}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                <Link to={`/myToys`}>Dashboard</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Settings
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Earnings
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>
                                {
                                    user ?
                                        <Link onClick={handleLogout} to="/login">Logout</Link> :
                                        <Link to="/login">Login</Link>
                                }
                            </Dropdown.Item>
                        </Dropdown>
                       
                    </> :
                        <div className='flex gap-3'>
                            <Link className='bg-blue-600  rounded-md px-3 font-semibold text-white py-1' to="/login"><button>Login</button></Link>
                            <Link className='bg-blue-600 rounded-md px-3 font-semibold  text-white py-1' to="/register"><button>Register</button></Link>
                        </div>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link
                        active={ location === '/' ? true : false}
                        
                    >
                        <Link className='text-lg' to='/'>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link 
                    active={ location === '/AllToys' ? true : false}
                    >
                        <Link  className='text-lg' to='/AllToys'>All Toys</Link>
                    </Navbar.Link>
                    <Navbar.Link
                    active={ location === '/MyToys' ? true : false}
                    >
                    <Link className='text-lg' to='/MyToys'>My Toys</Link>
                    </Navbar.Link>
                    <Navbar.Link
                    active={ location === '/AddAToy' ? true : false}
                    >
                    <Link className='text-lg' to='/AddAToy'>Add A Toy</Link>
                    </Navbar.Link>
                    <Navbar.Link
                    active={ location === '/blog' ? true : false}
                    >
                    <Link className='text-lg' to='/blog'>Blog</Link>
                    </Navbar.Link>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;