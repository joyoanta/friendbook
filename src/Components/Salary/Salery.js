import React from 'react';
import './Salery.css';
import Users from '../Users/Users';


const Salery = (props) => {
    const cart = props.cart;

    {

        console.log(cart)
    }

    const total = cart.reduce((total, info) => total + info.salary , 0);


    const formateNumber = num => {

        const precision = num.toFixed(2);
        return Number(precision);
    }

   
    return (
        <div>
            <h3 className='cart-section'>My Friends Zone</h3> 

           <div className='friend-container'>
           
            <p>Selected Friends : {cart.length}</p>
            <p>Total Amount of Salary : {total}</p>
            <button className='review-button'>Reviwe Friends</button>

           </div>
            
            
            
        </div>
    );
};

export default Salery;