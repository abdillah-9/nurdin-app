"use client";
import React from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

const Overlay = () => {

  const overlay = useSelector((store)=> store.overlay.overlay);

  if(overlay == false){
    return <></>
  }

  return createPortal(
      <main style={overlayStyle}></main>,
      document.body
  );
};

//Css 
const overlayStyle ={
  position: "fixed",
  width: "100vw",
  height: "100vh",
  left: 0,
  top: 0,
  backdropFilter: "blur(3px)",
}

export default Overlay;
