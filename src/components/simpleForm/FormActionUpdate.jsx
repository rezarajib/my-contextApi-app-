import React from 'react'

const FormActionUpdate = () => {

    const handleFromActionSubmited = (dataForm) => {
        const name = dataForm.get('name');
        const email = dataForm.get('email');
        console.log("name", name);
        console.log("email", email); ``
    }
    return (
        <form className='flex flex-col items-center gap-4' action={handleFromActionSubmited}>

            <input type="text" name='name' placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Your Email' />

            <br />

            <input type="submit" value="Submit" />
            <br />


        </form>
    )
}

export default FormActionUpdate
