import React from 'react';
import './product-card.styles.scss';

export default function ProductCard({ title, subtitle }) {
	return (
		<div className='product-card'>
			<div className='info-holder'>
				<h3 className='product-title'>{title}</h3>
				<p className='product-subtitle'>{subtitle}</p>
			</div>
		</div>
	);
}
