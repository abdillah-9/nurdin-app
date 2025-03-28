"use client";
import FormContainer from '@app/UI components/Form/FormContainer'
import Logo from '@app/UI components/Logo';
import React from 'react'
import Image from 'next/image';
import { useLogin } from '../hooks/useLogin';
import toast from '@node_modules/react-hot-toast/dist';

export default function SignUpModelForm() {

    // //const {login, isLoading, status:authStatus} = useLogin(); //import login mutation

    // //Define formSubmit
    // const formSubmit=(data)=>{ 
    //     console.log("Submitted data from sign up form "+data.email+" "+data.password);
    //     login({...data})              
    // }
    // //Define onError
    // const onError=(errors)=>{
    //     console.log(errors);
    //     toast.error(
    //         errors?.email?.message? errors.taskSite.message :
    //         errors?.password?.message? errors.taskSite.message :""
    //     )
            
    // }

  return (
    <FormContainer formContainer={formContainer} formSubmit={formSubmit} onError={onError}>
        <Logo>    
            <Image             
                src="assets/images/logo.svg" 
                alt="Logos"
                width={70}
                height={70}
            />
        </Logo>

        <FormContainer.Header formHeader={formHeader}>
            Create new account
        </FormContainer.Header>
        
        <FormContainer.Body formBody={formBody}>
            <FormContainer.Row formRow={formRow}>
                <FormContainer.Label labelStyle={labelStyle}>Email address</FormContainer.Label>
                <FormContainer.Text fieldName='email'  type={"email"}
                inputStyle={inputStyle} />
            </FormContainer.Row>

            <FormContainer.Row formRow={formRow}>
                <FormContainer.Label>Password</FormContainer.Label>
                <FormContainer.Text fieldName='password'  type={"password"}
                inputStyle={inputStyle} />
            </FormContainer.Row>

            <FormContainer.SubmitRow submitRow={submitRow}>
                <FormContainer.Submit submitButton={submitButton}>
                    SignUp
                </FormContainer.Submit>
            </FormContainer.SubmitRow>
        </FormContainer.Body>
    </FormContainer>
  )
}

// ********************* COMPONENTS CSS STYLING ****************************//
let padding = "5px 15px";

const formContainer ={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    gap:"20px",
    position:"fixed",
    top:0,
    left:0,
    width:"100vw",
    height:"100vh",
    backgroundColor:"rgb(245,245,245)"
}
const formBody ={
    backgroundColor: "white",
    fontSize: "14px",
    borderRadius: "5px",
    width:"fit-content",
    minWidth:"250px",
    padding:"7px 20px",
    boxShadow:" 5px 5px 30px rgba(2, 10, 56, 0.92)",
    display:"flex",
    flexDirection:"column",
}
const formHeader={
    fontWeight:"600",
    fontSize:"20px",
}
const formRow={
    display: "flex",
    flexDirection: "column",
    padding: "15px 5px",
  }
  const submitRow={
    display: "flex",
    flexDirection: "column",
    padding: "5px", 
  }
  const inputStyle={
    border:"1.5px solid rgba(220,220,240,0.9)",
    padding: "2px",
    borderRadius: "5px",
    width: "230px",
  }
  const labelStyle={
    width: "100px",
    padding: "2px 0px",
    color: "rgb(10, 10, 24)",
  }

const submitButton={
    backgroundColor:"rgb(14, 165, 233)",
    color:"white",
    padding: "5px",
    borderRadius: "5px",
    width: "230px",
    
}

const emailValidation = (values)=>{
    // Check if the value is empty or contains only spaces
    if (!values || values.trim() === "") {
      return "site name is required";
    }
  
    // Regular expression to check for consecutive spaces
    const consecutiveSpacesRegex = /\s{2,}/;
  
    // Check if the value contains consecutive spaces
    if (consecutiveSpacesRegex.test(values)) {
      return "site name cannot contain consecutive spaces";
    }
  
    // Regular expression to allow only letters, numbers, spaces, and underscores
    const nameRegex = /^[A-Za-z0-9_ ]+$/;
  
    // Check if the value matches the allowed pattern
    if (!nameRegex.test(values)) {
      return "site name can only contain letters, numbers, spaces, and underscores";
    }
    return true; // Return true if validation passes
  }

