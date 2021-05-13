import React, { useState } from 'react';
import './Users.css';
import Person from '../Person/Person';
import fakeData from '../../fakeData/fakeuser';
import Salery from '../Salary/Salery';

const Users = () => {


    const [user, setUser] = useState(fakeData);

    const handleAddfriend = (info)=> {

       
        console.log('Friend added', info);
        const newcart = [...cart, info]
        setCart(newcart)

    }
    
    const [cart, setCart] = useState([]);


   
    return (
        <div className="book-container">
            <div className='user-container'>
                
        

             {
             user.map(info=> <Person handleAddfriend={handleAddfriend} info={info} key={info.id} ></Person>)
             }

                
                </div>
                <div className='cart-container'>

                <Salery cart={cart}></Salery>

            </div>
        </div>
    );
};

export default Users;