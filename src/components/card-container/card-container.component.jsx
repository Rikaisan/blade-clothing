import React from 'react';
import ProductCard from '../product-card/product-card.component';
import './card-container.styles.scss';

export default function CardContainer({ cards }) {
	return (
		<div className='card-container'>
			{cards.map((card) => (
				<ProductCard title={card.title} subtitle={card.subtitle} />
			))}
		</div>
	);
}
