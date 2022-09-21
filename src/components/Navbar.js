import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa';
import { GET_TOTALS } from '../redux/actions';
const mapStateToProps = state => {
  return { amount: state.store.cartAmount, cart: state.store.cart };
}

const Navbar = ({ amount, cart = [], dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS })
  }, [cart, dispatch])
  return (
    <nav className='w-full max-w-[1200px] mx-auto px-4 py-6 flex justify-between items-center'>
      <div>
        <Link to='/' className='md:text-3xl text-2xl font-bold text-purple-600'>Redux Store</Link>
      </div>
      <div>
        <Link to='/cart'>
          <button className='flex gap-x-1 items-center bg-purple-600 text-white px-5 py-2 rounded font-bold transition hover:bg-purple-700'>
            Cart <span className='flex relative items-center justify-center text-black'><FaShoppingBag /> <p className='absolute -top-[8px] -right-[4px] font-bold text-white'>{amount}</p></span>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default connect(mapStateToProps)(Navbar)