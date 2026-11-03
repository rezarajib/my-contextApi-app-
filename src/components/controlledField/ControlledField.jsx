import React from 'react'

const ControlledField = () => {
    const handleSubmit = (e) => {
        console.log("added contropled field button")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="email" name="email" id="" placeholder='Your Email Name' required />
        <br />
        <br />


        <input type="password" name="password" id="" placeholder='Password' required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ControlledField
