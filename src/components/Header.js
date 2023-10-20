import React from 'react';
// import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
export const Header = ({searchTerm,setSearchTerm}) => {

  console.log(searchTerm);
  const handleChange = (event) =>{
    setSearchTerm(event.target.value);
  };
  return (
    <div className='Header'>
        <h2>Download High Quality Images by creators.</h2>
        <p>Over 2.4 million + stock Images by our talented community.</p>
        {/* <AiOutlineSearch/> */}
        <input type="text" value={searchTerm} onChange={handleChange} placeholder='Search high resolution images, categories, wallpapers'/>
    </div>
  )
}

export default Header;