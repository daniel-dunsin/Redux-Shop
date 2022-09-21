import React from 'react'
import { connect } from 'react-redux';
import SingleItem from './SingleItem';

const mapStateToProps = state => {
  return { items: state.store.items };
}

const ItemsList = ({ items = [] }) => {
  if (items.length === 0) {
    return <h1 className='mt-24 text-gray-900 text-center text-2xl'>No product found</h1>
  }
  return <section className='my-[100px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-center '>
    {
      items.map((item) => {
        return <SingleItem key={item.id} {...item} />
      })
    }
  </section>
}

export default connect(mapStateToProps)(ItemsList)