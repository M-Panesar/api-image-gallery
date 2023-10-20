import React, { useState} from 'react';
// import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

const Navbar = ({searchTerm,setSearchTerm}) => {

    console.log(searchTerm);
    const toggleMode = (e)=>{
        if(e.target.checked){
            document.documentElement.setAttribute("toggle-theme","dark");
        }else{
            document.documentElement.setAttribute("toggle-theme","white");
        }
    };

    const handleChange = (event) =>{
        setSearchTerm(event.target.value);
    };
    return (
        <div className='Navbar'>
            <div className='logo'>
                <h2>Image Gallery</h2>
            </div>
            <div className='SearchBar'>
                {/* <AiOutlineSearch /> */}
                <input type="text" value={searchTerm} onChange={handleChange} placeholder='Search images here'/>
            </div>
            <div className='links'>
                <p>Explore</p>
                <p>Collection</p>
                <p>Community</p>
            </div>
            <div className='toggleButton'>
                <p>Dark Mode</p>
                <div className='checkbox'>
                    <input onClick={toggleMode} type="checkbox"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;