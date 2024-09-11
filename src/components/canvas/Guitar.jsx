import React, { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "@components/Loader";

const Guitar = () => {
	const guitar = useGLTF("./guitar/scene.gltf");

	return (
		<mesh>
			<hemisphereLight
				intensity={10}
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
				object={guitar.scene}
				scale={18}
				position={[4, -8, -3.5]}
				rotation={[0.5, -0.45, 0.3]}
			/>
		</mesh>
	);
};

const GuitarCanvas = () => {
	
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 60 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate={true}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Guitar />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default GuitarCanvas;
