import React from 'react';
import './about.scss';
import RecentWork from '../landing/RecentWork';
import LetsTalk from '../../utils/letsTalk/LetsTalk';
import Card from '../../utils/card/Card';

const About = () => {
	return (
		<>
			<div className='aboutContainer'>
				<div className='heading'>
					<span>ABOUT ME</span>
				</div>
				<div className='aboutContent'>
					<span>Delhi-based independent designer and developer.</span>
				</div>
				<div className='animatedLine'></div>
				<div className='container'>
					<div className='containerContent'>
						<span>
							A freelancer who's passionate about creating eye catching web
							designs alongside a powerful back-end through creative coding to
							make your website stand out. Been working as a Full-Stack
							Developer for over one year.{' '}
						</span>
					</div>
					<div className='img'></div>
				</div>
				<div className='cardContainer'>
					<Card>
						<h1>Looking for new opportunities!</h1>Whether you're looking for a
						digital product or have a full time opportunity you can easily
						contact me by clicking{' '}
						<a href='mailto:niishaaant06@gmail.com'>here</a>.
					</Card>
					<Card>
						<h1>Independent | Freelance</h1>
						<span>Full-Stack Development</span>, <span>3D Design</span>,{' '}
						<span>Blockchain Development</span>
					</Card>
				</div>
			</div>
			<RecentWork />
			<LetsTalk />
		</>
	);
};

export default About;
