import React, { Suspense, useState, useEffect } from 'react';
import './back.scss';

import * as THREE from 'three';
import { Reflector, Text, useTexture, Loader, Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

const VidTxt = ({ clicked, ...props }) => {
	const [video] = useState(() =>
		Object.assign(document.createElement('video'), {
			src: '/textVid.mp4',
			crossOrigin: 'Anonymous',
			loop: true,
			muted: true,
		})
	);
	const [isMobile, setIsMobile] = useState(3);

	const setMobileView = () => {
		if (window.innerWidth < 700) {
			setIsMobile(1.2);
		} else {
			setIsMobile(3);
		}
	};

	useEffect(() => {
		setMobileView();
	});
	console.log(isMobile);
	useEffect(() => void video.play(), [video]);
	return (
		<Text
			font='/inter.woff'
			fontSize={isMobile}
			letterSpacing={-0.06}
			{...props}
		>
			Create.
			<meshBasicMaterial toneMapped={false}>
				<videoTexture
					attach='map'
					args={[video]}
					encoding={THREE.sRGBEncoding}
				/>
			</meshBasicMaterial>
		</Text>
	);
};

const Ground = () => {
	const [floor, normal] = useTexture([
		'/floorRoughnessMap.jpg',
		'/floor_normal.jpg',
	]);
	return (
		<Reflector
			blur={[400, 400]}
			resolution={512}
			args={[100, 50]}
			mirror={0.6}
			mixBlur={6}
			mixStrength={1.7}
			rotation={[-Math.PI / 2, 0, Math.PI / 2]}
		>
			{(Material, props) => (
				<Material
					color='#a0a0a0'
					metalness={0.4}
					roughnessMap={floor}
					normalScale={[2, 2]}
					{...props}
				/>
			)}
		</Reflector>
	);
};

function Intro({ start, set }) {
	const [vec] = useState(() => new THREE.Vector3());

	return useFrame((state) => {
		if (start) {
			state.camera.position.lerp(
				vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
				0.05
			);
			state.camera.lookAt(0, 0, 0);
		}
	});
}

const Background = ({ clicked, ready, setReady }) => {
	return (
		<div className='background'>
			<Canvas
				gl={{ alpha: false }}
				pixelRatio={[1, 1.5]}
				camera={{ position: [0, 2, 15], fov: 60 }}
			>
				<fog attach='fog' args={['black', 15, 20]} />
				<Suspense
					fallback={
						<Html>
							<Loader />
						</Html>
					}
				>
					<group>
						<VidTxt position={[0, 1.3, 7]} />
						<Ground />
					</group>

					<ambientLight intensity={0.5} />
					<spotLight position={[0, 50, 0]} intensity={0.3} />
					<directionalLight position={[-20, 0, -10]} intensity={0.3} />
					<Intro start={ready && clicked} set={setReady} />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default Background;
