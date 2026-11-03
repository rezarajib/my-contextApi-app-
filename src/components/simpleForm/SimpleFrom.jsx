import React, { useState } from 'react'

const SimpleFrom = () => {

    
    // const [formData, setFormdata] = useState({
    //     name: '',
    //     email: '',
    // });

    // const handleChnage = (e) => {
    //     const { name, value } = e.target;
    //     setFormdata({
    //         ...formData, 
    //           [name]: value


    //     });




    // }

    // const hanleEmailChange = (e) =>{
    //     setEmail(e.target.value);



    // }

    // const handleSubmit = (e) => {

    //     e.preventDefault();
    //     console.log(e.target.name.value);
    //     console.log(e.target.email.value);
    //     // console.log("submited name ", formData.name);
    //     // console.log("sunmited email ", formData.email);

    // }

      
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(e.target);
    }
  

    return (
        <div>

            <h1 className='text-center text-6xl text-black-100'>Form</h1>
            <br />
            <br />

            <form className='flex gap-7' onSubmit={handleSubmit}>

                <input type="text" name='name' placeholder='YOUR Name'
                    
                     className='pt-2 rounded-2xl' />


                <input type="email" name="email" id="" placeholder='Your Email'  className='pt-2 rounded-3xl' />
                <br />
                <br />



                <button className='bg-green-300'>
                    <input type="submit" value="submit" />
                </button>
            </form>
        </div>
    )
}

export default SimpleFrom
