import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
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
        <div  className='lg:px-52 lg:py-5 '>
            <Navbar
                
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">

                    <span className="self-center whitespace-nowrap lg:text-4xl  font-bold text-gray-700">
                        Shaolin Recipes
                    </span>
                </Navbar.Brand>
                <div className="flex items-center gap-5 md:order-2">
                    {user && <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                        <Avatar alt="User settings" img={user.photoURL ? user?.photoURL : 'https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black-thumbnail.png'} rounded={true} />
                    }
                    >
                        <Dropdown.Header>
                            <span className="block font-semibold text-sm">
                                {user.displayName}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user.email}
                            </span>
                        </Dropdown.Header>
                        
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            <Link to='/login'><Button onClick={handleLogout}>Sign Out</Button></Link>
                        </Dropdown.Item>
                    </Dropdown>}

                    {!user && <div className='flex gap-4'>
                        <Link to='/login'><Button>Login</Button></Link>
                        
                    </div>}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link
                        active={ location === '/' ? true : false}
                        
                    >
                        <Link className='text-lg' to='/'>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link 
                    active={ location === '/blogs' ? true : false}
                    >
                        <Link  className='text-lg' to='/blogs'>Blogs</Link>
                    </Navbar.Link>
                    <Navbar.Link
                    active={ location === '/about' ? true : false}
                    >
                    <Link className='text-lg' to='/about'>About</Link>
                    </Navbar.Link>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;