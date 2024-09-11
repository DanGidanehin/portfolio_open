import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import PropTypes from "prop-types";
import CanvasLoader from "@components/Loader";

const Computer = ({ isMobile }) => {
	const { scene } = useGLTF("./desktop_pc/scene.gltf", true, (error) => {
		console.error("Error loading GLTF model", error);
	});

	return (
		<mesh>
			<hemisphereLight
				intensity={2.5}
				groundColor="black"
			/>
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={scene}
				scale={isMobile ? 0.36 : 0.55}
				position={isMobile ? [0, -1.5, -0.7] : [0, -2, -1]}
				rotation={[-0.01, -0.45, -0.05]}
			/>
		</mesh>
	);
};

Computer.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};

const ComputerCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 800px)");

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computer isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputerCanvas;
