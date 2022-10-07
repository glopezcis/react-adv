import React from 'react'
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components'

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
				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle title='hi'/>
					<ProductButtons />
				</ProductCard>

				<ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title='Coffee mug'/>
					<ProductCard.Buttons />
				</ProductCard>
			</div> 
			
		</div>
	)
}

export default ShoppingPage
