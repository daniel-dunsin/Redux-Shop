import React from 'react';
import { connect } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { REMOVE_FROM_CART, TOGGLE_QUANTITY } from '../redux/actions';


const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    remove: () => {
      dispatch({ type: REMOVE_FROM_CART, payload: { id } })
    },
    toggle: (behaviour) => {
      dispatch({ type: TOGGLE_QUANTITY, payload: { id, behaviour } })
    }
  }
}

const CartItem = ({ id, image, name, price, amount, total, remove, toggle }) => {
  return <article className=' flex justify-between items-center'>
    <div className='flex-1 flex md:flex-row flex-col md:justify-start md:items-start items-center md:text-start text-center gap-x-3 gap-y-2'>
      <div className='w-[100px] h-[100px]'>
        <img src={image} alt={name} className='w-full h-full' />
      </div>
      <div>
        <h6 className='font-bold'>{name}</h6>
        <p>${price}</p>
        <p className='text-purple-600 hover:text-purple-800 cursor-pointer' onClick={remove}>remove</p>
      </div>
    </div>
    <div className='flex-1 text-center flex justify-center items-center gap-x-3'>
      <i className='w-[30px] h-[30px] bg-gray-300 flex justify-center items-center rounded-full cursor-pointer' onClick={() => {
        toggle('inc')
      }}><FaPlus /></i>
      <p className='font-bold'>{amount}</p>
      <i className='w-[30px] h-[30px] bg-gray-300 flex justify-center items-center rounded-full cursor-pointer' onClick={() => {
        amount === 1 ? remove() : toggle('dec');
      }}><FaMinus /></i>
    </div>
    <div className='flex-[0.6] text-right font-bold'>
      <p className='pr-4'>${total}</p>
    </div>
  </article>
}

export default connect(null, mapDispatchToProps)(CartItem)