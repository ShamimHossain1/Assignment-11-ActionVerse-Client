import { Footer } from 'flowbite-react';
import { FaFacebook, FaInstagram, FaTwitter, FaDribbble, FaGithub } from 'react-icons/fa';
import React from 'react';

const Foooter = () => {
    return (
        <div className='mt-10'>
            <Footer container={true}>
                <div className="w-full px-10">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                        <span className="self-center whitespace-nowrap lg:text-4xl text-xl  font-bold dark:text-white">
                    Shaolin Recipes
                    </span>
                        </div>
                        <div className="grid mt-5 grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Recipes
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Chefs
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
                            by="Shaolin Recipes"
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