import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components'
import '../styles/custom-styles.css'

const ShoppingPage = () => {

  const product = {
    id: 'A001',
    title: 'Coffee mug - grande',
    img: './coffee-mug.png'
  }

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title='Coffee mug' className='text-bold'/>
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard 
          product={product}
          className='bg-dark text-white'
        >
          <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard 
          product={product}
          style={{backgroundColor: '#70D1F8'}}
        >
          <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle style={{ fontWeight: 'bold' }} 
          />
          <ProductButtons 
            style={{ 
              display: 'flex',
              justifyContent: 'end'
            }} 
          />
        </ProductCard>
      </div> 
      
    </div>
  )
}

export default ShoppingPage
