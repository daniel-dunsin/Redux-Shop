import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { CartItem } from '../components';
import { GET_TOTALS } from '../redux/actions';

const mapStateToProps = state => ({ cart: state.store.cart, total: state.store.cartTotal })


const Cart = ({ cart = [], total, dispatch }) => {

  if(cart.length === 0){
    return <h1 className='text-5xl mt-24 text-gray-800 text-center'>No item in cart</h1>
  }


  return <section className='max-w-[1200px] mx-auto mt-16 px-4'>
    <div className='flex w-full justify-between items-center py-1 bg-purple-600 text-white px-4'>
      <p className='flex-1 font-bold'>PRODUCT</p>
      <p className='flex-1 text-center font-bold'>QUANTITY</p>
      <p className='flex-[0.6] font-bold text-right'>TOTAL</p>
    </div>
    <div className='flex flex-col mt-3 gap-y-4'>
      {
        cart.map(cartItem => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))
      }
    </div>
    <p className='mt-4 border-t border-t-1 border-t-black text-right pr-4 pt-2'>Total: <span className="font-bold">${total}</span></p>
  </section>
}

export default connect(mapStateToProps)(Cart)