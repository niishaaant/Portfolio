import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './click.scss';

const ClickOverlay = ({ ready, clicked, setClicked, setReady, children }) => {
	useEffect(() => setTimeout(() => setReady(true), 500), []);
	return (
		<>
			{clicked && children}
			<div
				className={`fullscreen ${ready ? 'ready' : 'notready'} ${
					clicked && 'clicked'
				}`}
			>
				<div onClick={() => ready && setClicked(true)}>
					{!ready ? 'Nishant Chandel' : 'Click to Continue'}
				</div>
			</div>
		</>
	);
};

export default ClickOverlay;
