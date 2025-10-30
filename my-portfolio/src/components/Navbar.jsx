import React, {useState} from 'react'
import {FiMenu, Fix} from 'react-icons/fi'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const NavbarLinks = [
        {id:1, name:'Home', link:'#home'},
        {id:2, name:'About', link:'#about'},
        {id:3, name:'Skills', link:'#skills'},
        {id:4, name:'Projects', link:'#projects'}
    ];

  return (
    <header className='fixed top-0 left-0 w-full z-20 text-white' data-aos='fade-up' data-aos-delay='300'>
        <div className='container mx-auto flex items-centre justify-between p-5'>
            {/* {Logo} */}
            <a href="#home" className='text-4xl'></a>

        </div>

    </header>
  )
}

export default Navbar
