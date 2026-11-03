import React from 'react'

const FormAcrtion = () => {

   const handleFormAction = (dataForm) => {
    const name = dataForm.get(name);
    const email = dataForm.get(email);
    console.log("name",name);
    console.log("email",email);

   }
  return (
    <div >
      <form className='flex flex-col items-center gap-4' action={handleFormAction}>
        <input type="text" name='name' placeholder='Your Name' />
        <input type="email" name="email" id="" placeholder='Your Email' />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FormAcrtion
