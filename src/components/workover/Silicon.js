import React from 'react';
import sili from '../../utils/siliconMain.png';
import './workPage.scss';

const Silicon = () => {
	return (
		<div className='workOverlayContainer'>
			<div className='Left'>
				<div className='heading'>
					<span>Silicon Garage</span>
				</div>
				<div className='animatedLine'></div>
				<div className='para'>
					<span>
						Silicon Garage is a Company which includes IT specialists that work
						for Social Media Marketing Strategies, Social Advertising, and
						Customer Services etc. Silicon Garage performs professional repair
						services that include the repairing of computers/laptops and also
						recovers your lost data from the system.{' '}
					</span>
				</div>
				<div className='para'>
					<span>
						The technologies used while building this website were ReactJS |
						THREEJS | NodeJS. My main aim while building this project was to
						learn about 3D Design and it's implimentation to give the client an
						eye catching website.{' '}
					</span>
				</div>
				<div className='para'>
					<a
						href='https://animated-shortbread-dcbae7.netlify.app/'
						className='visit'
					>
						<span>Visit Website</span>
					</a>
				</div>
			</div>
			<div className='Right'>
				<div className='collargeContainer'>
					<span>
						<img src={sili} />
					</span>
				</div>
				<span>
					Scroll <i class='fa-solid fa-circle-right'></i>
				</span>
			</div>
		</div>
	);
};

export default Silicon;
