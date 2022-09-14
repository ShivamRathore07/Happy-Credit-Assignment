import React from 'react';
 

const Modal = ({ onClose , open, alrtData }) => {  
    console.log(alrtData) 
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div className='modalContainer' >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <h3>Name : {alrtData.name}</h3>
            <h3>UserName : {alrtData.username}</h3>
            <h3>Website : {alrtData.website}</h3>
            <h3>Email : {alrtData.email}</h3>
            <h3>City : {alrtData.address.city}</h3>
            <h3>ZipCode : {alrtData.address.zipcode}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;