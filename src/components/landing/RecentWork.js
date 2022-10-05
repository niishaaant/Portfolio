import React from 'react';
import { Link } from 'react-router-dom';
import './rw.scss';
import dev from '../../utils/devcnctr.png';
import silicon from '../../utils/silicon.png';
import vybrnt from '../../utils/vybrnt.jpg';

const RecentWork = () => {
	return (
		<div className='recentWork' id='work'>
			<div className='shortNote'>
				<p>
					A third-year B.tech student at University Institute of Technology,
					Shimla. I'm currently working with a local agency,{' '}
					<a>Silicon Garage</a>. In my spare time I usually work on my personal
					projects and am currently learning Blockchain Development. Here's some
					of my work.
				</p>
			</div>
			<div className='workContainer'>
				<div className='devConnector' data-aos='fade-right'>
					{' '}
					<Link to='/DevConnector' className='Link'>
						DevConnector <img src={dev} />
					</Link>
				</div>

				<div className='siliconGarage' data-aos='fade-left'>
					{' '}
					<Link to='/SiliconGarage' className='Link'>
						Silicon Garage <img src={silicon} />
					</Link>
				</div>
				<div className='vybrnt' data-aos='fade-right'>
					{' '}
					<Link to='/VYBRNT' className='Link'>
						VYBRNT<span className='soon'>coming soon</span>
						<img src={vybrnt} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecentWork;
