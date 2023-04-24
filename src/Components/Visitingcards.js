import React from 'react'
import Live from '../Asssets/Livebtn.png'
import './Visitingcard.css' 
import { FaFacebookMessenger,FaPhone, FaSnapchat } from 'react-icons/fa';
import { Center } from '@chakra-ui/react';
 export default function Visitingcard({img}) {
 
    return (
        <div className="main"  
            style={{ backgroundImage: `url(${img})` }}> 
           <div className='topbar'>
              <p className=" ">10+ Years </p>
              <p className=" ">Online </p>
           </div>      
           <div className="submain grid-container">
            <p className="grid-item ">4.5</p>
            <p className="heading grid-item">Astrologer Ramraj</p>
            <p className="grid-item">Specialties</p>
            <p className="grid-item">Love, Business, Life </p>
            <p className="heading grid-item">Skills</p>
            <p className="grid-item">Vedic Astrology, Kundali, </p>
           <div ClassName='live grid-item' >
            <img src={Live} />
           </div>            
             <div className="btn-grp grid-item" >
             <Center>
              <button className="btn " type="submit"><FaFacebookMessenger/>Chat</button>
              <button className="btn " type="submit"><FaPhone/>Call</button>
              </Center>
             </div>
           </div>    
         </div> 
    );
  }