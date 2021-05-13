import React from 'react';
import './Person.css';


const Person = (props) => {

    const { name, email, gender, phone, salary, picture, address } = props.info;
    
    {

        // console.log(props.info)
    }

    return (
        <div>

            <div className='profile-container'>

                <div className='photo-container'>
                    <img src={picture} alt="" />


                </div>
                <div className='person-container'>

                    <p> <b>Name : {name} </b>  </p>
                    <p>Email: {email}</p>
                    <p>Salary: $ {salary} </p>
                    <p>Gender: {gender}</p>
                    <p>Phone: {phone}</p>
                    <p>Address: {address}</p>
                    <button onClick={()=>(props.handleAddfriend(props.info))} >Add Me Friend</button>

                </div>


            </div>

        </div>
    );
};

export default Person;