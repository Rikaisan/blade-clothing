import React from 'react';
import './homepage.styles.scss';
import CardContainer from '../card-container/card-container.component';

const homepageCards = [
	{ title: 'HATS', subtitle: 'Many hats' },
	{ title: 'SHOES', subtitle: 'Many shoes' },
	{ title: 'SHIRTS', subtitle: 'Many shirts' },
	{ title: 'PANTS', subtitle: 'Many pants' },
	{ title: 'SOCKS', subtitle: 'Many socks' },
];

export default function HomePage() {
	return (
		<div className='homepage'>
			<CardContainer cards={homepageCards} />
		</div>
	);
}
