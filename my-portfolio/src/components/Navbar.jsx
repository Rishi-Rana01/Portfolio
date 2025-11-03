import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const NavbarLinks = [
        { id: 1, name: 'Home', link: '#home' },
        { id: 2, name: 'About', link: '#about' },
        { id: 3, name: 'Skills', link: '#skills' },
        { id: 4, name: 'Projects', link: '#projects' },
    ];

    return (
        <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos='fade-up' data-aos-delay='300'>
            <div className='container mx-auto flex items-center justify-between p-5'>
                {/* {Logo} */}
                <a href="#home" className='text-4xl font-bold italic text-white'>Portfolio</a>

                {/* {Mobile Menu Toggle} */}
                <button
                    type='button'
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className='md:hidden focus:outline-none z-40 p-1 bg-transparent rounded'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX className='w-8 h-8 text-white' /> : <FiMenu className='w-8 h-8 text-white' />}
                </button>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center space-x-7'>
                    {NavbarLinks.map((link) => (
                        <a 
                            key={link.id} 
                            href={link.link} 
                            className='relative text-lg group transition-all duration-300 ease-in-out'
                        >
                            <span className='relative inline-block transition-all duration-300 ease-in-out hover:text-purple-400'>
                                {link.name}
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 ease-out group-hover:w-full'></span>
                            </span>
                        </a>
                    ))}
                    <button className='inline-flex text-white border-2 border-purple-500 py-2 px-6 focus:outline-none hover:bg-purple-600 hover:border-purple-600 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] active:scale-95'>
                        Contact
                    </button>
                </nav>

            </div>

            {/* Mobile Navigation */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#801b93] fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-20 z-40`}>
                {/* Mobile Navigation */}
                {NavbarLinks.map((link) => (
                    <a 
                        key={link.id} 
                        href={link.link} 
                        className='text-lg text-white relative group transition-all duration-300 ease-in-out' 
                        onClick={() => setIsOpen(false)}
                    >
                        <span className='relative inline-block transition-all duration-300 ease-in-out hover:text-purple-400'>
                            {link.name}
                            <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 ease-out group-hover:w-full'></span>
                        </span>
                    </a>
                ))}
                <button className='text-lg text-white border-2 border-purple-500 py-2 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600 hover:border-purple-600 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] active:scale-95'>
                    Contact
                </button>
            </div>


        </header>
    )
}

export default Navbar
