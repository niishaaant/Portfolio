import React from 'react';
import vyb from '../../utils/vybrnt.jpg';
import './workPage.scss';

const Silicon = () => {
	return (
		<div className='workOverlayContainer'>
			<div className='Left'>
				<div className='heading'>
					<span>VYBRNT House</span>
				</div>
				<div className='animatedLine'></div>
				<div className='para'>
					<span>
						The VYBRNT House will be an E-commerce store for printed hoodies and
						T-shirts enthusiasts. It offers custom printed T-shris, hoodies and
						phone covers. Do check them out at |
						<a
							href='https://www.instagram.com/vybrnthouse'
							className='thisLink'
						>
							{' '}
							this link
						</a>{' '}
						|.
					</span>
				</div>
				<div className='para'>
					<span className='comingSoon'>Coming Soon</span>
				</div>
			</div>
			<div className='Right'>
				<div className='collargeContainer'>
					<span>
						<img src={vyb} alt='' />
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
