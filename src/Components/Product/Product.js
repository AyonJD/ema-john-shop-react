import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product-card'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="card-content">
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <div className="paagraph">
                    <p className='product-card-seller'>Manuacturer: {seller}</p>
                    <p>Rting: {ratings} stars</p>
                </div>
            </div>
            <div className="button">
                <button onClick={() => { props.handleAdToCart(props.product) }} className='cart-btn'><p className='btn-text'>Add to Cart</p><FontAwesomeIcon className='icon' icon={faCartPlus} /></button>
            </div>
        </div>
    );
};

export default Product;