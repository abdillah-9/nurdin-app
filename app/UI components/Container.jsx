"use client";
import React from 'react';

const Container = ({width, height="fit-content",boxShadow, justifyContent,alignItems="center" ,children}) => {

/* We define Css Here */
const containerStyle = {
  width: width,
  height: height,
  borderRadius: "5px",
  padding: "15px 20px",
  display:"flex",
  flexWrap: "wrap",
  boxShadow: boxShadow,
  justifyContent: justifyContent,
  alignItems:alignItems,
}

  return (
    <>
      <div style={containerStyle}> {children} </div>
    </>
  );
};


export default Container;
