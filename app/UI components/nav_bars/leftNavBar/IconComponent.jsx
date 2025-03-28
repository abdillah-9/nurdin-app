"use client";
import React from 'react'

export default function IconComponent({children, iconStyle, actionHandler}) {
  return (
    <div style={iconStyle} onClick={actionHandler}>
        {children}      
    </div>
  )
}
