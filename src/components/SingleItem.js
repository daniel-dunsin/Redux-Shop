import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { ADD_TO_CART, OPEN_MODAL } from '../redux/actions'
const mapStateToProps = state => {
  return { cart: state.store.cart }
}


const SingleItem = ({ id, name, image, cart, dispatch }) => {
  const inCart = cart.find(item => item.id === id);


  return <article className='col-span-1 w-full max-w-[352px] mx-auto hover:shadow-md'>
    <div className=''>
      <img src={image} className='w-full' />
    </div>
    <div className='w-full p-2 bg-white flex flex-col md:flex-row justify-center md:justify-between md:gap-0 gap-4 items-center'>
      <p className=''>{name}</p>
      <button className={`bg-purple-700 text-white py-2 px-4 rounded-md transition md:w-fit w-[90%] text-center ${
        inCart ? 'bg-opacity-80 text-black' : 'hover:bg-purple-800'
      }`} onClick={() => {
        if (!inCart) {
          dispatch({ type: ADD_TO_CART, payload: { id } });
          dispatch({ type: OPEN_MODAL });
        }
      }}>{
          !inCart ? <span className='flex gap-x-3 items-center justify-center'> Add <FaShoppingCart /></span> : 'In cart'
        }</button>
    </div>
  </article>
};


export default connect(mapStateToProps)(SingleItem)