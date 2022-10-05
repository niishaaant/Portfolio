import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import './App.scss';
import Landing from './components/landing/Landing';
import Background from './components/background/Background';
import ClickOverlay from './utils/clickOverlay/ClickOverlay';
import About from './components/about/About';
import DevC from './components/workover/Devconnector';
import Silicon from './components/workover/Silicon';
import VYBRNT from './components/workover/Vybrnt';

const App = () => {
	const [clicked, setClicked] = useState(false);
	const [ready, setReady] = useState(false);
	const store = { clicked, setClicked, ready, setReady };
	return (
		<>
			<ClickOverlay {...store}>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path='/' element={<Landing />} />
						<Route path='/about' element={<About />} />
						<Route path='/DevConnector' element={<DevC />} />
						<Route path='/SiliconGarage' element={<Silicon />} />
						<Route path='/VYBRNT' element={<VYBRNT />} />
					</Routes>
				</BrowserRouter>
				<Background {...store} />
			</ClickOverlay>
		</>
	);
};

export default App;
