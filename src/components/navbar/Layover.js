import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './layover.scss';

const Layover = (props) => {
	return (
		<div
			className={`layoverContainer ${
				props.lines ? (props.first ? 'showw' : '') : props.first ? 'hidee' : ''
			}`}
		>
			<div className='linksContainer'>
				<Link
					to='/'
					onClick={() => {
						props.toggle();
					}}
				>
					HOME
				</Link>
				<a
					href='#work'
					onClick={() => {
						props.toggle();
					}}
				>
					WORK
				</a>

				<Link
					to='/about'
					onClick={() => {
						props.toggle();
					}}
				>
					ABOUT
				</Link>
			</div>
			<div className='socialLinks'>
				<a href='https://www.instagram.com/niishaaaant/'>
					<i className='fab fa-instagram'></i>
				</a>
				<a href='https://www.facebook.com/nishant.chandel.25/'>
					<i className='fab fa-facebook'></i>
				</a>
				<a href='https://www.linkedin.com/in/nishant-chandel-835834177'>
					<i className='fab fa-linkedin'></i>
				</a>
				<a href='mailto:nishant98680042@gmail.com'>
					<i className='fas fa-at'></i>
				</a>
			</div>
			<div className='anchorContainer'>
				<div className='rope'>
					<i className='far fa-dot-circle'></i>
				</div>
				<div className='anchor'></div>
			</div>
			<Outlet />
		</div>
	);
};

export default Layover;
