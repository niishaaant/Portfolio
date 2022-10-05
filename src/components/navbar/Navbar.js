import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layover from './Layover';
import './nav.scss';

const Navber = () => {
	const [lines, setLines] = useState(true);
	const [first, setFirst] = useState(false);
	const toggleNav = () => {
		setLines(!lines);
		setFirst(true);
	};

	return (
		<div>
			<div className={`navContainer ${lines ? '' : 'show'}`}>
				<div className='navLeft'>Delhi, India</div>
				<div className='name big'>
					{/* on click some animaion */}
					<Link to='/#'>Nishant Chandel</Link>
				</div>
				<div className='name small'>
					{/* on click some animaion */}
					<Link to='/#'>NC</Link>
				</div>
				<div className='navRight'>
					{/* on click animation to open nav view */}
					<div
						className={`lineContainer ${lines ? '' : 'cross'}`}
						onClick={toggleNav}
					>
						<div className='lineTop'></div>
						<div className='lineDown'></div>
					</div>
				</div>
			</div>
			<Layover lines={lines} first={first} toggle={toggleNav} />
		</div>
	);
};

export default Navber;
