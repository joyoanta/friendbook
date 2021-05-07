import React, { useState } from 'react';
import './Users.css';
import Person from '../Person/Person';
import fakedata from '../../fakeData/user';

const Users = () => {

    const [user, setUser] = useState(fakedata)

{

    console.log(fakedata);
}
   
    return (
        <div className="book-container">
            <div className='user-container'>
                
                
             {

             user.map(info=> <Person user={info}></Person>)
             }

               


                
                </div>
            <div className='cart-container'>This is Salery part</div>
        </div>
    );
};

export default Users;