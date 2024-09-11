import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import PropTypes from "prop-types";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "@components/Loader";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float
			speed={1.75}
			rotationIntensity={1}
			floatIntensity={1}>
			<ambientLight intensity={1} />
			<directionalLight
				position={[0, 0, 0.05]}
				intensity={0.5}
			/>
			<mesh
				castShadow
				receiveShadow
				scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#decfff"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					map={decal}
				/>
			</mesh>
		</Float>
	);
};
Ball.propTypes = {
	imgUrl: PropTypes.string.isRequired,
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};
BallCanvas.propTypes = {
	icon: PropTypes.string.isRequired,
};

export default BallCanvas;
