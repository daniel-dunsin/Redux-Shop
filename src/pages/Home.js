import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { SEARCH_ITEMS, UPDATE_SEARCH_INPUT } from '../redux/actions'
import { ItemsList } from '../components';

const mapStateToProps = state => {
  return { searchInput: state.store.searchInput }
}

const Home = ({ searchInput, dispatch }) => {
  const formRef = useRef(null);
  useEffect(() => {
    formRef.current.focus();
  }, []);

  return <section className='w-full max-w-[1200px] mx-auto px-4 mt-8'>
    <div className='text-center'>
      <input
        type="text"
        className='px-3 py-2 border-2 rounded border-black focus:border-purple-500 focus:outline-none w-[80vw] mx-auto max-w-[500px]'
        placeholder='Search Products'
        ref={formRef}
        value={searchInput}
        onChange={(e) => {
          dispatch({ type: UPDATE_SEARCH_INPUT, payload: { text: e.currentTarget.value } })
          dispatch({ type: SEARCH_ITEMS });
        }}
      />
    </div>

    <ItemsList />
  </section>
}

export default connect(mapStateToProps)(Home)