import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CLOSE_MODAL } from '../redux/actions';
const mapStateToProps = state => {
  return { isModalOpen: state.modal.isModalOpen }
}
const Modal = ({ isModalOpen, dispatch }) => {
  return isModalOpen && <section className='fixed top-0 left-0 w-full min-h-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
    <div className='w-[90vw] max-w-[400px] mx-auto p-5 rounded-md bg-white text-center'>
      <h1 className='font-bold text-lg mb-6'>Item Added To Cart</h1>
      {/* buttons container */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-x-4 w-[100%] gap-y-2'>
        <Link to='/cart' onClick={() => dispatch({ type: CLOSE_MODAL })} className='w-full md:w-fit'>
          <button className='md:w-fit min-w-[100%] px-4 py-3 rounded-md bg-purple-600 text-white transition hover:bg-purple-800'>Go to Cart</button>
        </Link>
        <button className='md:w-fit w-[100%] px-4 py-3 rounded-md border border-purple-600 text-purple-600 transition-all hover:text-white hover:bg-purple-600' onClick={() => dispatch({ type: CLOSE_MODAL })}>Continue Shopping</button>
      </div>
    </div>
  </section>
}

export default connect(mapStateToProps)(Modal)