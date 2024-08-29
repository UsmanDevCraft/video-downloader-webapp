import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

const Home = () => {
  return (
    <div className='container'>
      <h1 className='mt-5 pt-5'>Welcome to Videos Downloader.</h1>

      <div className="container d-flex align-items-center flex-column mt-4">
        <Link to="/youtube" className='links mt-2 fs-5'>Youtube Download <FaYoutube className='fs-4'/></Link>
        <Link to="/facebook" className='links mt-2 fs-5'>Facebook Download <FaFacebook className='fs-4'/></Link>
        <Link to="/instagram" className='links mt-2 fs-5'>Instagram Download <RiInstagramFill className='fs-4'/></Link>
        <Link to="/shorts" className='links mt-2 fs-5'>Shorts Download <SiYoutubeshorts className='fs-4'/></Link>
      </div>
    </div>
  )
}

export default Home
