import { Avatar, Footer } from 'flowbite-react';
import { FaFacebook, FaInstagram, FaTwitter, FaDribbble, FaGithub } from 'react-icons/fa';
import React from 'react';

const Foooter = () => {
    return (
        <div className='mt-10'>
            <Footer container={true}>
                <div className="w-full px-10">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className='flex'>
                        
                        <Avatar className='lg:mr-3 ' img='https://images-platform.99static.com//-G4Ae04Qll-CcNd8g4N5_3oSGrw=/665x348:1328x1011/fit-in/500x500/99designs-contests-attachments/91/91307/attachment_91307187'></Avatar>
                    <span className="self-center whitespace-nowrap lg:text-4xl  font-bold text-gray-700">
                    ActionVerse
                    </span></div>
                        <div className="grid mt-5 grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        DC
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Marvel
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="ActionVerse
                            "
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="#"
                                icon={FaFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaGithub}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaDribbble}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Foooter;