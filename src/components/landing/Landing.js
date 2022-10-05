import React from 'react';
import LetsTalk from '../../utils/letsTalk/LetsTalk';
import './landing.scss';
import RecentWork from './RecentWork';

const Landing = () => {
	return (
		<>
			<div className='landing'>
				<span>
					<div>
						<p className='early'>Hey there, my name is Nishant Chandel.</p>
					</div>
					<div className='animatedLine'></div>
					<div>
						<p className='late'>I am a Designer /</p>
					</div>
					<div>
						<p className='late'> Full stack web developer /</p>
					</div>
					<div>
						<p className='late'>DAPP developer</p>
					</div>
					<div>
						<p className='late'>living in New Delhi, India.</p>
					</div>
				</span>
			</div>
			<RecentWork />
			<LetsTalk />
		</>
	);
};

export default Landing;
