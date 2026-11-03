import React from 'react'
import { useState } from 'react'

const ControlledField = () => {

const [password,setPassword] = useState('secret')
const [error,setError] = useState('')
const [email,setEmail] = useState('')


    const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('form submitted');
    if(password.length < 6){
      setError ('Password must be at least 6 characters long');
    }
    else {
      setError('');
    }
  }

  const handlePasswordOnChange = e => {
    console.log(e.target.value);
    setPassword(e.target.value);

    // if(password.length < 6){
    //   setError ('Password must be at least 6 characters long ');
    // } else {
    //   setError('');
    // }

    
  }

  const handleEmailOnChange = e => {
    console.log(e.target.value);
  }

  return (

    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email"  placeholder='Your Email Name' onChange={handleEmailOnChange} defaultValue={email} required />
        <br />
        <br />

        <input type="password" name="password"  placeholder='Password' onChange={handlePasswordOnChange} defaultValue={password} equired />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small style = {{color:'red'}}>
          {error}
        </small>
      </p>
    </div>
  )
}


export default ControlledField
