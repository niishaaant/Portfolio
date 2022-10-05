import React from 'react';
import dev from '../../utils/devMain.png';
import './workPage.scss';

const Devconnector = () => {
	return (
		<div className='workOverlayContainer'>
			<div className='Left'>
				<div className='heading'>
					<span>DevConnector</span>
				</div>
				<div className='animatedLine'></div>
				<div className='para'>
					<span>
						DevConnector was a very simple social networking site which was made
						with the motive of connecting developers so that they can interact
						and solve problems with each other. I made this website while
						learning about the MERN stack.
					</span>
				</div>
				<div className='para'>
					<span>
						The technologies used while building this website were ReactJS |
						ExpressJS | MongoDB | NodeJS | Redux | JWT. My main aim while
						building this project was to learn about authentication and store
						management and their implimentations.{' '}
					</span>
				</div>
				<div className='para'>
					<a href='https://silly-wescoff-fdad6c.netlify.app' className='visit'>
						<span>Visit Website</span>
					</a>
				</div>
			</div>
			<div className='Right'>
				<div className=''>
					<div className='collargeContainer'>
						<span>
							<img src={dev} />
						</span>
					</div>
					<span>
						Scroll <i class='fa-solid fa-circle-right'></i>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Devconnector;
