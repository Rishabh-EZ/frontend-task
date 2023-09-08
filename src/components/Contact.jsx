import React, { useState } from 'react'

const Contact = () => {
    const [userEmail,setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [errorColor, setErrorColor] = useState("red");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if(userEmail.length === 0) {
            setEmailError("Please enter your email address.");
            return;
        }
        const data = {
            "email": userEmail,
        }
        try {
          const response = await fetch("http://3.228.97.110:9000/api", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if(response.status===200){
            setEmailError("Form Submitted");
            setErrorColor("green");
          }else{
            setEmailError("Incorrect Email");
          }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className='error-and-contact'>
                    <form className='contact' onSubmit={onSubmitHandler}>
            <input type="email" placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}} />
            <button className='submit-button' >Contact Me</button>

        </form>
            <div className='email-error' style={{ color: errorColor }}>{emailError}</div>
        </div>
    )
}

export default Contact