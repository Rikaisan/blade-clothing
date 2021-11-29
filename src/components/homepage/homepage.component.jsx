import React from 'react';
import { ProductCard } from '../product-card/product-card.component';
import './homepage.styles.scss';

export const HomePage = () => {
	return (
		<div className='homepage'>
			<div className='card-container'>
				<ProductCard title='HATS' subtitle='Many hats' />
				<ProductCard title='SHOES' subtitle='Many shoes' />
				<ProductCard title='SHIRTS' subtitle='Many shirts' />
				<ProductCard title='PANTS' subtitle='Many pants' />
				<ProductCard title='SOCKS' subtitle='Many socks' />
			</div>
		</div>
	);
};
